import { Guard } from './types';
import { isUndefined } from './is-undefined';
import { or } from './operators';

export function isNumber(value: unknown): value is number {
    return typeof value === 'number';
}
(isNumber as Guard).expectation = 'be a number';

export const isNumberOrUndefined = or(isNumber, isUndefined);
