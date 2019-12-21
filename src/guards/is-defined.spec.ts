import { assertValue } from '../assertions/assert-value';
import { isDefined } from './is-defined';

describe(isDefined.name, () => {
    it('should return true if match', () => {
        expect(isDefined(undefined)).toBe(false);
        expect(isDefined(null)).toBe(false);
        expect(isDefined('some string')).toBe(true);
        expect(isDefined(0)).toBe(true);
        expect(isDefined(false)).toBe(true);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isDefined, null)).toThrow('Expected value to be defined but received: null');
    });
});
