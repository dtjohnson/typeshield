import { assertValue } from '../assert';
import { isStringContaining } from './is-string-containing';

describe(isStringContaining.name, () => {
    it('should return true if match', () => {
        const isStringContainingFoo = isStringContaining('foo');
        expect(isStringContainingFoo('foo bar')).toBe(true);
        expect(isStringContainingFoo('some other string')).toBe(false);
        expect(isStringContainingFoo(undefined)).toBe(false);
        expect(isStringContainingFoo(5)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isStringContaining('foo'), undefined)).toThrow('Expected value to be a string containing \'foo\' but received: undefined');
    });
});
