import { Comparable, Comparison } from '../interfaces';
import { assertValue } from '../assert';
import { isGreaterThan } from './is-greater-than';
import { isInstanceOf } from './is-instance-of';

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

describe(isGreaterThan.name, () => {
    it('should return true if match', () => {
        expect(isGreaterThan(5)(6)).toBe(true);
        expect(isGreaterThan(5)(5)).toBe(false);
        expect(isGreaterThan(5)(4)).toBe(false);
        expect(isGreaterThan(BigInt(5))(BigInt(6))).toBe(true);
        expect(isGreaterThan(BigInt(5))(BigInt(5))).toBe(false);
        expect(isGreaterThan(BigInt(5))(BigInt(4))).toBe(false);
        expect(isGreaterThan(new Date(0))(new Date(5))).toBe(true);
        expect(isGreaterThan(new Date(0))(new Date(0))).toBe(false);
        expect(isGreaterThan(new Date(5))(new Date(0))).toBe(false);

        expect(isGreaterThan(new Example(5))(new Example(6))).toBe(false);
        expect(isGreaterThan(new ExampleComparable(5))(new ExampleComparable(6))).toBe(true);
        expect(isGreaterThan(new ExampleComparable(5))(new ExampleComparable(5))).toBe(false);
        expect(isGreaterThan(new ExampleComparable(6))(new ExampleComparable(5))).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isGreaterThan(5), undefined)).toThrow('Expected value to be greater than 5 but received: undefined');
    });
});
