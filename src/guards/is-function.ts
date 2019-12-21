import { Guard } from '../types';

/**
 * Guard that tests if the value is a function
 * @param value The value to test
 * @returns The result of the test
 */
export function isFunction(value: unknown): value is Function {
    return typeof value === 'function';
}
(isFunction as Guard).expectation = 'be a function';
