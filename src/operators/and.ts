import { Guard, Validator, getExpectation } from '../guard';

/* eslint-disable max-len */

type ExtractIntersection<T> = (T extends Guard<infer U> ? (k: U) => void : never) extends ((k: infer V) => void) ? V : never;

export function and<T1 extends Validator, T2 extends Validator>(v1: T1, v2: T2): Guard<ExtractIntersection<T1|T2>>;
export function and<T1 extends Validator, T2 extends Validator, T3 extends Validator>(v1: T1, v2: T2, v3: T3): Guard<ExtractIntersection<T1|T2|T3>>;
export function and<T1 extends Validator, T2 extends Validator, T3 extends Validator, T4 extends Validator>(v1: T1, v2: T2, v3: T3, v4: T4): Guard<ExtractIntersection<T1|T2|T3|T4>>;
export function and<T1 extends Validator, T2 extends Validator, T3 extends Validator, T4 extends Validator, T5 extends Validator>(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): Guard<ExtractIntersection<T1|T2|T3|T4|T5>>;
export function and<T extends Validator>(validators: T[]): Guard<ExtractIntersection<T>>;
export function and(validators: Validator|Validator[], ...others: Validator[]): Guard {
    if (!Array.isArray(validators)) return and([ validators, ...others ]);
    const guard = (value: unknown): value is any => validators.every(g => g(value));
    (guard as Guard).expectation = validators.map(getExpectation).join(' and to ');
    return guard;
}
