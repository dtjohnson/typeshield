import { assertValue } from '../assertions/assert-value';
import { isInteger } from './is-integer';

describe(isInteger.name, () => {
    it('should return true if match', () => {
        expect(isInteger(5.67)).toBe(false);
        expect(isInteger(-3)).toBe(true);
        expect(isInteger(NaN)).toBe(false);
        expect(isInteger(Infinity)).toBe(false);
        expect(isInteger(undefined)).toBe(false);
        expect(isInteger('some string')).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isInteger, undefined)).toThrow('Expected value to be an integer but received: undefined');
    });
});
