/**
 * An error thrown by a failed assertion
 */
export class AssertionError extends Error {
}
Object.defineProperty(AssertionError.prototype, 'name', {
    value: AssertionError.name,
});
