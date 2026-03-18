```ts
function at<T>(collection, index): T | undefined;
```

Defined in: [collection-utils.ts:29](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/collection-utils.ts#L29)

The function `at` returns the element at the specified index in a collection, or undefined if the collection is empty or the index is out of bounds.

## Type Parameters

### T

`T`

## Parameters

### collection

The `collection` parameter is an array of type `T[]`, or it can be `undefined` or `null`. It represents the collection of elements from which we want to retrieve an element at a specific index.

`T`[] | `null` | `undefined`

### index

`number`

The `index` parameter is the position of the element you want to retrieve from the `collection`. It is a number that represents the index of the element in the array.

## Returns

`T` \| `undefined`

the element at the specified index in the collection. If the collection is empty or the index is out of range, it will return undefined.
