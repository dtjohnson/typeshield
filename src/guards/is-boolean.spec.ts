import { assertValue } from '../assertions/assert-value';
import { isBoolean } from './is-boolean';

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
