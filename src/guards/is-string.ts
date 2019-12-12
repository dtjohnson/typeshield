import { Guard } from '../guard';
import { isUndefined } from './is-undefined';
import { or } from '../operators/or';

export function isString(value: unknown): value is string {
    return typeof value === 'string';
}
(isString as Guard).expectation = 'be a string';

export const isStringOrUndefined = or(isUndefined, isString);
