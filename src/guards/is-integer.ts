import { Guard } from '../types';
import { isNumber } from './is-number';

interface IntegerBrand {
    __Integer__: void;
}
export type Integer = number & IntegerBrand;

export function isInteger(value: unknown): value is Integer {
    return isNumber(value) && Number.isInteger(value);
}
(isInteger as Guard).expectation = 'be an integer';
