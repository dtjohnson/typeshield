import { Guard, Validator } from '../types';
import { getExpectation } from '../get-expectation';

/* eslint-disable max-len */

// Note we use a bunch of overloads here as TypeScript will bite on the first type in a function call with rest params preventing you from mixing guard types.

/**
 * Extract a type union from a union of guards
 */
type ExtractUnion<T> = T extends Guard<infer U> ? U : unknown;

/**
 * Create a new guard/validator from a union of guards/validators
 * @param v1 A guard/validator
 * @param v2 A guard/validator
 * @returns A new union guard/validator
 */
export function or<T1 extends Validator, T2 extends Validator>(v1: T1, v2: T2): Guard<ExtractUnion<T1|T2>>;
/**
 * Create a new guard/validator from a union of guards/validators
 * @param v1 A guard/validator
 * @param v2 A guard/validator
 * @param v3 A guard/validator
 * @returns A new union guard/validator
 */
export function or<T1 extends Validator, T2 extends Validator, T3 extends Validator>(v1: T1, v2: T2, v3: T3): Guard<ExtractUnion<T1|T2|T3>>;
/**
 * Create a new guard/validator from a union of guards/validators
 * @param v1 A guard/validator
 * @param v2 A guard/validator
 * @param v3 A guard/validator
 * @param v4 A guard/validator
 * @returns A new union guard/validator
 */
export function or<T1 extends Validator, T2 extends Validator, T3 extends Validator, T4 extends Validator>(v1: T1, v2: T2, v3: T3, v4: T4): Guard<ExtractUnion<T1|T2|T3|T4>>;
/**
 * Create a new guard/validator from a union of guards/validators
 * @param v1 A guard/validator
 * @param v2 A guard/validator
 * @param v3 A guard/validator
 * @param v4 A guard/validator
 * @param v5 A guard/validator
 * @returns A new union guard/validator
 */
export function or<T1 extends Validator, T2 extends Validator, T3 extends Validator, T4 extends Validator, T5 extends Validator>(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): Guard<ExtractUnion<T1|T2|T3|T4|T5>>;
/**
 * Create a new guard/validator from a union of guards/validators
 * @param validators An array of guards/validators
 * @returns A new union guard/validator
 */
export function or<T extends Validator>(validators: T[]): Guard<ExtractUnion<T>>;
export function or(validators: Validator|Validator[], ...others: Validator[]): Guard {
    if (!Array.isArray(validators)) return or([ validators, ...others ]);
    const guard = (value: unknown): value is any => validators.some(g => g(value));
    (guard as Guard).expectation = validators.map(getExpectation).join(' or to ');
    return guard;
}
