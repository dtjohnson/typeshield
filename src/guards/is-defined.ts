import { Guard } from '../types';
import { isNil } from './is-nil';

/**
 * Guard that tests if the value is not null and not undefined
 * @param value The value to test
 * @returns The result of the test
 */
export function isDefined<T>(value: T): value is NonNullable<T> {
    return !isNil(value);
}
(isDefined as Guard).expectation = 'be defined';
