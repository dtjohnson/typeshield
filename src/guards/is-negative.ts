import { Guard } from '../types';
import { isNumber } from './is-number';

interface NegativeBrand {
    __Negative__: void;
}
export type Negative = number & NegativeBrand;

export function isNegative(value: unknown): value is Negative {
    return isNumber(value) && value < 0;
}
(isNegative as Guard).expectation = 'be a negative number';
