import { assertValue } from '../assertions/assert-value';
import { isIdenticalTo } from './is-identical-to';

describe(isIdenticalTo.name, () => {
    it('should return true if match', () => {
        expect(isIdenticalTo(5)(5)).toBe(true);
        expect(isIdenticalTo(true)(true)).toBe(true);
        expect(isIdenticalTo(null)(null)).toBe(true);
        expect(isIdenticalTo(undefined)(undefined)).toBe(true);
        expect(isIdenticalTo(Date)(Date)).toBe(true);
        const obj = {};
        expect(isIdenticalTo(obj)(obj)).toBe(true);
        expect(isIdenticalTo({})({})).toBe(false);
        expect(isIdenticalTo(new Date(0))(new Date(0))).toBe(false);
        expect(isIdenticalTo(5)(undefined)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isIdenticalTo(5), undefined)).toThrow('Expected value to be identical to 5 but received: undefined');
    });
});
