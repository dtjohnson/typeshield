import { Guard } from '../guard';
import { isUndefined } from './is-undefined';
import { or } from '../operators/or';

export function isBoolean(value: unknown): value is string {
    return typeof value === 'boolean';
}
(isBoolean as Guard).expectation = 'be a boolean';

export const isBooleanOrUndefined = or(isBoolean, isUndefined);
