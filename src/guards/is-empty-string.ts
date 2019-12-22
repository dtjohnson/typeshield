import { Guard } from '../types';
import { isIdenticalTo } from './is-identical-to';

/**
 * @ignore
 */
const guard = isIdenticalTo('');

/**
 * Guard that tests if the value is an empty string
 * @param value The value to test
 * @returns The result of the test
 */
export function isEmptyString(value: unknown): value is '' {
    return guard(value);
}
(isEmptyString as Guard).expectation = 'be an empty string';
