import { assert } from './assert';

describe(assert.name, () => {
    it('should throw an error only if the condition fails', () => {
        expect(() => assert(false)).toThrow('Assertion failed');
        expect(() => assert(false, 'some message')).toThrow('some message');
        expect(() => assert(false, () => 'some message')).toThrow('some message');
        expect(() => assert(true)).not.toThrow();
    });
});
