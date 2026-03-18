```ts
function sortByObjectValues<T>(keys, isAsc): (a, b) => number;
```

Defined in: [sort-utils.ts:32](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/sort-utils.ts#L32)

The function `sortByObjectValues` sorts an array of objects based on the values of specified nested keys in ascending or descending order.

## Type Parameters

### T

`T` *extends* `object`

## Parameters

### keys

`NestedKeyOf`\<`T`\>[]

An array of keys that represent the nested properties of the objects being sorted.

### isAsc

`boolean`

The `isAsc` parameter is a boolean value that determines whether the sorting order should be ascending (`true`) or descending (`false`).

## Returns

The function `sortByObjectValues` returns a function that takes two objects `a` and `b` of type `T` and returns a number.

```ts
(a, b): number;
```

### Parameters

#### a

`T`

#### b

`T`

### Returns

`number`

## Examples

```ts
const sortedArray = [{name: 'Amanda', age:18}, {name: 'Victor', age:18}].sort(sortByObjectValues(['name', 'age'], true));
```

```ts
array.sort(sortByObjectValues(['ele1', 'ele2' 'eleN',...], false))
```
