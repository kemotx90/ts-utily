[ts-utily](README.md) / Exports

# ts-utily

## Table of contents

### Functions

- [at](modules.md#at)
- [capitalize](modules.md#capitalize)
- [capitalizeFully](modules.md#capitalizefully)
- [compare](modules.md#compare)
- [convertIndexSignaturesToMap](modules.md#convertindexsignaturestomap)
- [convertMapToIndexSignatures](modules.md#convertmaptoindexsignatures)
- [deleteElementCollection](modules.md#deleteelementcollection)
- [equalsCollection](modules.md#equalscollection)
- [findOrDefault](modules.md#findordefault)
- [get](modules.md#get)
- [getOrDefault](modules.md#getordefault)
- [getOrDefaultCollection](modules.md#getordefaultcollection)
- [getOrDefaultString](modules.md#getordefaultstring)
- [includes](modules.md#includes)
- [isEmptyCollection](modules.md#isemptycollection)
- [isEmptyString](modules.md#isemptystring)
- [isEqual](modules.md#isequal)
- [isNotEmptyCollection](modules.md#isnotemptycollection)
- [isNotEmptyString](modules.md#isnotemptystring)
- [isNumber](modules.md#isnumber)
- [isString](modules.md#isstring)
- [notPresent](modules.md#notpresent)
- [parzializeArray](modules.md#parzializearray)
- [percentage](modules.md#percentage)
- [present](modules.md#present)
- [removeDuplicateByKey](modules.md#removeduplicatebykey)
- [removeDuplicateByKeys](modules.md#removeduplicatebykeys)
- [removeWhiteSpace](modules.md#removewhitespace)
- [replaceAll](modules.md#replaceall)
- [sortByObjectValues](modules.md#sortbyobjectvalues)
- [sortNumericString](modules.md#sortnumericstring)
- [ternaryOperator](modules.md#ternaryoperator)
- [toBoolean](modules.md#toboolean)
- [toNumber](modules.md#tonumber)

## Functions

### at

▸ **at**\<`T`\>(`collection`, `index`): `undefined` \| `T`

The function `at` returns the element at the specified index in a collection, or undefined if the collection is empty or the index is out of bounds.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `undefined` \| ``null`` \| `T`[] | The `collection` parameter is an array of type `T[]`, or it can be `undefined` or `null`. It represents the collection of elements from which we want to retrieve an element at a specific index. |
| `index` | `number` | The `index` parameter is the position of the element you want to retrieve from the `collection`. It is a number that represents the index of the element in the array. |

#### Returns

`undefined` \| `T`

the element at the specified index in the collection. If the collection is empty or the index is out of range, it will return undefined.

#### Defined in

[utils/collection-utils.ts:29](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/collection-utils.ts#L29)

___

### capitalize

▸ **capitalize**(`str`): `string`

The `capitalize` function takes a string as input and returns the same string with the first letter of each word capitalized.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `undefined` \| ``null`` \| `string` | The `str` parameter is a string that may be `undefined` or `null`. |

#### Returns

`string`

The `capitalize` function returns a string.

#### Defined in

[utils/string-utils.ts:55](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/string-utils.ts#L55)

___

### capitalizeFully

▸ **capitalizeFully**(`str`): `string`

The `capitalizeFully` function takes a string as input and returns a new string with each word capitalized.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `undefined` \| ``null`` \| `string` | The `str` parameter is a string that can also be `undefined` or `null`. |

#### Returns

`string`

The function `capitalizeFully` returns a string.

#### Defined in

[utils/string-utils.ts:68](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/string-utils.ts#L68)

___

### compare

▸ **compare**(`s1`, `s2`): `number`

The function "compare" compares two strings case-insensitively and returns -1 if the first string is smaller, 1 if the second string is smaller.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s1` | `string` | The parameter `s1` is a string that represents the first string to be compared. |
| `s2` | `string` | The parameter `s2` is a string that represents the second string to be compared. |

#### Returns

`number`

a number. If `s1` is lexicographically less than `s2` (ignoring case), it returns -1. Otherwise, it returns 1.

#### Defined in

[utils/string-utils.ts:83](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/string-utils.ts#L83)

___

### convertIndexSignaturesToMap

▸ **convertIndexSignaturesToMap**\<`V`\>(`indexSignatures`): `undefined` \| `Map`\<`string`, `V`\>

The function converts an object with index signatures to a Map.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `indexSignatures` | `undefined` \| \{ `[p: string]`: `V`;  } | An object that contains index signatures, where the keys are strings and the values can be of any type. |

#### Returns

`undefined` \| `Map`\<`string`, `V`\>

a `Map<string, V>` or `undefined`.

#### Defined in

[utils/conversion-utils.ts:8](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/conversion-utils.ts#L8)

___

### convertMapToIndexSignatures

▸ **convertMapToIndexSignatures**\<`V`\>(`map`): `undefined` \| \{ `[p: string]`: `V`;  }

The function converts a Map object to an object with index signatures in TypeScript.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | `undefined` \| `Map`\<`string`, `V`\> | A Map object that contains key-value pairs. |

#### Returns

`undefined` \| \{ `[p: string]`: `V`;  }

an object with index signatures, where the keys are strings and the values are of type V. If the input map is undefined, the function returns undefined.

#### Defined in

[utils/conversion-utils.ts:20](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/conversion-utils.ts#L20)

___

### deleteElementCollection

▸ **deleteElementCollection**\<`T`\>(`collection`, `element`): `T`[]

The `deleteElementCollection` function removes an element from a collection if it exists, otherwise it returns the original collection.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `undefined` \| ``null`` \| `T`[] | The `collection` parameter is an array of elements of type `T`, or it can be `undefined` or `null`. |
| `element` | `T` \| `Readonly`\<`T`\> | The `element` parameter represents the element that you want to delete from the `collection`. |

#### Returns

`T`[]

an array of type T.

#### Defined in

[utils/collection-utils.ts:62](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/collection-utils.ts#L62)

___

### equalsCollection

▸ **equalsCollection**\<`T`\>(`collection1`, `collection2`): `boolean`

The function checks if two collections are equal by comparing their lengths and elements.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection1` | `undefined` \| ``null`` \| `T`[] | The `collection1` parameter is an array of type `T`, or it can be `undefined` or `null`. |
| `collection2` | `undefined` \| ``null`` \| `T`[] | The `collection2` parameter is a generic array (`T[]`) or can be `undefined` or `null`. It represents the second collection that you want to compare with `collection1`. |

#### Returns

`boolean`

a boolean value.

#### Defined in

[utils/collection-utils.ts:76](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/collection-utils.ts#L76)

___

### findOrDefault

▸ **findOrDefault**\<`T`\>(`collection`, `element`, `defaultElement`): `T`

The `findOrDefault` function searches for an element in a collection and returns it if found, otherwise it returns a default element.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `undefined` \| ``null`` \| `T`[] | The `collection` parameter is an array of elements of type `T`, or it can be `undefined` or `null`. It represents the collection of elements in which we want to find a specific element. |
| `element` | `T` \| `Readonly`\<`T`\> | The `element` parameter represents the element that you want to find in the `collection`. |
| `defaultElement` | `T` \| `Readonly`\<`T`\> | The `defaultElement` parameter is the value that will be returned if the `element` is not found in the `collection`. |

#### Returns

`T`

a value of type T.

#### Defined in

[utils/collection-utils.ts:91](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/collection-utils.ts#L91)

___

### get

▸ **get**\<`T`\>(`collection`): `T`[]

The `get` function returns the input collection if it is not empty, otherwise it returns an empty array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `undefined` \| ``null`` \| `T`[] | The `collection` parameter is of type `T[] \| undefined \| null`. This means it can accept an array of type `T`, or it can be `undefined` or `null`. |

#### Returns

`T`[]

an array of type T.

#### Defined in

[utils/collection-utils.ts:40](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/collection-utils.ts#L40)

___

### getOrDefault

▸ **getOrDefault**\<`T`\>(`data`, `defaultValue`): `T`

The `getOrDefault` function returns the provided data if it is not null or undefined, otherwise it returns the provided default value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `T` | The `data` parameter is the value that you want to check if it is null or undefined. |
| `defaultValue` | `T` | The `defaultValue` parameter is the value that will be returned if the `data` parameter is `null` or `undefined`. |

#### Returns

`T`

The function `getOrDefault` returns the value of `data` if it is not null or undefined, otherwise it returns the value of `defaultValue`.

#### Defined in

[utils/common-utils.ts:36](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/common-utils.ts#L36)

___

### getOrDefaultCollection

▸ **getOrDefaultCollection**\<`T`\>(`collection`, `defaultList`): `T`[]

The `getOrDefaultCollection` function returns the provided collection if it is not empty, otherwise it returns the default list.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `undefined` \| ``null`` \| `T`[] | The `collection` parameter is a variable that represents an array of elements of type `T`, or it can be `undefined` or `null`. |
| `defaultList` | `T`[] | The `defaultList` parameter is an array of type `T[]`. It is the list that will be returned if the `collection` parameter is empty or undefined. |

#### Returns

`T`[]

an array of type T.

#### Defined in

[utils/collection-utils.ts:51](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/collection-utils.ts#L51)

___

### getOrDefaultString

▸ **getOrDefaultString**(`string`, `defaultValue?`): `string`

The `getOrDefaultString` function returns a string value if it is not empty, otherwise it returns a default value.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `string` | `undefined` \| ``null`` \| `string` | `undefined` | The `string` parameter is a string value that can be either a valid string, `undefined`, or `null`. |
| `defaultValue?` | `string` | `''` | The `defaultValue` parameter is a string that specifies the value to return if the `string` parameter is empty, undefined, or null. If no `defaultValue` is provided, it defaults to an empty string (''). |

#### Returns

`string`

The function `getOrDefault` returns a string value.

#### Defined in

[utils/string-utils.ts:40](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/string-utils.ts#L40)

___

### includes

▸ **includes**(`string1`, `string2`): `boolean`

The function checks if a given string contains another given string, ignoring case sensitivity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string1` | `undefined` \| ``null`` \| `string` | A string that can be undefined or null. |
| `string2` | `undefined` \| ``null`` \| `string` | The `string2` parameter is a string that represents the substring that we want to check if it is present in `string1`. |

#### Returns

`boolean`

The function `includes` returns a boolean value.

#### Defined in

[utils/string-utils.ts:10](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/string-utils.ts#L10)

___

### isEmptyCollection

▸ **isEmptyCollection**\<`T`\>(`collection`): `boolean`

The function `isEmptyCollection` checks if a collection is empty or not.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `undefined` \| ``null`` \| `T`[] | The `collection` parameter is a generic type `T[]` which represents an array of elements of type `T`. It can also be `undefined` or `null`. |

#### Returns

`boolean`

a boolean value indicating whether the collection is empty or not.

#### Defined in

[utils/collection-utils.ts:9](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/collection-utils.ts#L9)

___

### isEmptyString

▸ **isEmptyString**(`string`): `boolean`

The function checks if a string is empty, including cases where the string is undefined or null.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `undefined` \| ``null`` \| `string` | The `string` parameter is of type `string \| undefined \| null`, which means it can accept a value of type `string`, `undefined`, or `null`. |

#### Returns

`boolean`

The function `isEmpty` returns a boolean value.

#### Defined in

[utils/string-utils.ts:20](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/string-utils.ts#L20)

___

### isEqual

▸ **isEqual**\<`T`\>(`...objects`): `boolean`

The `isEqual` function checks if all the given objects are equal by comparing their JSON representations.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...objects` | `T`[] | The `objects` parameter is a rest parameter that allows you to pass in multiple objects of type `T`. The rest parameter syntax (`...objects`) allows you to pass any number of arguments, which will be collected into an array called `objects`. |

#### Returns

`boolean`

The function `isEqual` returns a boolean value.

#### Defined in

[utils/common-utils.ts:46](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/common-utils.ts#L46)

___

### isNotEmptyCollection

▸ **isNotEmptyCollection**\<`T`\>(`collection`): `boolean`

The function `isNotEmptyCollection` checks if a collection is not empty.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `undefined` \| ``null`` \| `T`[] | The `collection` parameter is of type `T[] \| undefined \| null`. This means it can accept an array of type `T`, or it can be `undefined` or `null`. |

#### Returns

`boolean`

The function isNotEmpty is returning a boolean value.

#### Defined in

[utils/collection-utils.ts:19](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/collection-utils.ts#L19)

___

### isNotEmptyString

▸ **isNotEmptyString**(`string`): `boolean`

The function `isNotEmptyString` checks if a string is not empty.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `undefined` \| ``null`` \| `string` | The parameter "string" is of type string and can also be undefined or null. |

#### Returns

`boolean`

The function isNotEmpty is returning a boolean value.

#### Defined in

[utils/string-utils.ts:30](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/string-utils.ts#L30)

___

### isNumber

▸ **isNumber**\<`T`\>(`value`): `boolean`

The function `isNumber` checks if a value is a number in TypeScript.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The `value` parameter is the value that you want to check if it is a number. It can be of any type `T`. |

#### Returns

`boolean`

a boolean value.

#### Defined in

[utils/number-utils.ts:19](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/number-utils.ts#L19)

___

### isString

▸ **isString**\<`T`\>(`obj`): `boolean`

The function `isString` checks if an object is a string or an instance of the String class.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | The `obj` parameter is a generic type `T`, which means it can be any type. |

#### Returns

`boolean`

a boolean value indicating whether the input object is a string or not.

#### Defined in

[utils/string-utils.ts:93](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/string-utils.ts#L93)

___

### notPresent

▸ **notPresent**\<`T`\>(`...args`): `boolean`

The function `notPresent` checks if any of the arguments passed to it are not present.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...args` | `T`[] | The `args` parameter is a rest parameter of type `T[]`, which means it can accept any number of arguments of type `T`. |

#### Returns

`boolean`

a boolean value.

#### Defined in

[utils/common-utils.ts:26](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/common-utils.ts#L26)

___

### parzializeArray

▸ **parzializeArray**\<`T`\>(`array`, `section`): `undefined` \| `T`[][]

The function `parzializeArray` takes an array and a section size as input and returns an array of arrays, where each subarray contains a section of the original array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `undefined` \| ``null`` \| `T`[] | The `array` parameter is an array of elements of type `T`, or it can be `undefined` or `null`. |
| `section` | `number` | The parameter "section" represents the size of each section or chunk that the array will be divided into. |

#### Returns

`undefined` \| `T`[][]

an array of arrays of type T, or undefined.

#### Defined in

[utils/collection-utils.ts:133](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/collection-utils.ts#L133)

___

### percentage

▸ **percentage**(`value`, `totalValue`): `number`

The function calculates the percentage of a value in relation to a total value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The value parameter represents the specific value that you want to calculate the percentage of. It is a number that you want to find the percentage of in relation to the totalValue. |
| `totalValue` | `number` | The total value represents the maximum value or the total amount that you want to calculate the percentage of. |

#### Returns

`number`

a number, which is the calculated percentage value.

#### Defined in

[utils/number-utils.ts:33](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/number-utils.ts#L33)

___

### present

▸ **present**\<`T`\>(`...args`): `boolean`

The `present` function checks if all the arguments passed to it are not null or undefined.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...args` | `T`[] | args is a rest parameter of type T[]. It allows the function to accept any number of arguments of type T. |

#### Returns

`boolean`

a boolean value.

#### Defined in

[utils/common-utils.ts:15](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/common-utils.ts#L15)

___

### removeDuplicateByKey

▸ **removeDuplicateByKey**\<`T`\>(`collection`, `key?`): `T`[]

The function `removeDuplicatesByKey` removes duplicate elements from a collection based on a specified key.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `undefined` \| ``null`` \| `T`[] | The `collection` parameter is an array of objects of type `T`. It can also be `undefined` or `null`. |
| `key?` | keyof `T` | The `key` parameter is an optional parameter that specifies the property of the objects in the `collection` array that should be used as the key for removing duplicates. If `key` is not provided, the entire objects in the `collection` array will be compared for duplicates. |

#### Returns

`T`[]

The function `rimuoviDuplicatiByKey` returns an array of type `T[]`.

#### Defined in

[utils/collection-utils.ts:103](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/collection-utils.ts#L103)

___

### removeDuplicateByKeys

▸ **removeDuplicateByKeys**\<`T`\>(`collection`, `keys`): `T`[]

The `removeDuplicateByKeys` function removes duplicate elements from a collection based on specified keys.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `undefined` \| ``null`` \| `T`[] | The `collection` parameter is an array of objects of type `T`. It can also be `undefined` or `null`. |
| `keys` | keyof `T`[] | The `keys` parameter is an array of keys that are used to determine uniqueness in the collection. Each element in the array represents a key in the objects of the collection. |

#### Returns

`T`[]

an array of type T, which is the collection with duplicate elements removed based on the specified keys.

#### Defined in

[utils/collection-utils.ts:115](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/collection-utils.ts#L115)

___

### removeWhiteSpace

▸ **removeWhiteSpace**(`str`): `string`

The `removeWhiteSpace` function removes all white spaces from a given string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `undefined` \| ``null`` \| `string` | The `str` parameter is a string that can be either a valid string value, `undefined`, or `null`. |

#### Returns

`string`

a string with all whitespace characters removed.

#### Defined in

[utils/string-utils.ts:102](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/string-utils.ts#L102)

___

### replaceAll

▸ **replaceAll**(`originalString`, `occurrenceToReplace`, `replaceWith`): `string`

The `replaceAll` function replaces all occurrences of a specified string in a given string with another specified string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `originalString` | `string` | The original string that you want to perform the replacement on. |
| `occurrenceToReplace` | `string` | The `occurrenceToReplace` parameter is a string that represents the occurrence or pattern that you want to replace in the `originalString`. |
| `replaceWith` | `string` | The `replaceWith` parameter is the string that will replace all occurrences of `occurrenceToReplace` in the `originalString`. |

#### Returns

`string`

The function `replaceAll` returns a string.

#### Defined in

[utils/string-utils.ts:125](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/string-utils.ts#L125)

___

### sortByObjectValues

▸ **sortByObjectValues**\<`T`\>(`keys`, `isAsc`): (`a`: `T`, `b`: `T`) => `number`

The function `sortByObjectValues` sorts an array of objects based on the values of specified nested keys in ascending or descending order.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys` | `NestedKeyOf`\<`T`\>[] | An array of keys that represent the nested properties of the objects being sorted. |
| `isAsc` | `boolean` | The `isAsc` parameter is a boolean value that determines whether the sorting order should be ascending (`true`) or descending (`false`). |

#### Returns

`fn`

The function `sortByObjectValues` returns a function that takes two objects `a` and `b` of type `T` and returns a number.

▸ (`a`, `b`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `b` | `T` |

##### Returns

`number`

**`Example`**

```ts
example of usage: [{name: 'Amanda', age:18}, {name: 'Victor', age:18}].sort(sortByObjectValues(['name', 'age'], true))
```

**`Example`**

```ts
array.sort(sortByObjectValues(['ele1', 'ele2' 'eleN',...], false))
```

#### Defined in

[utils/sort-utils.ts:32](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/sort-utils.ts#L32)

___

### sortNumericString

▸ **sortNumericString**(`a`, `b`): `number`

The function `sortNumericString` compares two numeric strings and returns a number indicating their relative order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | The parameter "a" is a string representing the first numeric string to be compared. |
| `b` | `string` | The parameter "b" is a string representing the second value to be compared. |

#### Returns

`number`

a number.

#### Defined in

[utils/string-utils.ts:135](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/string-utils.ts#L135)

___

### ternaryOperator

▸ **ternaryOperator**(`condition`, `s1`, `s2`): `string`

The `ternaryOperator` function returns `s1` if `condition` is true, otherwise it returns `s2`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `condition` | `boolean` | A boolean value that represents the condition to be evaluated. If the condition is true, the function will return s1. If the condition is false, the function will return s2. |
| `s1` | `string` | The parameter `s1` is a string that represents the value to be returned if the condition is true. |
| `s2` | `string` | The parameter `s2` is a string that represents the value to be returned if the `condition` is false. |

#### Returns

`string`

The ternaryOperator function returns either s2 or s1 based on the value of the condition. If the condition is false, it returns s2. Otherwise, it returns s1.

#### Defined in

[utils/string-utils.ts:114](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/string-utils.ts#L114)

___

### toBoolean

▸ **toBoolean**(`value`): `boolean`

The function `toBoolean` converts a string value to a boolean value, considering various possible representations of true like as 'true', '1' or 'y'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The `value` parameter is a string that represents a boolean value. |

#### Returns

`boolean`

a boolean value.

#### Defined in

[utils/boolean-utils.ts:9](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/boolean-utils.ts#L9)

___

### toNumber

▸ **toNumber**\<`T`\>(`value`): `number`

The `toNumber` function converts a value to a number, returning 0 if the value is not a valid number.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The `value` parameter is of type `T`, which means it can be any type. It represents the value that needs to be converted to a number. |

#### Returns

`number`

a number.

#### Defined in

[utils/number-utils.ts:9](https://github.com/kemotx90/ts-utily/blob/927e22a/src/utils/number-utils.ts#L9)
