import { Guard } from '../types';

/**
 * Guard that tests if the value is null
 * @param value The value to test
 * @returns The result of the test
 */
export function isNull(value: unknown): value is null {
    return value === null;
}
(isNull as Guard).expectation = 'be null';
