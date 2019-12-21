import { assertValue } from '../assertions/assert-value';
import { isNil } from './is-nil';

describe(isNil.name, () => {
    it('should return true if match', () => {
        expect(isNil(null)).toBe(true);
        expect(isNil(undefined)).toBe(true);
        expect(isNil('some string')).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isNil, 5)).toThrow('Expected value to be null or to be undefined but received: 5');
    });
});
