import { Guard } from '../guard';

export function isBoolean(value: unknown): value is string {
    return typeof value === 'boolean';
}
(isBoolean as Guard).expectation = 'be a boolean';
