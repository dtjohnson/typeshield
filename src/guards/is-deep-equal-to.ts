import { Guard, Narrowable } from '../types';
import deepEqual from 'deep-equal';

export function isDeepEqualTo<T extends Narrowable>(other: T, strict: boolean = true): Guard<T> {
    const guard = (value: unknown): value is T => deepEqual(value, other, { strict });
    (guard as Guard).expectation = `be deep equal to ${other}`;
    return guard;
}
