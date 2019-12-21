import { Validator } from './types';

export function getExpectation(validator: Validator): string {
    return validator.expectation ?? `match ${validator.name ? `'${validator.name}'` : 'assertion'}`;
}
