import { assertValue } from '../assertions/assert-value';
import { getExpectation } from '../get-expectation';
import { isNumber } from './is-number';
import { isString } from './is-string';
import { or } from './or';

describe(or.name, () => {
    it('should create a combination guard', () => {
        const isStringOrNumber = or([ isString, isNumber ]);
        expect(isStringOrNumber(5.7)).toBe(true);
        expect(isStringOrNumber('foo')).toBe(true);
        expect(isStringOrNumber(true)).toBe(false);
        expect(isStringOrNumber(undefined)).toBe(false);

        const isStringOrNumber2 = or(() => [ isString, isNumber ]);
        expect(isStringOrNumber2(5.7)).toBe(true);
        expect(isStringOrNumber2(true)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(or([ isString, isNumber ]), undefined)).toThrow('Expected value to be a string or to be a number but received: undefined');
        expect(getExpectation(or(() => [ isString, isNumber ]))).toBe('be a string or to be a number');
    });
});
