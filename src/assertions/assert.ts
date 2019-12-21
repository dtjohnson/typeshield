import { AssertionError } from './assertion-error';

export function assert(condition: unknown, msg?: string|(() => string)): asserts condition {
    if (!condition) {
        if (typeof msg === 'function') msg = msg();
        throw new AssertionError(msg ?? 'Assertion failed');
    }
}
