import { Guard } from '../types';
import { isString } from './is-string';

/**
 * Creates a guard that tests if a value is a string containing the specified substring
 * @param substring The substring to check for
 * @returns The guard
 */
export function isStringContaining(substring: string): Guard<string> {
    const guard = (value: unknown): value is string => isString(value) && value.includes(substring);
    (guard as Guard).expectation = `be a string containing '${substring}'`;
    return guard;
}
