import { Guard, Validator } from '../types';
import { assert } from './assert';
import { getExpectation } from '../get-expectation';
export function assertValue<T>(guard: Guard<T>, value: unknown, name?: string, expectation?: string): asserts value is T;
export function assertValue(validator: Validator, value: unknown, name?: string, expectation?: string): void;
export function assertValue(validator: Validator, value: unknown, name?: string, expectation?: string): void {
    assert(validator(value), () => {
        name = name ? `'${name}'` : 'value';
        expectation = expectation ?? getExpectation(validator);
        return `Expected ${name} to ${expectation} but received: ${value}`;
    });
}
