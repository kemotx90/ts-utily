```ts
function removeNullOrUndefinedFieldsFromObject<T>(value): T | undefined;
```

Defined in: [object-utils.ts:9](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/object-utils.ts#L9)

The function removes fields with null or undefined values from an object.

## Type Parameters

### T

`T`

## Parameters

### value

`T`

The `value` parameter is the object from which you want to remove fields that have `null` or `undefined` values.

## Returns

`T` \| `undefined`

either the input value `T` or `undefined`.

## Example

```ts
example of usage: cleaning object before store into DB(JSON type colum)
```
