import { isAny } from './is-any';

describe(isAny.name, () => {
    it('should return true if match', () => {
        expect(isAny(undefined)).toBe(true);
        expect(isAny(null)).toBe(true);
        expect(isAny(5)).toBe(true);
        expect(isAny({})).toBe(true);
        expect(isAny('foo')).toBe(true);
    });
});
