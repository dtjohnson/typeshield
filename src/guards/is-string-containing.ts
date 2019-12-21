import { Guard } from '../guard';
import { isString } from './is-string';

export function isStringContaining(substring: string): Guard<string> {
    const guard = (value: unknown): value is string => isString(value) && value.includes(substring);
    (guard as Guard).expectation = `be a string containing '${substring}'`;
    return guard;
}
