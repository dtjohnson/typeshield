import { assert } from './assert';

/**
 * Asserts that the given call is never reached. Will always throw if called.
 * Useful for ending branches that TypeScript can't properly determine
 * @param msg The message to throw
 */
export function assertUnreachable(msg: string = 'Statement should not be reachable'): never {
    assert(false, msg);
}
