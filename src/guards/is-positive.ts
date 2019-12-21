import { Guard } from '../types';
import { isNumber } from './is-number';

/**
 * Brand interface for [[Positive]]
 */
interface PositiveBrand {
    __Positive__: void;
}

/**
 * A number that is positive
 */
export type Positive = number & PositiveBrand;

/**
 * Guard that tests if the value is a positive number
 * @param value The value to test
 * @returns The result of the test
 */
export function isPositive(value: unknown): value is Positive {
    return isNumber(value) && value > 0;
}
(isPositive as Guard).expectation = 'be a positive number';
