import { assertValue } from '../assertions/assert-value';
import { hasProperties } from './has-properties';
import { isNumber } from './is-number';

describe(hasProperties.name, () => {
    it('should return true if match', () => {
        expect(hasProperties({})({})).toBe(true);
        expect(hasProperties({})(undefined)).toBe(false);
        expect(hasProperties({ foo: isNumber })({})).toBe(false);
        expect(hasProperties({ foo: isNumber })({ foo: true })).toBe(false);
        expect(hasProperties({ foo: isNumber })({ foo: 5 })).toBe(true);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(hasProperties({}), undefined)).toThrow('Expected value to have specified properties but received: undefined');
        expect(() => assertValue(hasProperties({}, 'Foo'), undefined)).toThrow('Expected value to implement \'Foo\' but received: undefined');
    });
});
