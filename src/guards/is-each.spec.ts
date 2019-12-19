import { assertValue } from '../assert';
import { isEach } from './is-each';
import { isNumber } from './is-number';

describe(isEach.name, () => {
    it('should return true if match', () => {
        expect(isEach(isNumber)([])).toBe(true);
        expect(isEach(isNumber)([ 1, 2, 3, 4, 5 ])).toBe(true);
        expect(isEach(isNumber)([ 1, 2, true, 4, 5 ])).toBe(false);
        expect(isEach(isNumber)([ 1, 2, undefined, 4, 5 ])).toBe(false);
        expect(isEach(isNumber)(undefined)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isEach(isNumber), undefined)).toThrow('Expected value to all be a number but received: undefined');
    });
});
