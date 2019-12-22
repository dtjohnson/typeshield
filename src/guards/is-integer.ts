import { Guard, Tagged } from '../types';
import { isNumber } from './is-number';

/**
 * A number that is an integer
 */
export type Integer = Tagged<number, '__Integer__'>;

/**
 * Guard that tests if the value is an integer
 * @param value The value to test
 * @returns The result of the test
 */
export function isInteger(value: unknown): value is Integer {
    return isNumber(value) && Number.isInteger(value);
}
(isInteger as Guard).expectation = 'be an integer';
