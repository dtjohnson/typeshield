/**
 * An object that has an optional expectation string
 */
interface HasExpectation {
    /**
     * An expectation string to use for error messages in assertions
     */
    expectation?: string;
}

/**
 * A function that performs a validation on an unknow value and returns a boolean.
 */
export type Validator = ((value: unknown) => boolean) & HasExpectation;

/**
 * A function that performs a validation on an unknow value and returns a boolean indicating the type of the value.
 */
export type Guard<T = unknown> = ((value: unknown) => value is T) & HasExpectation;

/**
 * Interface for defining a type-specific method for determining equality
 */
export interface Equatable {
    /**
     * Check if this object is equal to another unknown value
     * @param other Another value to compare to
     * @returns True if equal, false if not equal
     */
    equals(other: unknown): boolean;
}

/**
 * Interface for defining a type-specific method for relation
 */
export interface Comparable {
    /**
     * Compare this object to another unknown value
     * @param other Another value to compare to
     * @returns The result of the comparison
     */
    compareTo(other: unknown): ComparisonResult;
}

/**
 * The result of an object comparison.
 * * 0 if the objects are equal
 * * -1 if the current instance is less than the other
 * * 1 if the current instance is greater than the other
 * * undefined if the objects are not comparable to each other
 */
export type ComparisonResult = -1|0|1|undefined;

/**
 * Union of types that TypeScript can narrow to literal types
 */
export type Narrowable = string | number | boolean | undefined | null | void | {};
