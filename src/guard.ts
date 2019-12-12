interface HasExpectation {
    expectation?: string;
}
export type Guard<T = unknown> = ((value: unknown) => value is T) & HasExpectation;
export type Validator = ((value: unknown) => boolean) & HasExpectation;

export function getExpectation(validator: Validator): string {
    return validator.expectation ?? `match ${validator.name ? `'${validator.name}'` : 'assertion'}`;
}
