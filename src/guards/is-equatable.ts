import { Equatable, Guard } from '../types';
import { hasInterface } from './has-interface';
import { isFunction } from './is-function';

/**
 * @ignore
 */
const guard = hasInterface<Equatable>('Equatable', {
    equals: isFunction,
});

/**
 * Guard that tests if the value implements the [[Equatable]] interface
 * @param value The value to test
 * @returns The result of the test
 */
export function isEquatable(value: unknown): value is Equatable {
    return guard(value);
}
(isEquatable as Guard).expectation = guard.expectation;
