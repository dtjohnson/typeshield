import { Guard } from '../types';
import { isComparable } from './is-comparable';

/**
 * Creates a guard that tests if a value is greater than a specified value. Will first
 * compare using the [[Comparable]] interface, if implemented and will fall back to operator comparison.
 * @param other The value to compare to
 * @returns The guard
 */
export function isGreaterThan<T>(other: T): Guard<T> {
    const guard = (value: unknown): value is T => {
        if (isComparable(other)) {
            const comparison = other.compareTo(value);
            return comparison !== undefined && comparison < 0;
        }

        return (value as any) > other;
    };

    (guard as Guard).expectation = `be greater than ${other}`;

    return guard;
}
