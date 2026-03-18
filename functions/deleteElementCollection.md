```ts
function deleteElementCollection<T>(collection, element): T[];
```

Defined in: [collection-utils.ts:62](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/collection-utils.ts#L62)

The `deleteElementCollection` function removes an element from a collection if it exists, otherwise it returns the original collection.

## Type Parameters

### T

`T`

## Parameters

### collection

The `collection` parameter is an array of elements of type `T`, or it can be `undefined` or `null`.

`T`[] | `null` | `undefined`

### element

The `element` parameter represents the element that you want to delete from the `collection`.

`T` | `Readonly`\<`T`\>

## Returns

`T`[]

an array of type T.
