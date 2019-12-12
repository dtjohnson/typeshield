import { assertValue } from '../assert';
import { isEmail, isEmailOrUndefined } from './is-email';

describe(isEmail.name, () => {
    it('should return true if match', () => {
        expect(isEmail('john.smith@example.com')).toBe(true);
        expect(isEmail(undefined)).toBe(false);
        expect(isEmail('some other string')).toBe(false);
        expect(isEmail(5)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isEmail, undefined)).toThrow('Expected value to be an email address but received: undefined');
    });
});

describe(isEmailOrUndefined.name, () => {
    it('should return true if match', () => {
        expect(isEmailOrUndefined('john.smith@example.com')).toBe(true);
        expect(isEmailOrUndefined(undefined)).toBe(true);
        expect(isEmailOrUndefined('some other string')).toBe(false);
        expect(isEmailOrUndefined(5)).toBe(false);
    });

    it('should throw with a clear message', () => {
        expect(() => assertValue(isEmailOrUndefined, 5)).toThrow('Expected value to be an email address or to be undefined but received: 5');
    });
});
