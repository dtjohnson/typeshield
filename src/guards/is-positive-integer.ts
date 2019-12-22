import { Guard } from '../types';
import { Integer, isInteger } from './is-integer';
import { Positive, isPositive } from './is-positive';
import { and } from '../operators/and';

/**
 * A number that is a positive integer
 */
export type PositiveInteger = Positive & Integer;

const guard = and(isPositive, isInteger);

/**
 * Guard that tests if the value is a positive integer
 * @param value The value to test
 * @returns The result of the test
 */
export function isPositiveInteger(value: unknown): value is PositiveInteger {
    return guard(value);
}
(isPositiveInteger as Guard).expectation = 'be a positive integer';
