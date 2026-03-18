```ts
function toBoolean(value): boolean;
```

Defined in: [boolean-utils.ts:16](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/boolean-utils.ts#L16)

Converts the input value to a boolean representation.

The function interprets the following values as `true`:
- String values "true" (case insensitive), "1", and "y" (case insensitive)
- The number `1`

All other values, including undefined or null, are interpreted as `false`.

## Parameters

### value

The input value to convert to a boolean.

`string` | `0` | `1`

## Returns

`boolean`

Returns the boolean representation of the input value.
