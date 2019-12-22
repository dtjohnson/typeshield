import { Guard } from '../types';
import { isInstanceOf } from './is-instance-of';

/**
 * @ignore
 */
const guard = isInstanceOf(Date);

/**
 * Guard that tests if the value is an instance of Date
 * @param value The value to test
 * @returns The result of the test
 */
export function isDate(value: unknown): value is Date {
    return guard(value);
}
(isDate as Guard).expectation = 'be a date';
