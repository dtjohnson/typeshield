import { Guard, Validator } from '../types';
import { getExpectation } from '../get-expectation';

/**
 * Extract a type intersection from a union of guards
 */
type ExtractIntersection<T> = (T extends Guard<infer U> ? (k: U) => void : never) extends ((k: infer V) => void) ? V : never;

/**
 * Create a new guard/validator from an intersection of guards/validators
 * @param validators An array of guards/validators
 * @returns A new intersection guard/validator
 */
export function and<T extends Validator>(validators: T[]|(() => T[])): Guard<ExtractIntersection<T>> {
    const guard = (value: unknown): value is any => {
        if (typeof validators === 'function') validators = validators();
        return validators.every(g => g(value));
    };

    (guard as Guard).expectation = () => {
        if (typeof validators === 'function') validators = validators();
        return validators.map(getExpectation).join(' and to ');
    };
    return guard;
}
