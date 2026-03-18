```ts
function convertArrayToRecord<T>(array, key): Record<string, T>;
```

Defined in: [conversion-utils.ts:33](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/conversion-utils.ts#L33)

Converts an array to a record by using the specified key from each element.

## Type Parameters

### T

`T`

The type of array elements.

## Parameters

### array

`T`[]

The array to convert.

### key

keyof `T`

The key to use from each element.

## Returns

`Record`\<`string`, `T`\>

- The record with keys as the values of the specified key and values as the corresponding elements.
