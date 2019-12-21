import { assertValue } from '../assertions/assert-value';
import { isMatch } from './is-match';

describe(isMatch.name, () => {
    it('should return true if match', () => {
        const match = isMatch(/^[a-z]+$/u);
        expect(match('foobar')).toBe(true);
        expect(match('foo123')).toBe(false);
        expect(match(undefined)).toBe(false);
        expect(match(123)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isMatch(/^\w+$/u), undefined)).toThrow('Expected value to match regex /^\\w+$/u but received: undefined');
    });
});
