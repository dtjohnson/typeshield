import { assertValue } from '../assertions/assert-value';
import { isObject } from './is-object';

describe(isObject.name, () => {
    it('should return true if match', () => {
        expect(isObject({})).toBe(true);
        expect(isObject(new Date())).toBe(true);
        expect(isObject(null)).toBe(false);
        expect(isObject(undefined)).toBe(false);
        expect(isObject('some string')).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isObject, undefined)).toThrow('Expected value to be an object but received: undefined');
    });
});
