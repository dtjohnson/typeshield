import { Guard, Validator } from '../types';
import { getExpectation } from '../get-expectation';

/* eslint-disable max-len */

// Note we use a bunch of overloads here as TypeScript will bite on the first type in a function call with rest params preventing you from mixing guard types.

/**
 * Extract a type intersection from a union of guards
 */
type ExtractIntersection<T> = (T extends Guard<infer U> ? (k: U) => void : never) extends ((k: infer V) => void) ? V : never;

/**
 * Create a new guard/validator from an intersection of guards/validators
 * @param v1 A guard/validator
 * @param v2 A guard/validator
 * @returns A new intersection guard/validator
 */
export function and<T1 extends Validator, T2 extends Validator>(v1: T1, v2: T2): Guard<ExtractIntersection<T1|T2>>;
/**
 * Create a new guard/validator from an intersection of guards/validators
 * @param v1 A guard/validator
 * @param v2 A guard/validator
 * @param v3 A guard/validator
 * @returns A new intersection guard/validator
 */
export function and<T1 extends Validator, T2 extends Validator, T3 extends Validator>(v1: T1, v2: T2, v3: T3): Guard<ExtractIntersection<T1|T2|T3>>;
/**
 * Create a new guard/validator from an intersection of guards/validators
 * @param v1 A guard/validator
 * @param v2 A guard/validator
 * @param v3 A guard/validator
 * @param v4 A guard/validator
 * @returns A new intersection guard/validator
 */
export function and<T1 extends Validator, T2 extends Validator, T3 extends Validator, T4 extends Validator>(v1: T1, v2: T2, v3: T3, v4: T4): Guard<ExtractIntersection<T1|T2|T3|T4>>;
/**
 * Create a new guard/validator from an intersection of guards/validators
 * @param v1 A guard/validator
 * @param v2 A guard/validator
 * @param v3 A guard/validator
 * @param v4 A guard/validator
 * @param v5 A guard/validator
 * @returns A new intersection guard/validator
 */
export function and<T1 extends Validator, T2 extends Validator, T3 extends Validator, T4 extends Validator, T5 extends Validator>(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): Guard<ExtractIntersection<T1|T2|T3|T4|T5>>;
/**
 * Create a new guard/validator from an intersection of guards/validators
 * @param validators An array of guards/validators
 * @returns A new intersection guard/validator
 */
export function and<T extends Validator>(validators: T[]): Guard<ExtractIntersection<T>>;
export function and(validators: Validator|Validator[], ...others: Validator[]): Guard {
    if (!Array.isArray(validators)) return and([ validators, ...others ]);
    const guard = (value: unknown): value is any => validators.every(g => g(value));
    (guard as Guard).expectation = validators.map(getExpectation).join(' and to ');
    return guard;
}
