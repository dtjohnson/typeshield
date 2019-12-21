import { Guard, Validator } from '../types';
import { getExpectation } from '../get-expectation';
import { isArray } from './is-array';

/**
 * Creates a guard that tests if a value is an array and that each value in the array satisfies the given guard.
 * @param eachGuard The guard used for each item in the array.
 * @returns The guard
 */
export function isEach<T>(eachGuard: Guard<T>): Guard<T[]>;
/**
 * Creates a validator that tests if a value is an array and that each value in the array satisfies the given validator.
 * @param eachValidator The validator used for each item in the array.
 * @returns The validator
 */
export function isEach(eachValidator: Validator): Validator;
export function isEach<T>(eachGuard: Guard<T>|Validator): Guard<T[]> {
    const guard = (value: unknown): value is T[] => {
        if (!isArray(value)) return false;
        for (const val of value) {
            if (!eachGuard(val)) return false;
        }

        return true;
    };
    (guard as Guard).expectation = `all ${getExpectation(eachGuard)}`;

    return guard;
}
