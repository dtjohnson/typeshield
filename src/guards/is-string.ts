import { Guard } from '../guard';

export function isString(value: unknown): value is string {
    return typeof value === 'string';
}
(isString as Guard).expectation = 'be a string';
