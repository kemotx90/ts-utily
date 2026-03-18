```ts
function findOrDefault<T>(
   collection, 
   element, 
   defaultElement): T;
```

Defined in: [collection-utils.ts:91](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/collection-utils.ts#L91)

The `findOrDefault` function searches for an element in a collection and returns it if found, otherwise it returns a default element.

## Type Parameters

### T

`T`

## Parameters

### collection

The `collection` parameter is an array of elements of type `T`, or it can be `undefined` or `null`. It represents the collection of elements in which we want to find a specific element.

`T`[] | `null` | `undefined`

### element

The `element` parameter represents the element that you want to find in the `collection`.

`T` | `Readonly`\<`T`\>

### defaultElement

The `defaultElement` parameter is the value that will be returned if the `element` is not found in the `collection`.

`T` | `Readonly`\<`T`\>

## Returns

`T`

a value of type T.
