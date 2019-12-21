import { Validator } from './types';
import { getExpectation } from './get-expectation';

describe(getExpectation.name, () => {
    it('should extract the expectation from a guard', () => {
        expect(getExpectation(() => true)).toBe('match assertion');

        // eslint-disable-next-line prefer-arrow-callback
        expect(getExpectation(function isFoo() {
            return true;
        })).toBe('match \'isFoo\'');

        const guard = (): boolean => true;
        (guard as Validator).expectation = 'be something';
        expect(getExpectation(guard)).toBe('be something');
    });
});
