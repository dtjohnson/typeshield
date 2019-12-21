import { Guard } from '../types';

export function isBigInt(value: unknown): value is string {
    return typeof value === 'bigint';
}
(isBigInt as Guard).expectation = 'be a BigInt';
