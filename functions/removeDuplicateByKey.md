```ts
function removeDuplicateByKey<T>(collection, key?): T[];
```

Defined in: [collection-utils.ts:103](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/collection-utils.ts#L103)

The function `removeDuplicatesByKey` removes duplicate elements from a collection based on a specified key.

## Type Parameters

### T

`T`

## Parameters

### collection

The `collection` parameter is an array of objects of type `T`. It can also be `undefined` or `null`.

`T`[] | `null` | `undefined`

### key?

keyof `T`

The `key` parameter is an optional parameter that specifies the property of the objects in the `collection` array that should be used as the key for removing duplicates. If `key` is not provided, the entire objects in the `collection` array will be compared for duplicates.

## Returns

`T`[]

The function `rimuoviDuplicatiByKey` returns an array of type `T[]`.
