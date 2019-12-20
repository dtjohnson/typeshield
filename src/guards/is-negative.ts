import { Guard } from '../guard';
import { isNumber } from './is-number';

export type Negative = number & { __Negative__: void };

export function isNegative(value: unknown): value is Negative {
    return isNumber(value) && value < 0;
}
(isNegative as Guard).expectation = 'be a negative number';
