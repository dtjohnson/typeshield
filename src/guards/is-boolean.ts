import { Guard } from '../types';

/**
 * Guard that tests if the value is a boolean
 * @param value The value to test
 * @returns The result of the test
 */
export function isBoolean(value: unknown): value is boolean {
    return typeof value === 'boolean';
}
(isBoolean as Guard).expectation = 'be a boolean';
