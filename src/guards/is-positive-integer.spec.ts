import { assertValue } from '../assert';
import { isPositiveInteger } from './is-positive-integer';

describe(isPositiveInteger.name, () => {
    it('should return true if match', () => {
        expect(isPositiveInteger(-3)).toBe(false);
        expect(isPositiveInteger(-2.7)).toBe(false);
        expect(isPositiveInteger(0)).toBe(false);
        expect(isPositiveInteger(5.67)).toBe(false);
        expect(isPositiveInteger(12)).toBe(true);
        expect(isPositiveInteger(NaN)).toBe(false);
        expect(isPositiveInteger(-Infinity)).toBe(false);
        expect(isPositiveInteger(Infinity)).toBe(false);
        expect(isPositiveInteger(undefined)).toBe(false);
        expect(isPositiveInteger('some string')).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isPositiveInteger, undefined)).toThrow('Expected value to be a positive integer but received: undefined');
    });
});
