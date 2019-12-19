import { assertValue } from '../assert';
import { isFunction } from './is-function';

/* eslint-disable @typescript-eslint/no-empty-function */

describe(isFunction.name, () => {
    it('should return true if match', () => {
        expect(isFunction(() => {})).toBe(true);
        expect(isFunction(Date)).toBe(true);
        expect(isFunction(undefined)).toBe(false);
        expect(isFunction(5)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isFunction, undefined)).toThrow('Expected value to be a function but received: undefined');
    });
});
