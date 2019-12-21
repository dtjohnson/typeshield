import { assertValue } from '../assertions/assert-value';
import { isBigInt } from './is-big-int';

describe(isBigInt.name, () => {
    it('should return true if match', () => {
        expect(isBigInt(BigInt(123456))).toBe(true);
        expect(isBigInt(BigInt('123456'))).toBe(true);
        expect(isBigInt(5.67)).toBe(false);
        expect(isBigInt(-3)).toBe(false);
        expect(isBigInt(NaN)).toBe(false);
        expect(isBigInt(Infinity)).toBe(false);
        expect(isBigInt(undefined)).toBe(false);
        expect(isBigInt('some string')).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isBigInt, undefined)).toThrow('Expected value to be a BigInt but received: undefined');
    });
});
