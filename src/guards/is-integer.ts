import { Guard } from '../guard';
import { isNumber } from './is-number';

const isIntegerTag = Symbol('isInteger');
export type Integer = number & { [isIntegerTag]: void };

export function isInteger(value: unknown): value is Integer {
    return isNumber(value) && Number.isInteger(value);
}
(isInteger as Guard).expectation = 'be an integer';
