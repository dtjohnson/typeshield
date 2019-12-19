import { Guard } from '../guard';
import { isString } from './is-string';

export function isMatch(regexp: RegExp): Guard<string> {
    const guard = (value: unknown): value is string => isString(value) && regexp.test(value);
    guard.expectation = `match regex ${regexp}`;
    return guard;
}
