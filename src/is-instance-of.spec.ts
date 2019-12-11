import { isInstanceOf } from './is-instance-of';

describe(isInstanceOf.name, () => {
    it('should return true if match', () => {
        expect(isInstanceOf(Date)(new Date())).toBe(true);
        expect(isInstanceOf(RegExp)(/.*/u)).toBe(true);
        expect(isInstanceOf(Date)('foo')).toBe(false);
    });
});
