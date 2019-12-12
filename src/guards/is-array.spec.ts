import { assertValue } from '../assert';
import { isArray, isArrayOrUndefined } from './is-array';

describe(isArray.name, () => {
    it('should return true if match', () => {
        expect(isArray([])).toBe(true);
        expect(isArray(undefined)).toBe(false);
        expect(isArray(Array)).toBe(false);
        expect(isArray(5)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isArray, undefined)).toThrow('Expected value to be an array but received: undefined');
    });
});

describe(isArrayOrUndefined.name, () => {
    it('should return true if match', () => {
        expect(isArrayOrUndefined([])).toBe(true);
        expect(isArrayOrUndefined(undefined)).toBe(true);
        expect(isArrayOrUndefined(Array)).toBe(false);
        expect(isArrayOrUndefined(5)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isArrayOrUndefined, 5)).toThrow('Expected value to be an array or to be undefined but received: 5');
    });
});
