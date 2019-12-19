import { Guard } from '../guard';
import { Narrowable } from '../internal';

export function isIdenticalTo<T extends Narrowable>(other: T): Guard<T> {
    const guard = (value: unknown): value is T => value === other;
    (guard as Guard).expectation = `be identical to ${other}`;
    return guard;
}
