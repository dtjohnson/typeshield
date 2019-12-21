import { Guard } from '../types';

/**
 * Guard that tests if the value is an array
 * @param value The value to test
 * @returns The result of the test
 */
export function isArray(value: unknown): value is unknown[] {
    return Array.isArray(value);
}
(isArray as Guard).expectation = 'be an array';
