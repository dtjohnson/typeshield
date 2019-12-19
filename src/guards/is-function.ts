import { Guard } from '../guard';

export function isFunction(value: unknown): value is Function {
    return typeof value === 'function';
}
(isFunction as Guard).expectation = 'be a function';
