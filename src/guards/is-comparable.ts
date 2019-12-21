import { Comparable } from '../types';
import { hasProperties } from './has-properties';
import { isFunction } from './is-function';

/**
 * Guard that tests if the value implements the [[Comparable]] interface
 * @param value The value to test
 * @returns The result of the test
 */
export const isComparable = hasProperties<Comparable>({
    compareTo: isFunction,
}, 'Comparable');
