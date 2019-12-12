import { Guard, Validator } from '../guard';
import { isArray } from './is-array';

export function isEach<T>(guard: Guard<T>): Guard<T[]>;
export function isEach(guard: Validator): Validator;
export function isEach<T>(guard: Guard<T>|Validator): Guard<T[]> {
    return (value: unknown): value is T[] => {
        if (!isArray(value)) return false;
        for (const val of value) {
            if (!guard(val)) return false;
        }

        return true;
    };
}
