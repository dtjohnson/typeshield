import { Assert } from './assert-decorator';
import { isBoolean } from '../guards/is-boolean';
import { isNumber } from '../guards/is-number';
import { isPositive } from '../guards/is-positive';
import { isString } from '../guards/is-string';
import { isUndefined } from '../guards/is-undefined';
import { or } from '../guards/or';

class Foo {
    @Assert(isPositive)
    @Assert(() => isNumber)
    public static staticValue: number = 1;

    @Assert(or([ isString, isUndefined ]))
    public value?: string;

    @Assert(isBoolean, 'some name')
    public value2: boolean = false;
}

describe(Assert.name, () => {
    it('should throw an error if setting field with invalid value', () => {
        const foo = new Foo();
        expect(() => foo.value = 'foo').not.toThrow();
        expect(() => foo.value = 5 as any).toThrow('Expected \'Foo#value\' to be a string or to be undefined but received: 5');
        expect(() => foo.value2 = 5 as any).toThrow('Expected \'some name\' to be a boolean but received: 5');
        expect(() => Foo.staticValue = 'foo' as any).toThrow('Expected \'Foo.staticValue\' to be a number but received: foo');
        expect(foo.value2).toBe(false);
    });
});
