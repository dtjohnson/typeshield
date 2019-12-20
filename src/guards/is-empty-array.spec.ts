import { assertValue } from '../assert';
import { isEmptyArray } from './is-empty-array';

describe(isEmptyArray.name, () => {
    it('should return true if match', () => {
        expect(isEmptyArray([])).toBe(true);
        expect(isEmptyArray([ 1, 2, 3 ])).toBe(false);
        expect(isEmptyArray(undefined)).toBe(false);
        expect(isEmptyArray(Array)).toBe(false);
        expect(isEmptyArray(5)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isEmptyArray, undefined)).toThrow('Expected value to be an empty array but received: undefined');
    });
});
