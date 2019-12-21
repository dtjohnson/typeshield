import { assert } from './assert';
export function assertUnreachable(msg?: string): never {
    assert(false, msg ?? 'Statement should not be reachable');
}
