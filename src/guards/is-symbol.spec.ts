import { assertValue } from '../assertions/assert-value';
import { isSymbol } from './is-symbol';

describe(isSymbol.name, () => {
    it('should return true if match', () => {
        expect(isSymbol(Symbol('foo'))).toBe(true);
        expect(isSymbol(Symbol())).toBe(true);
        expect(isSymbol(undefined)).toBe(false);
        expect(isSymbol(5)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isSymbol, undefined)).toThrow('Expected value to be a symbol but received: undefined');
    });
});
