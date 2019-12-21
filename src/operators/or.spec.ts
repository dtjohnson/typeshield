import { assertValue } from '../assertions/assert-value';
import { isNumber } from '../guards/is-number';
import { isString } from '../guards/is-string';
import { or } from './or';

describe(or.name, () => {
    it('should create a combination guard', () => {
        const isStringOrNumber = or(isString, isNumber);
        expect(isStringOrNumber(5.7)).toBe(true);
        expect(isStringOrNumber('foo')).toBe(true);
        expect(isStringOrNumber(true)).toBe(false);
        expect(isStringOrNumber(undefined)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(or(isString, isNumber), undefined)).toThrow('Expected value to be a string or to be a number but received: undefined');
    });
});
