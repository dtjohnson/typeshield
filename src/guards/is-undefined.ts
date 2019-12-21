import { Guard } from '../types';

/**
 * Guard that tests if the value is undefined
 * @param value The value to test
 * @returns The result of the test
 */
export function isUndefined(value: unknown): value is undefined {
    return value === undefined;
}
(isUndefined as Guard).expectation = 'be undefined';
