import { Equatable, Guard } from '../types';
import { hasProperties } from './has-properties';
import { isFunction } from './is-function';

/**
 * @ignore
 */
const guard = hasProperties<Equatable>({
    equals: isFunction,
}, 'Equatable');

/**
 * Guard that tests if the value implements the [[Equatable]] interface
 * @param value The value to test
 * @returns The result of the test
 */
export function isEquatable(value: unknown): value is Equatable {
    return guard(value);
}
(isEquatable as Guard).expectation = guard.expectation;
