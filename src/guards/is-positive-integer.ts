import { Guard } from '../guard';
import { Integer, isInteger } from './is-integer';
import { Positive, isPositive } from './is-positive';
import { and } from '../operators/and';

export type PositiveInteger = Positive & Integer;

export const isPositiveInteger: Guard<PositiveInteger> = and(isPositive, isInteger);
(isPositiveInteger as Guard).expectation = 'be a positive integer';
