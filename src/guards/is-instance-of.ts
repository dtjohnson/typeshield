import { Guard } from '../types';

type Constructor<T> = new(...args: any[]) => T;

export function isInstanceOf<T>(constructor: Constructor<T>): Guard<T> {
    const guard = (value: unknown): value is T => value instanceof constructor;
    (guard as Guard).expectation = `be an instance of '${constructor.name}'`;
    return guard;
}
