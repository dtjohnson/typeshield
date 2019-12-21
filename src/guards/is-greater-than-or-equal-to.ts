import { Guard } from '../types';
import { isComparable } from './is-comparable';

export function isGreaterThanOrEqualTo<T>(other: T): Guard<T> {
    const guard = (value: unknown): value is T => {
        if (isComparable(other)) {
            const comparison = other.compareTo(value);
            return comparison !== undefined && comparison <= 0;
        }

        return (value as any) >= other;
    };

    (guard as Guard).expectation = `be greater than or equal to ${other}`;

    return guard;
}
