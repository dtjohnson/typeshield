import { assertValue } from '../assert';
import { isNumber, isNumberOrUndefined } from './is-number';

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

describe(isNumberOrUndefined.name, () => {
    it('should return true if match', () => {
        expect(isNumberOrUndefined(5.67)).toBe(true);
        expect(isNumberOrUndefined(-3)).toBe(true);
        expect(isNumberOrUndefined(NaN)).toBe(true);
        expect(isNumberOrUndefined(Infinity)).toBe(true);
        expect(isNumberOrUndefined(undefined)).toBe(true);
        expect(isNumberOrUndefined('some string')).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isNumberOrUndefined, 'foo')).toThrow('Expected value to be a number or to be undefined but received: foo');
    });
});
