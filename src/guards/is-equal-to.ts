import { Guard, Narrowable } from '../types';
import { isComparable } from './is-comparable';
import { isEquatable } from './is-equatable';
import { isIdenticalTo } from './is-identical-to';
import { or } from '../operators/or';

export function isEqualTo<T extends Narrowable>(other: T): Guard<T> {
    const identityGuard = isIdenticalTo(other);
    let otherGuard: Guard<T>|undefined;

    if (isEquatable(other)) otherGuard = (value: unknown): value is T => other.equals(value);
    else if (isComparable(other)) otherGuard = (value: unknown): value is T => other.compareTo(value) === 0;

    const guard = otherGuard ? or(identityGuard, otherGuard) : identityGuard;
    (guard as Guard).expectation = `be equal to ${other}`;
    return guard;
}
