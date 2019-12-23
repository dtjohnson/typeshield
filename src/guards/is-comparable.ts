import { Comparable, Guard } from '../types';
import { hasInterface } from './has-interface';
import { isFunction } from './is-function';

/**
 * @ignore
 */
const guard = hasInterface<Comparable>('Comparable', {
    compareTo: isFunction,
});

/**
 * Guard that tests if the value implements the [[Comparable]] interface
 * @param value The value to test
 * @returns The result of the test
 */
export function isComparable(value: unknown): value is Comparable {
    return guard(value);
}
(isComparable as Guard).expectation = guard.expectation;
