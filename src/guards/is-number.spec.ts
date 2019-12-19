import { assertValue } from '../assert';
import { isNumber } from './is-number';

describe(isNumber.name, () => {
    it('should return true if match', () => {
        expect(isNumber(5.67)).toBe(true);
        expect(isNumber(-3)).toBe(true);
        expect(isNumber(NaN)).toBe(true);
        expect(isNumber(Infinity)).toBe(true);
        expect(isNumber(undefined)).toBe(false);
        expect(isNumber('some string')).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isNumber, undefined)).toThrow('Expected value to be a number but received: undefined');
    });
});
