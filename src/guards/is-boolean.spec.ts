import { assertValue } from '../assert';
import { isBoolean, isBooleanOrUndefined } from './is-boolean';

describe(isBoolean.name, () => {
    it('should return true if match', () => {
        expect(isBoolean(true)).toBe(true);
        expect(isBoolean(false)).toBe(true);
        expect(isBoolean(undefined)).toBe(false);
        expect(isBoolean(5)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isBoolean, undefined)).toThrow('Expected value to be a boolean but received: undefined');
    });
});

describe(isBooleanOrUndefined.name, () => {
    it('should return true if match', () => {
        expect(isBooleanOrUndefined(true)).toBe(true);
        expect(isBooleanOrUndefined(false)).toBe(true);
        expect(isBooleanOrUndefined(undefined)).toBe(true);
        expect(isBooleanOrUndefined(5)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isBooleanOrUndefined, 5)).toThrow('Expected value to be a boolean or to be undefined but received: 5');
    });
});
