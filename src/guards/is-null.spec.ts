import { assertValue } from '../assert';
import { isNull, isNullOrUndefined } from './is-null';

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

describe(isNullOrUndefined.name, () => {
    it('should return true if match', () => {
        expect(isNullOrUndefined(null)).toBe(true);
        expect(isNullOrUndefined(undefined)).toBe(true);
        expect(isNullOrUndefined('some string')).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isNullOrUndefined, 'foo')).toThrow('Expected value to be null or to be undefined but received: foo');
    });
});
