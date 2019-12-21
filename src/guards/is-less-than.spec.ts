import { Comparable, Comparison } from '../types';
import { assertValue } from '../assertions/assert-value';
import { isInstanceOf } from './is-instance-of';
import { isLessThan } from './is-less-than';

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

describe(isLessThan.name, () => {
    it('should return true if match', () => {
        expect(isLessThan(5)(6)).toBe(false);
        expect(isLessThan(5)(5)).toBe(false);
        expect(isLessThan(5)(4)).toBe(true);
        expect(isLessThan(BigInt(5))(BigInt(6))).toBe(false);
        expect(isLessThan(BigInt(5))(BigInt(5))).toBe(false);
        expect(isLessThan(BigInt(5))(BigInt(4))).toBe(true);
        expect(isLessThan(new Date(0))(new Date(5))).toBe(false);
        expect(isLessThan(new Date(0))(new Date(0))).toBe(false);
        expect(isLessThan(new Date(5))(new Date(0))).toBe(true);

        expect(isLessThan(new Example(5))(new Example(6))).toBe(false);
        expect(isLessThan(new ExampleComparable(5))(new ExampleComparable(6))).toBe(false);
        expect(isLessThan(new ExampleComparable(5))(new ExampleComparable(5))).toBe(false);
        expect(isLessThan(new ExampleComparable(6))(new ExampleComparable(5))).toBe(true);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isLessThan(5), undefined)).toThrow('Expected value to be less than 5 but received: undefined');
    });
});
