import { assertValue } from '../assert';
import { isNonEmptyArray } from './is-non-empty-array';

describe(isNonEmptyArray.name, () => {
    it('should return true if match', () => {
        expect(isNonEmptyArray([])).toBe(false);
        expect(isNonEmptyArray([ 1, 2, 3 ])).toBe(true);
        expect(isNonEmptyArray(undefined)).toBe(false);
        expect(isNonEmptyArray(Array)).toBe(false);
        expect(isNonEmptyArray(5)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isNonEmptyArray, undefined)).toThrow('Expected value to be a non-empty array but received: undefined');
    });
});
