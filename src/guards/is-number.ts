import { Guard } from '../types';

/**
 * Guard that tests if the value is a number
 * @param value The value to test
 * @returns The result of the test
 */
export function isNumber(value: unknown): value is number {
    return typeof value === 'number';
}
(isNumber as Guard).expectation = 'be a number';
