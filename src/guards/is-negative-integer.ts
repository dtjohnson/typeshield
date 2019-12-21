import { Guard } from '../types';
import { Integer, isInteger } from './is-integer';
import { Negative, isNegative } from './is-negative';
import { and } from '../operators/and';

export type NegativeInteger = Negative & Integer;

export const isNegativeInteger: Guard<NegativeInteger> = and(isNegative, isInteger);
(isNegativeInteger as Guard).expectation = 'be a negative integer';
