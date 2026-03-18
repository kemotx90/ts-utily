```ts
function getOrDefaultCollection<T>(collection, defaultList): T[];
```

Defined in: [collection-utils.ts:51](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/collection-utils.ts#L51)

The `getOrDefaultCollection` function returns the provided collection if it is not empty, otherwise it returns the default list.

## Type Parameters

### T

`T`

## Parameters

### collection

The `collection` parameter is a variable that represents an array of elements of type `T`, or it can be `undefined` or `null`.

`T`[] | `null` | `undefined`

### defaultList

`T`[]

The `defaultList` parameter is an array of type `T[]`. It is the list that will be returned if the `collection` parameter is empty or undefined.

## Returns

`T`[]

an array of type T.
