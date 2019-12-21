import { assertValue } from '../assertions/assert-value';
import { isComparable } from './is-comparable';

describe(isComparable.name, () => {
    it('should return true if match', () => {
        expect(isComparable({ compareTo: () => 0 })).toBe(true);
        expect(isComparable({ compareTo: true })).toBe(false);
        expect(isComparable({})).toBe(false);
        expect(isComparable(undefined)).toBe(false);
        expect(isComparable('some string')).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isComparable, undefined)).toThrow('Expected value to implement \'Comparable\' but received: undefined');
    });
});
