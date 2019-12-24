import { Validator } from './types';

/**
 * Get the expectation message from a validator
 * @ignore
 * @param validator A validator
 * @returns The message
 */
export function getExpectation(validator: Validator): string {
    if (typeof validator.expectation === 'function') validator.expectation = validator.expectation();
    return validator.expectation ?? `match ${validator.name ? `'${validator.name}'` : 'assertion'}`;
}
