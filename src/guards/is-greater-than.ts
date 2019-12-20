import { Guard } from '../guard';
import { isComparable } from './is-comparable';

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
