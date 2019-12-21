import { isNull } from './is-null';
import { isUndefined } from './is-undefined';
import { or } from '../operators/or';

/**
 * Guard that tests if the value is null or undefined
 * @param value The value to test
 * @returns The result of the test
 */
export const isNil = or(isNull, isUndefined);
