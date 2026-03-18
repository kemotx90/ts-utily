```ts
function isString<T>(obj): obj is T & string | T & String;
```

Defined in: [string-utils.ts:93](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/string-utils.ts#L93)

The function `isString` checks if an object is a string or an instance of the String class.

## Type Parameters

### T

`T`

## Parameters

### obj

`T`

The `obj` parameter is a generic type `T`, which means it can be any type.

## Returns

obj is T & string \| T & String

a boolean value indicating whether the input object is a string or not.
