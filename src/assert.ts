import { Guard, Validator, getExpectation } from './guard';

export class AssertionError extends Error {}
Object.defineProperty(AssertionError.prototype, 'name', {
    value: AssertionError.name,
});

export function assert(condition: unknown, msg?: string|(() => string)): asserts condition {
    if (!condition) {
        if (typeof msg === 'function') msg = msg();
        throw new AssertionError(msg ?? 'Assertion failed');
    }
}

export function assertValue<T>(guard: Guard<T>, value: unknown, name?: string, expectation?: string): asserts value is T;
export function assertValue(validator: Validator, value: unknown, name?: string, expectation?: string): void;
export function assertValue(validator: Validator, value: unknown, name?: string, expectation?: string): void {
    assert(validator(value), () => {
        name = name ? `'${name}'` : 'value';
        expectation = expectation ?? getExpectation(validator);
        return `Expected ${name} to ${expectation} but received: ${value}`;
    });
}

export function Assert(validator: Validator): PropertyDecorator {
    return (target: any, propertyKey) => {
        const key = `_${propertyKey.toString()}`;
        const validatorsKey = `${key}_validators`;

        const name = typeof target === 'function'
            ? `${target.name}.${propertyKey.toString()}`
            : `${target.constructor.name}#${propertyKey.toString()}`;

        if (!target[validatorsKey]) {
            target[validatorsKey] = [];

            Object.defineProperty(target, propertyKey, {
                get() {
                    return this[key];
                },

                set(value: unknown) {
                    for (const validator of target[validatorsKey]) {
                        assertValue(validator, value, name);
                    }

                    this[key] = value;
                },
            });
        }

        target[validatorsKey].push(validator);
    };
}
