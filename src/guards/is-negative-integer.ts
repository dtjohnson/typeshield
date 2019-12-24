import { Guard } from '../types';
import { Integer, isInteger } from './is-integer';
import { Negative, isNegative } from './is-negative';
import { and } from './and';

/**
 * A number that is a negative integer
 */
export type NegativeInteger = Negative & Integer;

/**
 * @ignore
 */
const guard = and([ isNegative, isInteger ]);

/**
 * Guard that tests if the value is a negative integer
 * @param value The value to test
 * @returns The result of the test
 */
export function isNegativeInteger(value: unknown): value is NegativeInteger {
    return guard(value);
}
(isNegativeInteger as Guard).expectation = 'be a negative integer';
