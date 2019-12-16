import { assertValue } from '../assert';
import { isObject, isObjectOrUndefined } from './is-object';

describe(isObject.name, () => {
    it('should return true if match', () => {
        expect(isObject({})).toBe(true);
        expect(isObject(new Date())).toBe(true);
        expect(isObject(null)).toBe(true);
        expect(isObject(undefined)).toBe(false);
        expect(isObject('some string')).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isObject, undefined)).toThrow('Expected value to be an object but received: undefined');
    });
});

describe(isObjectOrUndefined.name, () => {
    it('should return true if match', () => {
        expect(isObjectOrUndefined({})).toBe(true);
        expect(isObjectOrUndefined(new Date())).toBe(true);
        expect(isObjectOrUndefined(null)).toBe(true);
        expect(isObjectOrUndefined(undefined)).toBe(true);
        expect(isObjectOrUndefined('some string')).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isObjectOrUndefined, 'foo')).toThrow('Expected value to be an object or to be undefined but received: foo');
    });
});
