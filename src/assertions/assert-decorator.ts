import { Validator } from '../types';
import { assertValue } from './assert-value';

/**
 * Validation info from the decorator
 * @ignore
 */
interface ValidatorInfo {
    /**
     * The validator
     */
    validator: Validator|(() => Validator);

    /**
     * The name to use in the error
     */
    name: string;

    /**
     * The expectation to use in the error
     */
    expectation?: string;
}

/**
 * A decorator factory that returns a decorator that turns a property into a getter/setter with a setter the asserts the value set matches the validator.
 * @param validator The guard/validator to assert
 * @param name The name to use for the value. Defaults to the class+method name
 * @param expectation An expection message to override the guard/validator expectation
 * @returns The decorator.
 */
export function Assert(validator: Validator|(() => Validator), name?: string, expectation?: string): PropertyDecorator {
    return (target: any, propertyKey) => {
        // Create the key for the private backing field by prefixing an underscore
        const key = `_${propertyKey.toString()}`;

        // Create the key where the validators will be stored
        const validatorsKey = `${key}_validators`;

        // If no name is provided, use the class name combined with the property key. If the target is a function
        // then this is a static property. Otherwise it is an instance property
        if (name === undefined) {
            name = typeof target === 'function'
                ? `${target.name}.${propertyKey.toString()}`
                : `${target.constructor.name}#${propertyKey.toString()}`;
        }

        let validatorInfos = target[validatorsKey] as ValidatorInfo[]|undefined;

        // If this is the first decorator for the property, we need to create the validators array and the new getter/setter.
        if (!validatorInfos) {
            validatorInfos = target[validatorsKey] = [];
            Object.defineProperty(target, propertyKey, {
                get() {
                    return this[key];
                },
                set(value: unknown) {
                    /* istanbul ignore next */
                    for (const info of validatorInfos ?? []) {
                        assertValue(info.validator, value, info.name, info.expectation);
                    }
                    this[key] = value;
                },
            });
        }

        // Push the validator defined
        validatorInfos.push({
            validator,
            name,
            expectation,
        });
    };
}
