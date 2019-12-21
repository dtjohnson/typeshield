import { Comparable, ComparisonResult } from '../types';
import { assertValue } from '../assertions/assert-value';
import { isGreaterThanOrEqualTo } from './is-greater-than-or-equal-to';
import { isInstanceOf } from './is-instance-of';

class Example {
    public constructor(public value: number) {}
}

class ExampleComparable implements Comparable {
    public constructor(public value: number) {}

    public compareTo(other: unknown): ComparisonResult {
        if (!isInstanceOf(ExampleComparable)(other)) return;
        if (this.value < other.value) return -1;
        if (this.value > other.value) return 1;
        return 0;
    }
}

describe(isGreaterThanOrEqualTo.name, () => {
    it('should return true if match', () => {
        expect(isGreaterThanOrEqualTo(5)(6)).toBe(true);
        expect(isGreaterThanOrEqualTo(5)(5)).toBe(true);
        expect(isGreaterThanOrEqualTo(5)(4)).toBe(false);
        expect(isGreaterThanOrEqualTo(BigInt(5))(BigInt(6))).toBe(true);
        expect(isGreaterThanOrEqualTo(BigInt(5))(BigInt(5))).toBe(true);
        expect(isGreaterThanOrEqualTo(BigInt(5))(BigInt(4))).toBe(false);
        expect(isGreaterThanOrEqualTo(new Date(0))(new Date(5))).toBe(true);
        expect(isGreaterThanOrEqualTo(new Date(0))(new Date(0))).toBe(true);
        expect(isGreaterThanOrEqualTo(new Date(5))(new Date(0))).toBe(false);

        // Abstract Relational Comparison Algorithm is weird with objects
        // http://www.ecma-international.org/ecma-262/5.1/#sec-11.8.5
        expect(isGreaterThanOrEqualTo(new Example(5))(new Example(6))).toBe(true);

        expect(isGreaterThanOrEqualTo(new ExampleComparable(5))(new ExampleComparable(6))).toBe(true);
        expect(isGreaterThanOrEqualTo(new ExampleComparable(5))(new ExampleComparable(5))).toBe(true);
        expect(isGreaterThanOrEqualTo(new ExampleComparable(6))(new ExampleComparable(5))).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isGreaterThanOrEqualTo(5), undefined)).toThrow('Expected value to be greater than or equal to 5 but received: undefined');
    });
});
