import { Guard, Validator, getExpectation } from '../guard';
import { isArray } from './is-array';

export function isEach<T>(eachGuard: Guard<T>): Guard<T[]>;
export function isEach(eachGuard: Validator): Validator;
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
