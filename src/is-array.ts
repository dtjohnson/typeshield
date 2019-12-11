import { Guard } from './types';
import { isUndefined } from './is-undefined';
import { or } from './operators';

export function isArray(value: unknown): value is unknown[] {
    return Array.isArray(value);
}
(isArray as Guard).expectation = 'be an array';

export const isArrayOrUndefined = or(isArray, isUndefined);
