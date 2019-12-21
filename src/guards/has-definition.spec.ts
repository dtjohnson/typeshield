import { assertValue } from '../assertions/assert-value';
import { hasDefinition } from './has-definition';
import { isNumber } from './is-number';

describe(hasDefinition.name, () => {
    it('should return true if match', () => {
        expect(hasDefinition({})({})).toBe(true);
        expect(hasDefinition({})(undefined)).toBe(false);
        expect(hasDefinition({ foo: isNumber })({})).toBe(false);
        expect(hasDefinition({ foo: isNumber })({ foo: true })).toBe(false);
        expect(hasDefinition({ foo: isNumber })({ foo: 5 })).toBe(true);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(hasDefinition({}), undefined)).toThrow('Expected value to have specified definition but received: undefined');
        expect(() => assertValue(hasDefinition({}, 'Foo'), undefined)).toThrow('Expected value to implement \'Foo\' but received: undefined');
    });
});
