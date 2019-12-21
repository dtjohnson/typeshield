import { Guard } from '../types';
import { isString } from './is-string';

/**
 * Creates a guard that tests if a value is a string that does not contain the specified substring
 * @param substring The substring to check for
 * @returns The guard
 */
export function isStringNotContaining(substring: string): Guard<string> {
    const guard = (value: unknown): value is string => isString(value) && !value.includes(substring);
    (guard as Guard).expectation = `be a string not containing '${substring}'`;
    return guard;
}
