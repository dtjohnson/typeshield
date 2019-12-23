/**
 * Guard that tests if the value is an any unknown value (always true)
 * @param value The value to test
 * @returns true
 */
export function isUnknown(value: unknown): value is unknown {
    return true;
}
