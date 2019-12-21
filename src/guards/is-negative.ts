import { Guard } from '../types';
import { isNumber } from './is-number';

/**
 * Brand interface for [[Negative]]
 */
interface NegativeBrand {
    __Negative__: void;
}

/**
 * A number that is negative
 */
export type Negative = number & NegativeBrand;

/**
 * Guard that tests if the value is a negative number
 * @param value The value to test
 * @returns The result of the test
 */
export function isNegative(value: unknown): value is Negative {
    return isNumber(value) && value < 0;
}
(isNegative as Guard).expectation = 'be a negative number';
