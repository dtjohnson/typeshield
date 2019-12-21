import { Equatable } from '../types';
import { hasProperties } from './has-properties';
import { isFunction } from './is-function';

/**
 * Guard that tests if the value implements the [[Equatable]] interface
 * @param value The value to test
 * @returns The result of the test
 */
export const isEquatable = hasProperties<Equatable>({
    equals: isFunction,
}, 'Equatable');
