import { Guard } from '../types';
import { isEmptyString } from './is-empty-string';
import { isString } from './is-string';

/**
 * Guard that tests if the value is a string that is not empty
 * @param value The value to test
 * @returns The result of the test
 */
export function isNonEmptyString(value: unknown): value is string {
    return isString(value) && !isEmptyString(value);
}
(isNonEmptyString as Guard).expectation = 'be a non-empty string';
