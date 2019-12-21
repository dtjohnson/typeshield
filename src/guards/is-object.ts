import { Guard } from '../types';

export function isObject(value: unknown): value is object {
    return typeof value === 'object';
}
(isObject as Guard).expectation = 'be an object';
