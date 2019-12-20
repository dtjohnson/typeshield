import { assertValue } from '../assert';
import { isNonEmptyString } from './is-non-empty-string';

describe(isNonEmptyString.name, () => {
    it('should return true if match', () => {
        expect(isNonEmptyString('foo')).toBe(true);
        expect(isNonEmptyString('')).toBe(false);
        expect(isNonEmptyString(undefined)).toBe(false);
        expect(isNonEmptyString(null)).toBe(false);
        expect(isNonEmptyString(5)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isNonEmptyString, undefined)).toThrow('Expected value to be a non-empty string but received: undefined');
    });
});
