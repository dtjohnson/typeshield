import { Guard } from '../types';
import { assertValue } from './assert-value';

function someGuard(value: unknown): value is unknown {
    return false;
}

function guardWithExpectation(value: unknown): value is unknown {
    return false;
}
(guardWithExpectation as Guard).expectation = 'be something';

describe(assertValue.name, () => {
    it('should throw an error only if the condition fails', () => {
        expect(() => assertValue(someGuard, 'some value')).toThrow('Expected value to match \'someGuard\' but received: some value');
        expect(() => assertValue(guardWithExpectation, 5)).toThrow('Expected value to be something but received: 5');
        expect(() => assertValue(someGuard, 'some value', 'variable')).toThrow('Expected \'variable\' to match \'someGuard\' but received: some value');
        expect(() => assertValue(someGuard, 'some value', undefined, 'be foo')).toThrow('Expected value to be foo but received: some value');
        expect(() => assertValue(someGuard, 'some value', 'variable', 'be foo')).toThrow('Expected \'variable\' to be foo but received: some value');
        expect(() => assertValue(guardWithExpectation, {})).toThrow('Expected value to be something but received: {}');
        expect(() => assertValue(guardWithExpectation, { foo: true })).toThrow('Expected value to be something but received: {"foo":true}');
        // eslint-disable-next-line max-len
        expect(() => assertValue(guardWithExpectation, { foo: new Array(1000) })).toThrow('Expected value to be something but received: {"foo":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,nu...');

        expect(() => assertValue(() => someGuard, 'some value')).toThrow('Expected value to match \'someGuard\' but received: some value');
    });
});
