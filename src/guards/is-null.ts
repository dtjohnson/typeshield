import { Guard } from '../guard';
import { isUndefined } from './is-undefined';
import { or } from '../operators/or';

export function isNull(value: unknown): value is null {
    return value === null;
}
(isNull as Guard).expectation = 'be null';

export const isNullOrUndefined = or(isNull, isUndefined);
