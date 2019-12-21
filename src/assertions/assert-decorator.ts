import { Validator } from '../types';
import { assertValue } from './assert-value';
export function Assert(validator: Validator, name?: string, expectation?: string): PropertyDecorator {
    return (target: any, propertyKey) => {
        const key = `_${propertyKey.toString()}`;
        const validatorsKey = `${key}_validators`;
        if (name === undefined) {
            name = typeof target === 'function'
                ? `${target.name}.${propertyKey.toString()}`
                : `${target.constructor.name}#${propertyKey.toString()}`;
        }

        if (!target[validatorsKey]) {
            target[validatorsKey] = [];
            Object.defineProperty(target, propertyKey, {
                get() {
                    return this[key];
                },
                set(value: unknown) {
                    for (const validator of target[validatorsKey]) {
                        assertValue(validator, value, name, expectation);
                    }
                    this[key] = value;
                },
            });
        }
        target[validatorsKey].push(validator);
    };
}
