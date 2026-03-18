```ts
function ternaryOperator(
   condition, 
   s1, 
   s2): string;
```

Defined in: [string-utils.ts:114](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/string-utils.ts#L114)

The `ternaryOperator` function returns `s1` if `condition` is true, otherwise it returns `s2`.

## Parameters

### condition

`boolean`

A boolean value that represents the condition to be evaluated. If the condition is true, the function will return s1. If the condition is false, the function will return s2.

### s1

`string`

The parameter `s1` is a string that represents the value to be returned if the condition is true.

### s2

`string`

The parameter `s2` is a string that represents the value to be returned if the `condition` is false.

## Returns

`string`

The ternaryOperator function returns either s2 or s1 based on the value of the condition. If the condition is false, it returns s2. Otherwise, it returns s1.
