```ts
function getOrDefaultString(string, defaultValue?): string;
```

Defined in: [string-utils.ts:40](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/string-utils.ts#L40)

The `getOrDefaultString` function returns a string value if it is not empty, otherwise it returns a default value.

## Parameters

### string

The `string` parameter is a string value that can be either a valid string, `undefined`, or `null`.

`string` | `null` | `undefined`

### defaultValue?

`string` = `''`

The `defaultValue` parameter is a string that specifies the value to return if the `string` parameter is empty, undefined, or null. If no `defaultValue` is provided, it defaults to an empty string ('').

## Returns

`string`

The function `getOrDefault` returns a string value.
