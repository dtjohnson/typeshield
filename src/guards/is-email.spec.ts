import { assertValue } from '../assert';
import { isEmail } from './is-email';

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
