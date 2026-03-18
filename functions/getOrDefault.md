```ts
function getOrDefault<T>(data, defaultValue): T;
```

Defined in: [common-utils.ts:36](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/common-utils.ts#L36)

The `getOrDefault` function returns the provided data if it is not null or undefined, otherwise it returns the provided default value.

## Type Parameters

### T

`T`

## Parameters

### data

`T`

The `data` parameter is the value that you want to check if it is null or undefined.

### defaultValue

`T`

The `defaultValue` parameter is the value that will be returned if the `data` parameter is `null` or `undefined`.

## Returns

`T`

The function `getOrDefault` returns the value of `data` if it is not null or undefined, otherwise it returns the value of `defaultValue`.
