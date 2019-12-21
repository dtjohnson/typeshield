import { Guard, Validator } from '../types';
import { assert } from './assert';
import { getExpectation } from '../get-expectation';

/**
 * The maximum length to show of the stringified value
 * @ignore
 */
const maxValueStrLength = 150;

/**
 * Asserts that a value satisfies a provided guard and is therefore of the type returned by the guard.
 * @param guard The guard to call with the value
 * @param value The value to check
 * @param name An optional name for the value to use in the error message
 * @param expectation An optional expectation string to use in the error message. Will override the expectation string attached to the guard.
 */
export function assertValue<T>(guard: Guard<T>, value: unknown, name?: string, expectation?: string): asserts value is T;
/**
 * Asserts that a value satisfies a provided validator.
 * @param validator The validator to call with the value
 * @param value The value to check
 * @param name An optional name for the value to use in the error message
 * @param expectation An optional expectation string to use in the error message. Will override the expectation string attached to the guard.
 */
export function assertValue(validator: Validator, value: unknown, name?: string, expectation?: string): void;
export function assertValue(validator: Validator, value: unknown, name?: string, expectation?: string): void {
    assert(validator(value), () => {
        name = name ? `'${name}'` : 'value';
        expectation = expectation ?? getExpectation(validator);
        let valueStr = `${value}`;
        if (valueStr === `${{}}`) valueStr = JSON.stringify(value);
        if (valueStr.length > maxValueStrLength) valueStr = `${valueStr.substr(0, maxValueStrLength)}...`;

        return `Expected ${name} to ${expectation} but received: ${valueStr}`;
    });
}
