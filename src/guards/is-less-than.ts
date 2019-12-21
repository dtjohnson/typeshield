import { Guard } from '../types';
import { isComparable } from './is-comparable';

export function isLessThan<T>(other: T): Guard<T> {
    const guard = (value: unknown): value is T => {
        if (isComparable(other)) {
            const comparison = other.compareTo(value);
            return comparison !== undefined && comparison > 0;
        }

        return (value as any) < other;
    };

    (guard as Guard).expectation = `be less than ${other}`;

    return guard;
}
