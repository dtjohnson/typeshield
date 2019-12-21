import { Guard } from '../types';
import { isArray } from './is-array';

/**
 * Guard that tests if the value is an empty array
 * @param value The value to test
 * @returns The result of the test
 */
export function isEmptyArray(value: unknown): value is unknown[] {
    return isArray(value) && value.length === 0;
}
(isEmptyArray as Guard).expectation = 'be an empty array';
