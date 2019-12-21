import { Guard } from '../types';

export function isBoolean(value: unknown): value is string {
    return typeof value === 'boolean';
}
(isBoolean as Guard).expectation = 'be a boolean';
