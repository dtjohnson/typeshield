import { assertValue } from '../assert';
import { isString } from './is-string';

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
