import * as fs from 'fs';
import { Application, DeclarationReflection, ReflectionKind } from 'typedoc';
import { PredicateType, ReferenceType } from 'typedoc/dist/lib/models';
import options from '../typedoc.js';

/* eslint-disable no-sync */
/* eslint-disable max-len */

// Create a new TypeDoc app with our project options
const app = new Application(options);

// Convert the project
const project = app.convert([ 'src/index' ])!;

interface FactoryParam {
    name: string;
    type: string;
    typeRef: boolean;
    description?: string;
}
interface GuardRef {
    name: string;
    factoryParams?: FactoryParam[];
    returnType: string;
    returnTypeRef: boolean;
    description?: string;
}

const guardRefs: GuardRef[] = [];

function isInternalRef(ref: string): boolean {
    const reflection = project.findReflectionByName(ref);
    if (!reflection) return false;
    return reflection.kind !== ReflectionKind.TypeParameter;
}

// Loop through each function relection, finding any guards.
for (const reflection of project.getReflectionsByKind(ReflectionKind.Function)) {
    const declaration = reflection as DeclarationReflection;
    const signature = declaration?.signatures?.[0];

    // Skip declarations that do not have function signatures and are not in the guards directory
    if (!signature || !signature.sources || !signature.sources[0].fileName.includes('src/guards/')) continue;

    // If it the return type is predicate type, this is a guard
    if (signature.type instanceof PredicateType) {
        let returnType = signature.type.targetType!.toString()!;
        if (returnType === 'Function') returnType = returnType.toLowerCase();

        guardRefs.push({
            name: declaration.name,
            description: (signature.comment?.shortText ?? '').replace(/\n/ug, ' '),
            returnType,
            returnTypeRef: isInternalRef(returnType),
        });
    }

    // If the return type is a guard, this is a factory
    if (signature.type instanceof ReferenceType && signature.type.name === 'Guard') {
        const returnType = signature.type.typeArguments![0].toString();

        guardRefs.push({
            name: declaration.name,
            description: (signature.comment?.shortText ?? '').replace(/\n/ug, ' '),
            returnType,
            returnTypeRef: isInternalRef(returnType),
            factoryParams: (signature.parameters ?? []).map(param => ({
                name: param.name,
                type: param.type!.toString(),
                typeRef: isInternalRef(param.type!.toString()),
                description: (param.comment?.text ?? '').replace(/\n/ug, ' '),
            })),
        });
    }
}

// Sort the guards alphabetically by name
guardRefs.sort((a, b) => a.name > b.name ? 1 : -1);

// Build the markdown table
let table = guardRefs
    .map(ref => `| [[${ref.name}]] | ${(ref.factoryParams ?? []).map(param => `__${param.name}__: ${param.typeRef ? `[[${param.type.replace(/\|/ug, '\\|')}]]` : param.type.replace(/\|/ug, '\\|')} - ${param.description}`).join('BREAK')} | ${ref.returnTypeRef ? `[[${ref.returnType}]]` : ref.returnType} | ${ref.description}`)
    .join('\n');

table = `<!-- guardref -->\n| Name | Factory Params | Return Type | Description |\n| --- | --- | --- | --- |\n${table.replace(/</ug, '&lt;').replace(/>/ug, '&gt;')
    .replace(/BREAK/ug, '<br />')}\n<!-- guardrefstop -->`;

// Read in the readme, replace the placeholder text, and rewrite it.
let readme = fs.readFileSync('README.md', 'utf8');
readme = readme.replace(/<!--\s*guardref\s*-->(?:[\s\S]*<!--\s*guardrefstop\s*-->)?/u, table);
fs.writeFileSync('README.md', readme);
