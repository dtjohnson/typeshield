import { Guard } from '../types';
import { isNumber } from './is-number';

interface PositiveBrand {
    __Positive__: void;
}
export type Positive = number & PositiveBrand;

export function isPositive(value: unknown): value is Positive {
    return isNumber(value) && value > 0;
}
(isPositive as Guard).expectation = 'be a positive number';
