import { Guard, Validator, getExpectation } from '../guard';

/* eslint-disable max-len */

type ExtractUnion<T> = T extends Guard<infer U> ? U : unknown;

export function or<T1 extends Validator, T2 extends Validator>(v1: T1, v2: T2): Guard<ExtractUnion<T1|T2>>;
export function or<T1 extends Validator, T2 extends Validator, T3 extends Validator>(v1: T1, v2: T2, v3: T3): Guard<ExtractUnion<T1|T2|T3>>;
export function or<T1 extends Validator, T2 extends Validator, T3 extends Validator, T4 extends Validator>(v1: T1, v2: T2, v3: T3, v4: T4): Guard<ExtractUnion<T1|T2|T3|T4>>;
export function or<T1 extends Validator, T2 extends Validator, T3 extends Validator, T4 extends Validator, T5 extends Validator>(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): Guard<ExtractUnion<T1|T2|T3|T4|T5>>;
export function or<T extends Validator>(validators: T[]): Guard<ExtractUnion<T>>;
export function or(validators: Validator|Validator[], ...others: Validator[]): Guard {
    if (!Array.isArray(validators)) return or([ validators, ...others ]);
    const guard = (value: unknown): value is any => validators.some(g => g(value));
    (guard as Guard).expectation = validators.map(getExpectation).join(' or to ');
    return guard;
}
