```ts
function populateTemplate(string, placeholders): string | undefined;
```

Defined in: [string-utils.ts:153](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/string-utils.ts#L153)

Replaces placeholders in a string with corresponding values from an array.

## Parameters

### string

The string containing placeholders.

`string` | `undefined`

### placeholders

`any`[]

An array of objects containing key-value pairs, where the key represents a placeholder and the value is the replacement value.

## Returns

`string` \| `undefined`

- The resulting string with replaced placeholders, or undefined if the input string is undefined.

## Example

```ts
const obj = populateTemplate('Replace my text {myReplacePlaceholder}', [{name: 'Valery', age: 20, myReplacePlaceholder: 'test this'}, {name: 'Marcus', age: 21}]); //Replace my text test this
```
