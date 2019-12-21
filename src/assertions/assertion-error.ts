export class AssertionError extends Error {
}
Object.defineProperty(AssertionError.prototype, 'name', {
    value: AssertionError.name,
});
