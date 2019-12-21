import { and } from './and';
import { assertValue } from '../assertions/assert-value';
import { hasDefinition } from '../guards/has-definition';
import { isBoolean } from '../guards/is-boolean';

const isFoo = hasDefinition({ foo: isBoolean }, 'Foo');
const isBar = hasDefinition({ bar: isBoolean }, 'Bar');

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
