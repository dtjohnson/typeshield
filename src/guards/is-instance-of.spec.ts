import { assertValue } from '../assertions/assert-value';
import { isInstanceOf } from './is-instance-of';

describe(isInstanceOf.name, () => {
    it('should return true if match', () => {
        expect(isInstanceOf(Date)(new Date())).toBe(true);
        expect(isInstanceOf(RegExp)(/.*/u)).toBe(true);
        expect(isInstanceOf(RegExp)(undefined)).toBe(false);
        expect(isInstanceOf(Date)('foo')).toBe(false);
        expect(isInstanceOf(Date)(undefined)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isInstanceOf(Date), undefined)).toThrow('Expected value to be an instance of \'Date\' but received: undefined');
    });
});
