import { Guard } from './types';
import { isUndefined } from './is-undefined';
import { or } from './operators';

export function isNull(value: unknown): value is null {
    return value === null;
}
(isNull as Guard).expectation = 'be null';

export const isNullOrUndefined = or(isUndefined, isNull);
