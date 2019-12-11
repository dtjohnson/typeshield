import { Guard } from './types';
import { isUndefined } from './is-undefined';
import { or } from './operators';

export function isObject(value: unknown): value is object {
    return typeof value === 'object';
}
(isObject as Guard).expectation = 'be an object';

export const isObjectOrUndefined = or(isObject, isUndefined);
