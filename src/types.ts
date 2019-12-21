interface HasExpectation {
    expectation?: string;
}
export type Guard<T = unknown> = ((value: unknown) => value is T) & HasExpectation;
export type Validator = ((value: unknown) => boolean) & HasExpectation;

export interface Equatable {
    equals(other: unknown): boolean;
}

export type Comparison = -1|0|1|undefined;

export interface Comparable {
    compareTo(other: unknown): Comparison;
}

// Use this trick to infer the type as a literal if possible
export type Narrowable = string | number | boolean | undefined | null | void | {};
