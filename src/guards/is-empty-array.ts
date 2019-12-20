import { Guard } from '../guard';
import { isArray } from './is-array';

export function isEmptyArray(value: unknown): value is unknown[] {
    return isArray(value) && value.length === 0;
}
(isEmptyArray as Guard).expectation = 'be an empty array';
