import { assertValue } from '../assertions/assert-value';
import { isNegative } from './is-negative';

describe(isNegative.name, () => {
    it('should return true if match', () => {
        expect(isNegative(-3)).toBe(true);
        expect(isNegative(-2.7)).toBe(true);
        expect(isNegative(0)).toBe(false);
        expect(isNegative(5.67)).toBe(false);
        expect(isNegative(12)).toBe(false);
        expect(isNegative(NaN)).toBe(false);
        expect(isNegative(-Infinity)).toBe(true);
        expect(isNegative(Infinity)).toBe(false);
        expect(isNegative(undefined)).toBe(false);
        expect(isNegative('some string')).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isNegative, undefined)).toThrow('Expected value to be a negative number but received: undefined');
    });
});
