import { Guard } from '../types';
import { isArray } from './is-array';

/**
 * Guard that tests if the value is an array that is not empty
 * @param value The value to test
 * @returns The result of the test
 */
export function isNonEmptyArray(value: unknown): value is unknown[] {
    return isArray(value) && value.length > 0;
}
(isNonEmptyArray as Guard).expectation = 'be a non-empty array';
