import { assertValue } from '../assertions/assert-value';
import { isDate } from './is-date';

describe(isDate.name, () => {
    it('should return true if match', () => {
        expect(isDate(undefined)).toBe(false);
        expect(isDate(Date)).toBe(false);
        expect(isDate(new Date())).toBe(true);
        expect(isDate(5)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isDate, undefined)).toThrow('Expected value to be a date but received: undefined');
    });
});
