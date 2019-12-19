export interface Equatable {
    equals(other: unknown): boolean;
}

export type Comparison = -1|0|1|undefined;

export interface Comparable {
    compareTo(other: unknown): Comparison;
}
