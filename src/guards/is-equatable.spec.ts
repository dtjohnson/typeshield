import { assertValue } from '../assertions/assert-value';
import { isEquatable } from './is-equatable';

describe(isEquatable.name, () => {
    it('should return true if match', () => {
        expect(isEquatable({ equals: () => true })).toBe(true);
        expect(isEquatable({ equals: true })).toBe(false);
        expect(isEquatable({})).toBe(false);
        expect(isEquatable(undefined)).toBe(false);
        expect(isEquatable('some string')).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isEquatable, undefined)).toThrow('Expected value to implement \'Equatable\' but received: undefined');
    });
});
