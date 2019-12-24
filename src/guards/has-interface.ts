import { Guard } from '../types';
import { hasProperties } from './has-properties';

/**
 * Collection of interface validators
 */
export type InterfaceValidators<T> = {
    /**
     * Property validators
     */
    [TP in keyof T]-?: Guard<T[TP] extends Function ? Function : T[TP]>; // Squash functions as we don't verify call signatures or return types
};

/**
 * Creates a guard that tests if a value implements a specified interface
 * @param interfaceName The interface name to report in the error message
 * @param validators The property validators (or function that returns them)
 * @returns The guard
 */
export function hasInterface<T>(interfaceName: string, validators: InterfaceValidators<T>|(() => InterfaceValidators<T>)): Guard<T> {
    // Need to cast to any as TS doesn't support symbol indexers so hasProperties won't take it
    const guard = hasProperties(validators as any) as Guard<T>;
    guard.expectation = `implement '${interfaceName}'`;
    return guard;
}
