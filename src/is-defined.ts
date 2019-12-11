import { isNullOrUndefined } from './is-null';

export function isDefined<T>(value: T): value is NonNullable<T> {
    return !isNullOrUndefined(value);
}
