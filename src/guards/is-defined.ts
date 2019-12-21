import { Guard } from '../types';
import { isNil } from './is-nil';

export function isDefined<T>(value: T): value is NonNullable<T> {
    return !isNil(value);
}
(isDefined as Guard).expectation = 'be defined';
