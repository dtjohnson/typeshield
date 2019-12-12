import { Guard } from '../guard';
import { isUndefined } from './is-undefined';
import { or } from '../operators/or';

type Constructor<T> = new(...args: any[]) => T;

export function isInstanceOf<T>(constructor: Constructor<T>): Guard<T> {
    const guard = (value: unknown): value is T => value instanceof constructor;
    (guard as Guard).expectation = `be an instance of '${constructor.name}'`;
    return guard;
}

export function isInstanceOfOrUndefined<T>(constructor: Constructor<T>): Guard<T|undefined> {
    return or(isInstanceOf(constructor), isUndefined);
}
