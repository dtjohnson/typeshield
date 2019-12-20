import { Guard } from '../guard';
import { isArray } from './is-array';

export function isNonEmptyArray(value: unknown): value is unknown[] {
    return isArray(value) && value.length > 0;
}
(isNonEmptyArray as Guard).expectation = 'be a non-empty array';
