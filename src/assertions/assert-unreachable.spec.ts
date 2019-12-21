import { assertUnreachable } from './assert-unreachable';

describe(assertUnreachable.name, () => {
    it('should throw an error', () => {
        expect(() => assertUnreachable()).toThrow('Statement should not be reachable');
        expect(() => assertUnreachable('some message')).toThrow('some message');
    });
});
