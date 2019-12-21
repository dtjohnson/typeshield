import { AssertionError } from './assertion-error';

/**
 * Asserts that a condition is true or throws an error if false
 * @param condition The condition to assert
 * @param msg The message to use in the thrown error. Accepts a function that can be called to generate the message to improve performance.
 * @throws [[AssertionError]] if condition is not true
 */
export function assert(condition: unknown, msg?: string|(() => string)): asserts condition {
    if (!condition) {
        // Only call the message function if the condition is false
        if (typeof msg === 'function') msg = msg();
        throw new AssertionError(msg ?? 'Assertion failed');
    }
}
