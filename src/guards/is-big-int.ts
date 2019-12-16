import { Guard } from '../guard';
import { isUndefined } from './is-undefined';
import { or } from '../operators/or';

export function isBigInt(value: unknown): value is string {
    return typeof value === 'bigint';
}
(isBigInt as Guard).expectation = 'be a BigInt';

export const isBigIntOrUndefined = or(isBigInt, isUndefined);
