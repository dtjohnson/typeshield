import { Guard } from './types';
import { isString } from './is-string';
import { isUndefined } from './is-undefined';
import { or } from './operators';

export function isMatch(regexp: RegExp): Guard<string> {
    const guard = (value: unknown): value is string => isString(value) && regexp.test(value);
    guard.expectation = `to match regex ${regexp}`;
    return guard;
}

export function isMatchOrUndefined(regexp: RegExp): Guard<string|undefined> {
    return or(isUndefined, isMatch(regexp));
}
