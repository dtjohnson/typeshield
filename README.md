# Guardian

Guardian is a collection of composable TypeScript/JavaScript type guards and assertions. Assertions use the new [assertion function](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) types in TypeScript 3.7.

## Table of Contents

<!-- toc -->

- [Guards](#guards)
  * [Prebuilt Guards](#prebuilt-guards)
  * [Arrays](#arrays)
  * [Object Properties](#object-properties)
  * [Composing Guards](#composing-guards)
- [Assertions](#assertions)
  * [Value Assertions](#value-assertions)
  * [Assert Property Decorator](#assert-property-decorator)
  * [Assert Unreachable](#assert-unreachable)
- [Guard Reference](#guard-reference)

<!-- tocstop -->

## Guards

A [type guard](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types) in TypeScript is a function that checks the type of a value. This is a function of the form:
```ts
function (value: unknown): value is Foo {
    // Perform logic to determine if the value is indeed a 'Foo' and return true if it is, false otherwise.
}
```
Guardian exposes the [[Guard]] type to capture this. It also exposes a more general [[Validator]] type, which is just a function that takes an unknown value and returns a boolean.

### Prebuilt Guards

Guardian includes a large number of prebuilt guards. A full list can be found in the [Guard Reference](#guard-reference). An example:
```ts
import { isDate } from 'guardian';

function doSomething(value: unknown) {
    if (isDate(value)) {
        // Inside this block value has type 'Date'
        // ...
    }
}
```

Some Guardian functions are factories that require specifying an additional value in order to generate a guard. For example:
```ts
import { isStringContaining } from 'guardian';

function doSomething(value: unknown) {
    if (isStringContaining('foo')(value)) {
        // Inside this block value has type 'string'
        // We also know it contains the substring 'foo' but that isn't known in the type system.
        // ...
    }
}

// You can also save the guard to call for later
const isStringContainingFoo = isStringContaining('foo');
function doSomethingElse(value: unknown) {
    if (isStringContainingFoo(value)) {
        // ...
    }
}
```

Some guards return tagged primitive types. These are primitive types that are combined with a special tag type that can restrict usage. For example, the [[isInteger]] guard will type a variable as an [[Integer]], which is just a number with an additional tag indicating that we know it is an integer.
```ts
import { isInteger, Integer } from 'guardian'

function doSomethingWithNumber(value: number) {
    // ...
}

function doSomethingWithInteger(value: Integer) {
    // ...
}

const foo: number = 5; // Type is 'number'
doSomethingWithNumber(foo); // OK
doSomethingWithInteger(foo); // Error! Argument of type 'number' is not assignable to parameter of type 'Integer'.

if (isInteger(foo)) { // Type is 'Integer'
    doSomethingWithNumber(foo); // Still OK as 'Integer' is also a 'number'
    doSomethingWithInteger(foo); // OK
}
```

### Arrays
Items in arrays can also be checked using the [[isEach]] guard factory. The guard will first check that the value is an array and will then check each item in the array against the specified guard.
```ts
import { isEach, isNumber } from 'guardian';

const isArrayOfNumbers = isEach(isNumber);

function doSomething(value: unknown) {
    if (isArrayOfNumbers(value)) {
        // Inside this block value has type 'number[]'
        // ...
    }
}
```

### Object Properties
Similarly, you can check the properties of an object using the [[hasProperties]] guard factory:
```ts
import { hasDefinition, isString } from 'guardian';

const hasFooStringProperty = hasDefinition({
    foo: isString,
});

function doSomething(value: unknown) {
    if (hasFooStringProperty(value)) {
        // This checks if the value has the property 'foo' and that is a string, but it's still typed as 'unknown'. :(
        // ...
    }
}
```

In the previous example, the guard just asks as a validator. It doesn't inform the type system. However, the factory takes an optional generic argument that will set the type and check the keys of your validator object. The factory also takes an optional interface name parameter (used for assertions below). This makes it extremely easy to build strongly typed guards for your interfaces:
```ts
import { hasDefinition, isString } from 'guardian';

interface Foo {
    foo: string;
    bar: number[];
}

const isFoo = hasDefinition<Foo>({
    foo: isString,
    bar: isEach(isNumber),
}, 'Foo');

function doSomething(value: unknown) {
    if (isFoo(value)) {
        // Inside this block, value has type 'Foo' :)
        // ...
    }
}
```
You can, of course, nest the guards however deep you'd like.

### Composing Guards
Guardian comes with two operators ([[or]] and [[and]]) for easily combining guards together to create new guards. (In fact, many of the guards included in Guardian are created this way.) The [[or]] operator can be used to check if a value matches on of 2 or more guards.
```ts
import { isNumber, isString, isUndefined } from 'guardian';

function doSomething(value: unknown) {
    if (or(isNumber, isString)(value)) {
        // Inside this block value has type 'number|string'
        // ...
    }
}

// You can also save the guard to call for later
const isStringOrUndefined = or(isString, isUndefined);
function doSomethingElse(value: unknown) {
    if (isStringOrUndefined(value)) {
        // Inside this block value has type 'string|undefined'
        // ...
    }
}
```

Simlarly, the [[and]] operator creates an intersection of types.
```ts
import { hasProperties, isBoolean, isString } from 'guardian';

interface Foo {
    foo: boolean;
}
const isFoo = hasProperties<Foo>({
    foo: isBoolean,
}, 'Foo');

interface Bar {
    bar: number;
}
const isBar = hasProperties<Bar>({
    bar: isNumber,
}, 'Bar');

const isFooAndBar = and(isFoo, isBar);

function doSomething(value: unknown) {
    if (isFooAndBar(value)) {
        // Inside this block value has type 'Foo & Bar' so you can access 'value.foo' and 'value.bar'
    }
}
```

## Assertions

TypeScript introduced type support for [assertion functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) in release 3.7. Guardian includes the [[assert]] function to handle arbitrary assertion conditions. If the condition is met, execution continues, if not an [[AssertionError]] is thrown. Starting with TypeScript 3.7, the type engine also knows how to restrict the types after these assertions.
```ts
import { assert } from 'guardian';

function doSomething(value: unknown) {
    // The condition argument here is whatever you want.
    assert(typeof value === 'string');

    // Now the type of value is 'string'
    // If the value was not a string an error would be thrown.
}
```
You can also specify a custom error message if you want to control the error message.

### Value Assertions

Guardian also includes an [[assertValue]] function if you want to make assertions about the value of a variable. This form of the assertion makes it each to throw meaningful error messages. The first value of the function is any [[Guard]] or [[Validator]], the second is the value to test, and the 3rd is an optional name for the variable.
```ts
import { assertValue, isString } from 'guardian';

const myVar: number = 5;
assertValue(isString, myVar, 'myVar'); // throws AssertionError: Expected 'myVar' to be a string but received: 5
```

This works for your custom guards as well:
```ts
import { assertValue } from 'guardian';

function isFoo(value; unknown): value is Foo {
    // Implement here
} 

const myVar: number = 5;
assertValue(isFoo, myVar); // throws AssertionError: Expected value to match 'isFoo' but received: 5
```
In this example the error message isn't very friendly. You can make the message more friendly by using the optional 4th parameter. This parameter is an expectation message and it is a sentence fragment that follows `'expected variable to '`:
```ts
assertValue(isFoo, myVar, 'myVar', 'be a Foo'); // throws AssertionError: Expected 'myVar' to be a Foo but received: 5
```

The downside of this approach is that you need to specify the expectation each time you make a value assertion. There is a better alternative approach. The [[Guard]] and [[Validator]] type includes an additional optional `expectation` property that allows you to attach the expectation directly to the function. To use it:
```ts
(isFoo as Guard).expectation = 'be a Foo';

// From now on:
assertValue(isFoo, myVar); // throws AssertionError: Expected value to be a Foo but received: 5
```
Most of the prebuild guards in Guardian use this property to set more helpful messages, which is why the example with [[isString]] above looked good.

### Assert Property Decorator

Guardian also includes an [[Assert]] decorator that can be used on class properties. This decorator converts a property to a getter/setter with a setter that calls [[assertValue]]. For example:
```ts
class MyClass {
    @Assert(or(isEmail, isUndefined))
    public email?: string;
}

const instance = new MyClass();
instance.email = 'foo'; // throws AssertionError: Expected 'MyClass#email' to be an email address or to be undefined but received: foo
```
The decorator has the same signature as [[assertValue]] so the name and expectation can be overridden. The decorator also supports static properties.

### Assert Unreachable

Finally, Guardian includes an [[assertUnreachable]] function that will always throw if called. This is useful for protecting code when called from JavaScript (i.e. no type checking) or for ensuring fully discriminated unions to be safe from refactoring.
```ts
interface A {
    type: 'a';
}

interface B {
    type: 'b';
}

type All = A | B;

function doSomething(arg: All): string {
    if (arg.type === 'a') {
        return 'A';
    }

    if (arg.type === 'b') {
        return 'B';
    }

    // This could be reached if called from JS or if another type is added to 'All'
    assertUnreachable(); // throws AssertionError: Statement should not be reachable
}
```

## Guard Reference

<!-- guardref -->
| Name | Factory Params | Return Type | Description |
| --- | --- | --- | --- |
| [[hasProperties]] | __validators__: PropertyValidators<T> - The property validators<br />__interfaceName__: string - An optional interface name to report in the error message | T | Creates a guard that tests if a value is an object with properties matching the specified property validators
| [[isArray]] |  | unknown[] | Guard that tests if the value is an array
| [[isBigInt]] |  | bigint | Guard that tests if the value is an big integer
| [[isBoolean]] |  | boolean | Guard that tests if the value is a boolean
| [[isComparable]] |  | [[Comparable]] | Guard that tests if the value implements the [[Comparable]] interface
| [[isDate]] |  | Date | Guard that tests if the value is an instance of Date
| [[isDeepEqualTo]] | __other__: T - The object to compare values to<br />__strict__: boolean - True to use strict equality (default) and false to use coercive equality | T | Creates a guard that tests if a value is equal to the specified value using the [deep-equal package]{@link https://www.npmjs.com/package/deep-equal}
| [[isDefined]] |  | NonNullable<T> | Guard that tests if the value is not null and not undefined
| [[isEach]] | __eachGuard__: Guard<T> - The guard used for each item in the array. | T[] | Creates a guard that tests if a value is an array and that each value in the array satisfies the given guard.
| [[isEmail]] |  | [[Email]] | Guard that tests if the value is an email address
| [[isEmptyArray]] |  | unknown[] | Guard that tests if the value is an empty array
| [[isEmptyString]] |  | "" | Guard that tests if the value is an empty string
| [[isEqualTo]] | __other__: T - The object to compare values to | T | Creates a guard that tests if a value is equal to a specified object. Values are compared by identity first andthen by using the [[Equatable]] or [[Comparable]] interfaces, if implemented.
| [[isEquatable]] |  | [[Equatable]] | Guard that tests if the value implements the [[Equatable]] interface
| [[isFunction]] |  | function | Guard that tests if the value is a function
| [[isGreaterThan]] | __other__: T - The value to compare to | T | Creates a guard that tests if a value if greater than a specified value. Will firstcompare using the [[Comparable]] interface, if implemented and will fall back to operator comparison.
| [[isGreaterThanOrEqualTo]] | __other__: T - The value to compare to | T | Creates a guard that tests if a value if greater than or equal to a specified value. Will firstcompare using the [[Comparable]] interface, if implemented and will fall back to operator comparison.Note that objects not implementing [[Comparable]] or custom value representations may return unexpectedresults as JS will revert to comparing string representations.
| [[isIdenticalTo]] | __other__: T - The other value to compare to | T | Creates a guard that tests if a value is identical to another value. This uses the JSstrict equality comparison operator (===) so primitives are compared by value but objectsare compared by reference.
| [[isInstanceOf]] | __constructor__: Constructor<T> - The constructor | T | Creates a guard that tests if a value is an instance of the specified constructor
| [[isInteger]] |  | [[Integer]] | Guard that tests if the value is an integer
| [[isLessThan]] | __other__: T - The value to compare to | T | Creates a guard that tests if a value if less than a specified value. Will firstcompare using the [[Comparable]] interface, if implemented and will fall back to operator comparison.
| [[isLessThanOrEqualTo]] | __other__: T - The value to compare to | T | Creates a guard that tests if a value if less than or equal to a specified value. Will firstcompare using the [[Comparable]] interface, if implemented and will fall back to operator comparison.Note that objects not implementing [[Comparable]] or custom value representations may return unexpectedresults as JS will revert to comparing string representations.
| [[isMatch]] | __regexp__: RegExp - The regular expression | string | Creates a guard that tests if a value is a string that matches the specified RegExp
| [[isNegative]] |  | [[Negative]] | Guard that tests if the value is a negative number
| [[isNegativeInteger]] |  | [[NegativeInteger]] | Guard that tests if the value is a negative integer
| [[isNil]] |  | unknown | Guard that tests if the value is null or undefined
| [[isNonEmptyArray]] |  | unknown[] | Guard that tests if the value is an array that is not empty
| [[isNonEmptyString]] |  | string | Guard that tests if the value is a string that is not empty
| [[isNull]] |  | null | Guard that tests if the value is null
| [[isNumber]] |  | number | Guard that tests if the value is a number
| [[isObject]] |  | object | Guard that tests if the value is any object (and not null)
| [[isPositive]] |  | [[Positive]] | Guard that tests if the value is a positive number
| [[isPositiveInteger]] |  | [[PositiveInteger]] | Guard that tests if the value is a positive integer
| [[isString]] |  | string | Guard that tests if the value is a string
| [[isStringContaining]] | __substring__: string - The substring to check for | string | Creates a guard that tests if a value is a string containing the specified substring
| [[isStringNotContaining]] | __substring__: string - The substring to check for | string | Creates a guard that tests if a value is a string that does not contain the specified substring
| [[isSymbol]] |  | symbol | Guard that tests if the value is a symbol
| [[isUndefined]] |  | undefined | Guard that tests if the value is undefined
<!-- guardrefstop -->