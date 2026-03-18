```ts
function equalsCollection<T>(collection1, collection2): boolean;
```

Defined in: [collection-utils.ts:76](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/collection-utils.ts#L76)

The function checks if two collections are equal by comparing their lengths and elements.

## Type Parameters

### T

`T`

## Parameters

### collection1

The `collection1` parameter is an array of type `T`, or it can be `undefined` or `null`.

`T`[] | `null` | `undefined`

### collection2

The `collection2` parameter is a generic array (`T[]`) or can be `undefined` or `null`. It represents the second collection that you want to compare with `collection1`.

`T`[] | `null` | `undefined`

## Returns

`boolean`

a boolean value.
