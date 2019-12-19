import { assertValue } from '../assert';
import { isArray } from './is-array';

describe(isArray.name, () => {
    it('should return true if match', () => {
        expect(isArray([])).toBe(true);
        expect(isArray(undefined)).toBe(false);
        expect(isArray(Array)).toBe(false);
        expect(isArray(5)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isArray, undefined)).toThrow('Expected value to be an array but received: undefined');
    });
});
