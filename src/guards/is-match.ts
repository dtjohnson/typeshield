import { Guard } from '../types';
import { isString } from './is-string';

/**
 * Creates a guard that tests if a value is a string that matches the specified RegExp
 * @param regexp The regular expression
 * @returns The guard
 */
export function isMatch(regexp: RegExp): Guard<string> {
    const guard = (value: unknown): value is string => isString(value) && regexp.test(value);
    guard.expectation = `match regex ${regexp}`;
    return guard;
}
