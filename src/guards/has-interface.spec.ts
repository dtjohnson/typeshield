import { assertValue } from '../assertions/assert-value';
import { hasInterface } from './has-interface';
import { isNumber } from './is-number';

interface Foo {
    foo: number;
}

const isFoo = hasInterface<Foo>('Foo', {
    foo: isNumber,
});

const isFoo2 = hasInterface<Foo>('Foo', () => ({
    foo: isNumber,
}));

describe(hasInterface.name, () => {
    it('should return true if match', () => {
        expect(isFoo(undefined)).toBe(false);
        expect(isFoo({})).toBe(false);
        expect(isFoo({ foo: true })).toBe(false);
        expect(isFoo({ foo: 5 })).toBe(true);

        expect(isFoo2({ foo: true })).toBe(false);
        expect(isFoo2({ foo: 5 })).toBe(true);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isFoo, undefined)).toThrow('Expected value to implement \'Foo\' but received: undefined');
    });
});
