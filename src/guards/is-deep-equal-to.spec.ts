import { assertValue } from '../assertions/assert-value';
import { isDeepEqualTo } from './is-deep-equal-to';

class Example {
    public constructor(public value: number) {}
}

describe(isDeepEqualTo.name, () => {
    it('should return true if match', () => {
        expect(isDeepEqualTo(5)(5)).toBe(true);
        expect(isDeepEqualTo(true)(true)).toBe(true);
        expect(isDeepEqualTo(null)(null)).toBe(true);
        expect(isDeepEqualTo(undefined)(undefined)).toBe(true);
        expect(isDeepEqualTo(Date)(Date)).toBe(true);
        const obj = {};
        expect(isDeepEqualTo(obj)(obj)).toBe(true);
        expect(isDeepEqualTo({})({})).toBe(true);
        expect(isDeepEqualTo(new Date(0))(new Date(0))).toBe(true);
        expect(isDeepEqualTo(5)(undefined)).toBe(false);

        expect(isDeepEqualTo(new Example(5))(new Example(5))).toBe(true);
        expect(isDeepEqualTo({ foo: [ { bar: true } ] })({ foo: [ { bar: true } ] })).toBe(true);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isDeepEqualTo(5), undefined)).toThrow('Expected value to be deep equal to 5 but received: undefined');
    });
});
