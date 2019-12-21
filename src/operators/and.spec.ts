import { and } from './and';
import { assertValue } from '../assertions/assert-value';
import { hasProperties } from '../guards/has-properties';
import { isBoolean } from '../guards/is-boolean';

const isFoo = hasProperties({ foo: isBoolean }, 'Foo');
const isBar = hasProperties({ bar: isBoolean }, 'Bar');

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
