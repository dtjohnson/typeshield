import { Guard } from '../types';
import { isEmptyString } from './is-empty-string';
import { isString } from './is-string';

export function isNonEmptyString(value: unknown): value is string {
    return isString(value) && !isEmptyString(value);
}
(isNonEmptyString as Guard).expectation = 'be a non-empty string';
