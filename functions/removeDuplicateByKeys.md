```ts
function removeDuplicateByKeys<T>(collection, keys): T[];
```

Defined in: [collection-utils.ts:115](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/collection-utils.ts#L115)

The `removeDuplicateByKeys` function removes duplicate elements from a collection based on specified keys.

## Type Parameters

### T

`T`

## Parameters

### collection

The `collection` parameter is an array of objects of type `T`. It can also be `undefined` or `null`.

`T`[] | `null` | `undefined`

### keys

keyof `T`[]

The `keys` parameter is an array of keys that are used to determine uniqueness in the collection. Each element in the array represents a key in the objects of the collection.

## Returns

`T`[]

an array of type T, which is the collection with duplicate elements removed based on the specified keys.
