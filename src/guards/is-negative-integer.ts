import { Guard } from '../types';
import { Integer, isInteger } from './is-integer';
import { Negative, isNegative } from './is-negative';
import { and } from '../operators/and';

/**
 * A number that is a negative integer
 */
export type NegativeInteger = Negative & Integer;

/**
 * Guard that tests if the value is a negative integer
 * @param value The value to test
 * @returns The result of the test
 */
export const isNegativeInteger: Guard<NegativeInteger> = and(isNegative, isInteger);
(isNegativeInteger as Guard).expectation = 'be a negative integer';
