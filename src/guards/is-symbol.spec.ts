import { assertValue } from '../assert';
import { isSymbol, isSymbolOrUndefined } from './is-symbol';

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

describe(isSymbolOrUndefined.name, () => {
    it('should return true if match', () => {
        expect(isSymbolOrUndefined(Symbol('foo'))).toBe(true);
        expect(isSymbolOrUndefined(Symbol())).toBe(true);
        expect(isSymbolOrUndefined(undefined)).toBe(true);
        expect(isSymbolOrUndefined(5)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isSymbolOrUndefined, 5)).toThrow('Expected value to be a symbol or to be undefined but received: 5');
    });
});
