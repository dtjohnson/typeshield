import { Guard } from '../types';
import { isNumber } from './is-number';

export type Integer = number & { __Integer__: void };

export function isInteger(value: unknown): value is Integer {
    return isNumber(value) && Number.isInteger(value);
}
(isInteger as Guard).expectation = 'be an integer';
