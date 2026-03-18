```ts
function isEqual<T>(...objects): boolean;
```

Defined in: [common-utils.ts:46](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/common-utils.ts#L46)

The `isEqual` function checks if all the given objects are equal by comparing their JSON representations.

## Type Parameters

### T

`T`

## Parameters

### objects

...`T`[]

The `objects` parameter is a rest parameter that allows you to pass in multiple objects of type `T`. The rest parameter syntax (`...objects`) allows you to pass any number of arguments, which will be collected into an array called `objects`.

## Returns

`boolean`

The function `isEqual` returns a boolean value.
