import { assertValue } from '../assertions/assert-value';
import { isNull } from './is-null';

describe(isNull.name, () => {
    it('should return true if match', () => {
        expect(isNull(null)).toBe(true);
        expect(isNull(undefined)).toBe(false);
        expect(isNull('some string')).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isNull, undefined)).toThrow('Expected value to be null but received: undefined');
    });
});
