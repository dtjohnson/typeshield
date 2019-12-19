import { Guard, Validator } from '../guard';
import { isFunction } from './is-function';
import { isObject } from './is-object';

export type Definition<T> = {
    [TP in keyof T]?: Validator;
};

// TODO: Extract settable values from T
export function hasDefinition<T>(def: Definition<T>, interfaceName?: string): Guard<T> {
    const guard = (value: unknown): value is T => {
        if (value === null || (!isObject(value) && !isFunction(value))) return false;

        const keys = Reflect.ownKeys(def);
        for (const key of keys) {
            const validator = (def as any)[key as any];
            const val = (value as any)[key as any];
            if (!validator(val)) return false;
        }

        return true;
    };

    if (interfaceName) (guard as Guard).expectation = `implement ${interfaceName}`;

    return guard;
}
