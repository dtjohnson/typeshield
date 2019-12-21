import { Guard, Validator } from '../types';
import { assert } from './assert';
import { getExpectation } from '../get-expectation';

const maxValueLength = 150;

export function assertValue<T>(guard: Guard<T>, value: unknown, name?: string, expectation?: string): asserts value is T;
export function assertValue(validator: Validator, value: unknown, name?: string, expectation?: string): void;
export function assertValue(validator: Validator, value: unknown, name?: string, expectation?: string): void {
    assert(validator(value), () => {
        name = name ? `'${name}'` : 'value';
        expectation = expectation ?? getExpectation(validator);
        let valueStr = `${value}`;
        if (valueStr === `${{}}`) valueStr = JSON.stringify(value);
        if (valueStr.length > maxValueLength) valueStr = `${valueStr.substr(0, maxValueLength)}...`;

        return `Expected ${name} to ${expectation} but received: ${valueStr}`;
    });
}
