import { assertValue } from '../assertions/assert-value';
import { isNegativeInteger } from './is-negative-integer';

describe(isNegativeInteger.name, () => {
    it('should return true if match', () => {
        expect(isNegativeInteger(-3)).toBe(true);
        expect(isNegativeInteger(-2.7)).toBe(false);
        expect(isNegativeInteger(0)).toBe(false);
        expect(isNegativeInteger(5.67)).toBe(false);
        expect(isNegativeInteger(12)).toBe(false);
        expect(isNegativeInteger(NaN)).toBe(false);
        expect(isNegativeInteger(-Infinity)).toBe(false);
        expect(isNegativeInteger(Infinity)).toBe(false);
        expect(isNegativeInteger(undefined)).toBe(false);
        expect(isNegativeInteger('some string')).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isNegativeInteger, undefined)).toThrow('Expected value to be a negative integer but received: undefined');
    });
});
