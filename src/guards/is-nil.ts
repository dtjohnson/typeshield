import { Guard } from 'types';
import { isNull } from './is-null';
import { isUndefined } from './is-undefined';
import { or } from './or';

/**
 * @ignore
 */
const guard = or([ isNull, isUndefined ]);

/**
 * Guard that tests if the value is null or undefined
 * @param value The value to test
 * @returns The result of the test
 */
export function isNil(value: unknown): value is unknown {
    return guard(value);
}
(isNil as Guard).expectation = guard.expectation;
