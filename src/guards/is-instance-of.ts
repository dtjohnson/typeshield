import { Guard } from '../types';

/**
 * A constructor
 */
type Constructor<T> = new(...args: any[]) => T;

/**
 * Creates a guard that tests if a value is an instance of the specified constructor
 * @param constructor The constructor
 * @returns The guard
 */
export function isInstanceOf<T>(constructor: Constructor<T>): Guard<T> {
    const guard = (value: unknown): value is T => value instanceof constructor;
    (guard as Guard).expectation = `be an instance of '${constructor.name}'`;
    return guard;
}
