import { assertValue } from '../assertions/assert-value';
import { isPositive } from './is-positive';

describe(isPositive.name, () => {
    it('should return true if match', () => {
        expect(isPositive(-3)).toBe(false);
        expect(isPositive(-2.7)).toBe(false);
        expect(isPositive(0)).toBe(false);
        expect(isPositive(5.67)).toBe(true);
        expect(isPositive(12)).toBe(true);
        expect(isPositive(NaN)).toBe(false);
        expect(isPositive(-Infinity)).toBe(false);
        expect(isPositive(Infinity)).toBe(true);
        expect(isPositive(undefined)).toBe(false);
        expect(isPositive('some string')).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isPositive, undefined)).toThrow('Expected value to be a positive number but received: undefined');
    });
});
