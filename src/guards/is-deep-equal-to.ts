import { Guard, Narrowable } from '../types';
import deepEqual from 'deep-equal';

/**
 * Creates a guard that tests if a value is equal to the specified value using the [deep-equal package]{@link https://www.npmjs.com/package/deep-equal}
 * @param other The object to compare values to
 * @param strict True to use strict equality (default) and false to use coercive equality
 * @returns The guard
 */
export function isDeepEqualTo<T extends Narrowable>(other: T, strict: boolean = true): Guard<T> {
    const guard = (value: unknown): value is T => deepEqual(value, other, { strict });
    (guard as Guard).expectation = `be deep equal to ${other}`;
    return guard;
}
