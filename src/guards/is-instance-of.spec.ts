import { assertValue } from '../assert';
import { isInstanceOf, isInstanceOfOrUndefined } from './is-instance-of';

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

describe(isInstanceOfOrUndefined.name, () => {
    it('should return true if match', () => {
        expect(isInstanceOfOrUndefined(Date)(new Date())).toBe(true);
        expect(isInstanceOfOrUndefined(RegExp)(/.*/u)).toBe(true);
        expect(isInstanceOfOrUndefined(RegExp)(undefined)).toBe(true);
        expect(isInstanceOfOrUndefined(Date)('foo')).toBe(false);
        expect(isInstanceOfOrUndefined(Date)(undefined)).toBe(true);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isInstanceOfOrUndefined(Date), 5)).toThrow('Expected value to be an instance of \'Date\' or to be undefined but received: 5');
    });
});
