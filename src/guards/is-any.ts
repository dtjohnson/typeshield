/**
 * Guard that tests if the value is an any value (always true)
 * @param value The value to test
 * @returns true
 */
export function isAny(value: unknown): value is any {
    return true;
}
