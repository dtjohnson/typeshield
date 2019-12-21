import { Guard, Validator } from '../types';
import { isFunction } from './is-function';
import { isObject } from './is-object';

/**
 * Collection of property validators
 */
export type PropertyValidators<T> = {
    /**
     * Property validators
     */
    [TP in keyof T]?: Validator;
};

/**
 * Creates a guard that tests if a value is an object with properties matching the specified property validators
 * @param validators The property validators
 * @param interfaceName An optional interface name to report in the error message
 * @returns The guard
 */
export function hasProperties<T>(validators: PropertyValidators<T>, interfaceName?: string): Guard<T> {
    const guard = (value: unknown): value is T => {
        if (!isObject(value) && !isFunction(value)) return false;

        const keys = Reflect.ownKeys(validators);
        for (const key of keys) {
            const validator = (validators as any)[key as any];
            const val = (value as any)[key as any];
            if (!validator(val)) return false;
        }

        return true;
    };

    (guard as Guard).expectation = interfaceName ? `implement '${interfaceName}'` : 'have specified properties';

    return guard;
}
