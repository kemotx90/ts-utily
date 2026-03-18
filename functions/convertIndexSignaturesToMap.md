```ts
function convertIndexSignaturesToMap<V>(indexSignatures): Map<string, V> | undefined;
```

Defined in: [conversion-utils.ts:8](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/conversion-utils.ts#L8)

The function converts an object with index signatures to a Map.

## Type Parameters

### V

`V`

## Parameters

### indexSignatures

An object that contains index signatures, where the keys are strings and the values can be of any type.

\{
\[`p`: `string`\]: `V`;
\} | `undefined`

## Returns

`Map`\<`string`, `V`\> \| `undefined`

a `Map<string, V>` or `undefined`.
