import { assertValue } from '../assertions/assert-value';
import { isStringNotContaining } from './is-string-not-containing';

describe(isStringNotContaining.name, () => {
    it('should return true if match', () => {
        const isStringNotContainingFoo = isStringNotContaining('foo');
        expect(isStringNotContainingFoo('foo bar')).toBe(false);
        expect(isStringNotContainingFoo('some other string')).toBe(true);
        expect(isStringNotContainingFoo(undefined)).toBe(false);
        expect(isStringNotContainingFoo(5)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isStringNotContaining('foo'), undefined)).toThrow('Expected value to be a string not containing \'foo\' but received: undefined');
    });
});
