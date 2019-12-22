import { Comparable, Guard } from '../types';
import { hasProperties } from './has-properties';
import { isFunction } from './is-function';

/**
 * @ignore
 */
const guard = hasProperties<Comparable>({
    compareTo: isFunction,
}, 'Comparable');

/**
 * Guard that tests if the value implements the [[Comparable]] interface
 * @param value The value to test
 * @returns The result of the test
 */
export function isComparable(value: unknown): value is Comparable {
    return guard(value);
}
(isComparable as Guard).expectation = guard.expectation;
