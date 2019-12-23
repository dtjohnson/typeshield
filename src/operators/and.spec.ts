import { and } from './and';
import { assertValue } from '../assertions/assert-value';
import { hasInterface } from '../guards/has-interface';
import { isBoolean } from '../guards/is-boolean';

const isFoo = hasInterface('Foo', { foo: isBoolean });
const isBar = hasInterface('Bar', { bar: isBoolean });

describe(and.name, () => {
    it('should create a combination guard', () => {
        const isFooAndBar = and(isFoo, isBar);
        expect(isFooAndBar({ foo: true, bar: true })).toBe(true);
        expect(isFooAndBar({ foo: true })).toBe(false);
        expect(isFooAndBar({ bar: true })).toBe(false);
        expect(isFooAndBar({})).toBe(false);
        expect(isFooAndBar(undefined)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(and(isFoo, isBar), undefined)).toThrow('Expected value to implement \'Foo\' and to implement \'Bar\' but received: undefined');
    });
});
