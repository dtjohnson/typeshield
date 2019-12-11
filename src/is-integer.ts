import { Guard } from './types';
import { isNumber } from './is-number';
import { isUndefined } from './is-undefined';
import { or } from './operators';

const isIntegerTag = Symbol('isInteger');
export type Integer = number & { [isIntegerTag]: void };

export function isInteger(value: unknown): value is Integer {
    return isNumber(value) && Number.isInteger(value);
}
(isInteger as Guard).expectation = 'be an integer';

export const isIntegerOrUndefined = or(isInteger, isUndefined);
