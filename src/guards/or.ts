import { Guard, Validator } from '../types';
import { getExpectation } from '../get-expectation';

/**
 * Extract a type union from a union of guards
 */
type ExtractUnion<T> = T extends Guard<infer U> ? U : unknown;

/**
 * Create a new guard/validator from a union of guards/validators
 * @param validators An array of guards/validators (or function that returns an array)
 * @returns A new union guard/validator
 */
export function or<T extends Validator>(validators: T[]|(() => T[])): Guard<ExtractUnion<T>> {
    const guard = (value: unknown): value is any => {
        if (typeof validators === 'function') validators = validators();
        return validators.some(g => g(value));
    };

    (guard as Guard).expectation = () => {
        if (typeof validators === 'function') validators = validators();
        return validators.map(getExpectation).join(' or to ');
    };
    return guard;
}
