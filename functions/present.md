```ts
function present<T>(...args): boolean;
```

Defined in: [common-utils.ts:15](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/common-utils.ts#L15)

The `present` function checks if all the arguments passed to it are not null or undefined.

## Type Parameters

### T

`T`

## Parameters

### args

...`T`[]

args is a rest parameter of type T[]. It allows the function to accept any number of arguments of type T.

## Returns

`boolean`

a boolean value.
