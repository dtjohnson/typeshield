import { Guard } from '../types';

/**
 * Guard that tests if the value is a symbol
 * @param value The value to test
 * @returns The result of the test
 */
export function isSymbol(value: unknown): value is string {
    return typeof value === 'symbol';
}
(isSymbol as Guard).expectation = 'be a symbol';
