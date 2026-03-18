```ts
function get<T>(collection): T[];
```

Defined in: [collection-utils.ts:40](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/collection-utils.ts#L40)

The `get` function returns the input collection if it is not empty, otherwise it returns an empty array.

## Type Parameters

### T

`T`

## Parameters

### collection

The `collection` parameter is of type `T[] | undefined | null`. This means it can accept an array of type `T`, or it can be `undefined` or `null`.

`T`[] | `null` | `undefined`

## Returns

`T`[]

an array of type T.
