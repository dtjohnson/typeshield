import { assertValue } from '../assert';
import { isString, isStringOrUndefined } from './is-string';

describe(isString.name, () => {
    it('should return true if match', () => {
        expect(isString('foo')).toBe(true);
        expect(isString('')).toBe(true);
        expect(isString(undefined)).toBe(false);
        expect(isString(5)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isString, undefined)).toThrow('Expected value to be a string but received: undefined');
    });
});

describe(isStringOrUndefined.name, () => {
    it('should return true if match', () => {
        expect(isStringOrUndefined('foo')).toBe(true);
        expect(isStringOrUndefined('')).toBe(true);
        expect(isStringOrUndefined(undefined)).toBe(true);
        expect(isStringOrUndefined(5)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isStringOrUndefined, 5)).toThrow('Expected value to be a string or to be undefined but received: 5');
    });
});
