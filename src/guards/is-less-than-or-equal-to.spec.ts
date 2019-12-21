import { Comparable, Comparison } from '../types';
import { assertValue } from '../assertions/assert-value';
import { isInstanceOf } from './is-instance-of';
import { isLessThanOrEqualTo } from './is-less-than-or-equal-to';

class Example {
    public constructor(public value: number) {}
}

class ExampleComparable implements Comparable {
    public constructor(public value: number) {}

    public compareTo(other: unknown): Comparison {
        if (!isInstanceOf(ExampleComparable)(other)) return;
        if (this.value < other.value) return -1;
        if (this.value > other.value) return 1;
        return 0;
    }
}

describe(isLessThanOrEqualTo.name, () => {
    it('should return true if match', () => {
        expect(isLessThanOrEqualTo(5)(6)).toBe(false);
        expect(isLessThanOrEqualTo(5)(5)).toBe(true);
        expect(isLessThanOrEqualTo(5)(4)).toBe(true);
        expect(isLessThanOrEqualTo(BigInt(5))(BigInt(6))).toBe(false);
        expect(isLessThanOrEqualTo(BigInt(5))(BigInt(5))).toBe(true);
        expect(isLessThanOrEqualTo(BigInt(5))(BigInt(4))).toBe(true);
        expect(isLessThanOrEqualTo(new Date(0))(new Date(5))).toBe(false);
        expect(isLessThanOrEqualTo(new Date(0))(new Date(0))).toBe(true);
        expect(isLessThanOrEqualTo(new Date(5))(new Date(0))).toBe(true);

        // Abstract Relational Comparison Algorithm is weird with objects
        // http://www.ecma-international.org/ecma-262/5.1/#sec-11.8.5
        expect(isLessThanOrEqualTo(new Example(5))(new Example(6))).toBe(true);

        expect(isLessThanOrEqualTo(new ExampleComparable(5))(new ExampleComparable(6))).toBe(false);
        expect(isLessThanOrEqualTo(new ExampleComparable(5))(new ExampleComparable(5))).toBe(true);
        expect(isLessThanOrEqualTo(new ExampleComparable(6))(new ExampleComparable(5))).toBe(true);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isLessThanOrEqualTo(5), undefined)).toThrow('Expected value to be less than or equal to 5 but received: undefined');
    });
});
