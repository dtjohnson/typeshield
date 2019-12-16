import { Guard } from '../guard';
import { isUndefined } from './is-undefined';
import { or } from '../operators/or';

export function isSymbol(value: unknown): value is string {
    return typeof value === 'symbol';
}
(isSymbol as Guard).expectation = 'be a symbol';

export const isSymbolOrUndefined = or(isSymbol, isUndefined);
