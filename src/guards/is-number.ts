import { Guard } from '../guard';

export function isNumber(value: unknown): value is number {
    return typeof value === 'number';
}
(isNumber as Guard).expectation = 'be a number';
