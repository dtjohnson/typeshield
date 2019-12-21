import { Guard, Narrowable } from '../types';
import { isComparable } from './is-comparable';
import { isEquatable } from './is-equatable';
import { isIdenticalTo } from './is-identical-to';
import { or } from '../operators/or';

/**
 * Creates a guard that tests if a value is equal to a specified object. Values are compared by identity first and
 * then by using the [[Equatable]] or [[Comparable]] interfaces, if implemented.
 * @param other The object to compare values to
 * @returns The guard
 */
export function isEqualTo<T extends Narrowable>(other: T): Guard<T> {
    const identityGuard = isIdenticalTo(other);
    let otherGuard: Guard<T>|undefined;

    if (isEquatable(other)) otherGuard = (value: unknown): value is T => other.equals(value);
    else if (isComparable(other)) otherGuard = (value: unknown): value is T => other.compareTo(value) === 0;

    const guard = otherGuard ? or(identityGuard, otherGuard) : identityGuard;
    (guard as Guard).expectation = `be equal to ${other}`;
    return guard;
}
