import { Guard } from './types';
import { isUndefined } from './is-undefined';
import { or } from './operators';

// Use this trick to infer the type as a literal if possible
type Narrowable = string | number | boolean | undefined | null | void | {};

export function isEqualTo<T extends Narrowable>(other: T): Guard<T> {
    // TODO: Equatable
    const guard = (value: unknown): value is T => value === other;
    (guard as Guard).expectation = `be equal to ${other}`;
    return guard;
}

export function isEqualToOrUndefined<T extends Narrowable>(other: T): Guard<T|undefined> {
    return other === undefined ? isUndefined : or(isUndefined, isEqualTo(other));
}
