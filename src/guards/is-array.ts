import { Guard } from '../guard';
import { isUndefined } from './is-undefined';
import { or } from '../operators/or';

export function isArray(value: unknown): value is unknown[] {
    return Array.isArray(value);
}
(isArray as Guard).expectation = 'be an array';

export const isArrayOrUndefined = or(isArray, isUndefined);
