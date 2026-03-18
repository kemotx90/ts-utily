```ts
function compare(s1, s2): number;
```

Defined in: [string-utils.ts:83](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/string-utils.ts#L83)

The function "compare" compares two strings case-insensitively and returns -1 if the first string is smaller, 1 if the second string is smaller.

## Parameters

### s1

`string`

The parameter `s1` is a string that represents the first string to be compared.

### s2

`string`

The parameter `s2` is a string that represents the second string to be compared.

## Returns

`number`

a number. If `s1` is lexicographically less than `s2` (ignoring case), it returns -1. Otherwise, it returns 1.
