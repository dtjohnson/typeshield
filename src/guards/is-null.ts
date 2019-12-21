import { Guard } from '../types';

export function isNull(value: unknown): value is null {
    return value === null;
}
(isNull as Guard).expectation = 'be null';
