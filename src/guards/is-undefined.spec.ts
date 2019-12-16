import { assertValue } from '../assert';
import { isUndefined } from './is-undefined';

describe(isUndefined.name, () => {
    it('should return true if match', () => {
        expect(isUndefined(undefined)).toBe(true);
        expect(isUndefined(null)).toBe(false);
        expect(isUndefined('some string')).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isUndefined, null)).toThrow('Expected value to be undefined but received: null');
    });
});
