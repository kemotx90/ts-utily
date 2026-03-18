```ts
function convertRecordToArray<T, K>(record): T[];
```

Defined in: [conversion-utils.ts:51](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/conversion-utils.ts#L51)

Converts a record to an array of its values.

## Type Parameters

### T

`T`

The type of the record values.

### K

`K` *extends* `PropertyKey`

The type of the record keys.

## Parameters

### record

`Record`\<`K`, `T`\>

The record to convert.

## Returns

`T`[]

- The array containing the values of the record.
