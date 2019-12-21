import { Comparable, Comparison, Equatable } from '../types';
import { assertValue } from '../assertions/assert-value';
import { isEqualTo } from './is-equal-to';
import { isInstanceOf } from './is-instance-of';

class Example {
    public constructor(public value: number) {}
}

class ExampleEquatable implements Equatable {
    public constructor(public value: number) {}

    public equals(other: unknown): boolean {
        return isInstanceOf(ExampleEquatable)(other) && other.value === this.value;
    }
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

describe(isEqualTo.name, () => {
    it('should return true if match', () => {
        expect(isEqualTo(5)(5)).toBe(true);
        expect(isEqualTo(true)(true)).toBe(true);
        expect(isEqualTo(null)(null)).toBe(true);
        expect(isEqualTo(undefined)(undefined)).toBe(true);
        expect(isEqualTo(Date)(Date)).toBe(true);
        const obj = {};
        expect(isEqualTo(obj)(obj)).toBe(true);
        expect(isEqualTo({})({})).toBe(false);
        expect(isEqualTo(new Date(0))(new Date(0))).toBe(false);
        expect(isEqualTo(5)(undefined)).toBe(false);

        expect(isEqualTo(new Example(5))(new Example(5))).toBe(false);
        expect(isEqualTo(new ExampleEquatable(5))(new ExampleEquatable(5))).toBe(true);
        expect(isEqualTo(new ExampleComparable(5))(new ExampleComparable(5))).toBe(true);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isEqualTo(5), undefined)).toThrow('Expected value to be equal to 5 but received: undefined');
    });
});
