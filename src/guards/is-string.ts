import { Guard } from '../types';

/**
 * Guard that tests if the value is a string
 * @param value The value to test
 * @returns The result of the test
 */
export function isString(value: unknown): value is string {
    return typeof value === 'string';
}
(isString as Guard).expectation = 'be a string';
