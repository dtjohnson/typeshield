import { Guard, Validator } from '../guard';
import { isFunction } from './is-function';
import { isObject } from './is-object';

export type Definition<T> = {
    [TP in keyof T]?: Validator;
};

export function hasDefinition<T>(def: Definition<T>): Guard<T> {
    return (value: unknown): value is T => {
        if (!isObject(value) && !isFunction(value)) return false;

        const keys = Reflect.ownKeys(def);
        for (const key of keys) {
            const validator = (def as any)[key as any];
            const val = (value as any)[key as any];
            if (!validator(val)) return false;
        }

        return true;
    };
}
