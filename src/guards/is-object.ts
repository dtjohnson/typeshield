import { Guard } from '../types';

/**
 * Guard that tests if the value is any object (and not null)
 * @param value The value to test
 * @returns The result of the test
 */
export function isObject(value: unknown): value is object {
    return typeof value === 'object' && value !== null;
}
(isObject as Guard).expectation = 'be an object';
