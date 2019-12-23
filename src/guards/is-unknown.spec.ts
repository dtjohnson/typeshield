import { isUnknown } from './is-unknown';

describe(isUnknown.name, () => {
    it('should return true if match', () => {
        expect(isUnknown(undefined)).toBe(true);
        expect(isUnknown(null)).toBe(true);
        expect(isUnknown(5)).toBe(true);
        expect(isUnknown({})).toBe(true);
        expect(isUnknown('foo')).toBe(true);
    });
});
