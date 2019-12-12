import { Guard } from '../guard';
import { isUndefined } from './is-undefined';
import { or } from '../operators/or';

export function isFunction(value: unknown): value is Function {
    return typeof value === 'function';
}
(isFunction as Guard).expectation = 'be a function';

export const isFunctionOrUndefined = or(isFunction, isUndefined);
