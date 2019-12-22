import { Guard } from '../types';

/**
 * Guard that tests if the value is an big integer
 * @param value The value to test
 * @returns The result of the test
 */
export function isBigInt(value: unknown): value is bigint {
    return typeof value === 'bigint';
}
(isBigInt as Guard).expectation = 'be a BigInt';
