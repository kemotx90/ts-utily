```ts
function parzializeArrayByKeys<T>(array, keys): T[][] | undefined;
```

Defined in: [collection-utils.ts:150](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/collection-utils.ts#L150)

The function `parzializeArrayByKeys` takes an array of objects and an array of keys, and returns a partially grouped array based on the specified keys.

## Type Parameters

### T

`T`

## Parameters

### array

The `array` parameter is an array of objects of type `T`, or it can be `undefined` or `null`.

`T`[] | `null` | `undefined`

### keys

keyof `T`[]

An array of keys that represent the properties of the objects in the array.

## Returns

`T`[][] \| `undefined`

The function `parzializeArrayByKeys` returns an array of arrays of type `T`, or `undefined`.
