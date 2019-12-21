import { Guard, Narrowable } from '../types';

/**
 * Creates a guard that tests if a value is identical to another value. This uses the JS
 * strict equality comparison operator (===) so primitives are compared by value but objects
 * are compared by reference.
 * @param other The other value to compare to
 * @returns The guard
 */
export function isIdenticalTo<T extends Narrowable>(other: T): Guard<T> {
    const guard = (value: unknown): value is T => value === other;
    (guard as Guard).expectation = `be identical to ${other}`;
    return guard;
}
