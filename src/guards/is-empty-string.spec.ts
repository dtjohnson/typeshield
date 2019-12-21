import { assertValue } from '../assertions/assert-value';
import { isEmptyString } from './is-empty-string';

describe(isEmptyString.name, () => {
    it('should return true if match', () => {
        expect(isEmptyString('foo')).toBe(false);
        expect(isEmptyString('')).toBe(true);
        expect(isEmptyString(undefined)).toBe(false);
        expect(isEmptyString(null)).toBe(false);
        expect(isEmptyString(5)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isEmptyString, undefined)).toThrow('Expected value to be an empty string but received: undefined');
    });
});
