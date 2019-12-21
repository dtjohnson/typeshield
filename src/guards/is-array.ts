import { Guard } from '../types';

export function isArray(value: unknown): value is unknown[] {
    return Array.isArray(value);
}
(isArray as Guard).expectation = 'be an array';
