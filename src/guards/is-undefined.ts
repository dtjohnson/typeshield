import { Guard } from '../guard';

export function isUndefined(value: unknown): value is undefined {
    return value === undefined;
}
(isUndefined as Guard).expectation = 'be undefined';
