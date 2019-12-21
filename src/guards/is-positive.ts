import { Guard } from '../types';
import { isNumber } from './is-number';

export type Positive = number & { __Positive__: void };

export function isPositive(value: unknown): value is Positive {
    return isNumber(value) && value > 0;
}
(isPositive as Guard).expectation = 'be a positive number';
