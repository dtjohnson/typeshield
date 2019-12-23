import { Guard, Validator } from '../types';
import { isFunction } from './is-function';
import { isObject } from './is-object';

/**
 * Extract an object of types from an object of guards
 */
type ExtractProperties<T extends PropertyValidators> = {
    [TP in keyof T]: T[TP] extends Guard<infer U> ? U : unknown;
};

/**
 * Collection of property validators
 */
interface PropertyValidators {
    [key: string]: Validator;
}

/**
 * Creates a guard that tests if a value is an object with properties matching the specified property validators
 * @param validators The property validators
 * @returns The guard
 */
export function hasProperties<T extends PropertyValidators>(validators: T): Guard<ExtractProperties<T>> {
    const guard = (value: unknown): value is ExtractProperties<T> => {
        if (!isObject(value) && !isFunction(value)) return false;

        const keys = Reflect.ownKeys(validators);
        for (const key of keys) {
            const validator = (validators as any)[key as any];
            const val = (value as any)[key as any];
            if (!validator(val)) return false;
        }

        return true;
    };

    (guard as Guard).expectation = 'have specified properties';

    return guard;
}
