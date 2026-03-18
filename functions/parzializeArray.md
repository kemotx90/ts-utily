```ts
function parzializeArray<T>(array, section): T[][] | undefined;
```

Defined in: [collection-utils.ts:133](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/collection-utils.ts#L133)

The function `parzializeArray` takes an array and a section size as input and returns an array of arrays, where each subarray contains a section of the original array.

## Type Parameters

### T

`T`

## Parameters

### array

The `array` parameter is an array of elements of type `T`, or it can be `undefined` or `null`.

`T`[] | `null` | `undefined`

### section

`number`

The parameter "section" represents the size of each section or chunk that the array will be divided into.

## Returns

`T`[][] \| `undefined`

an array of arrays of type T, or undefined.
