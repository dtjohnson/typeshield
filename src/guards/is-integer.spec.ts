import { assertValue } from '../assert';
import { isInteger, isIntegerOrUndefined } from './is-integer';

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

describe(isIntegerOrUndefined.name, () => {
    it('should return true if match', () => {
        expect(isIntegerOrUndefined(5.67)).toBe(false);
        expect(isIntegerOrUndefined(-3)).toBe(true);
        expect(isIntegerOrUndefined(NaN)).toBe(false);
        expect(isIntegerOrUndefined(Infinity)).toBe(false);
        expect(isIntegerOrUndefined(undefined)).toBe(true);
        expect(isIntegerOrUndefined('some string')).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isIntegerOrUndefined, 1.7)).toThrow('Expected value to be an integer or to be undefined but received: 1.7');
    });
});
