[ts-utily](README.md) / Exports

# ts-utily

## Table of contents

### Functions

- [addDays](modules.md#adddays)
- [arrayBufferToBase64](modules.md#arraybuffertobase64)
- [at](modules.md#at)
- [capitalize](modules.md#capitalize)
- [capitalizeFully](modules.md#capitalizefully)
- [compare](modules.md#compare)
- [convertArrayBufferToUint8Array](modules.md#convertarraybuffertouint8array)
- [convertArrayToRecord](modules.md#convertarraytorecord)
- [convertIndexSignaturesToMap](modules.md#convertindexsignaturestomap)
- [convertMapToIndexSignatures](modules.md#convertmaptoindexsignatures)
- [convertRecordToArray](modules.md#convertrecordtoarray)
- [createArrayBufferFromString](modules.md#createarraybufferfromstring)
- [createBlobFromBase64AndMimeType](modules.md#createblobfrombase64andmimetype)
- [createBlobFromSourceAndMimeType](modules.md#createblobfromsourceandmimetype)
- [createFileFromBase64AndMimeType](modules.md#createfilefrombase64andmimetype)
- [createUint8ArrayFromBase64](modules.md#createuint8arrayfrombase64)
- [dateWith00Mins](modules.md#datewith00mins)
- [dayBetween](modules.md#daybetween)
- [deleteElementCollection](modules.md#deleteelementcollection)
- [equalsCollection](modules.md#equalscollection)
- [fileIs](modules.md#fileis)
- [findOrDefault](modules.md#findordefault)
- [get](modules.md#get)
- [getDeltaTimeFromTwoDates](modules.md#getdeltatimefromtwodates)
- [getExtensionFromFileName](modules.md#getextensionfromfilename)
- [getExtensionFromMimeType](modules.md#getextensionfrommimetype)
- [getHoursAndMinutesFromDateAsString](modules.md#gethoursandminutesfromdateasstring)
- [getMimeTypeFromExtension](modules.md#getmimetypefromextension)
- [getNextDayOfWeekFromDate](modules.md#getnextdayofweekfromdate)
- [getOrDefault](modules.md#getordefault)
- [getOrDefaultCollection](modules.md#getordefaultcollection)
- [getOrDefaultString](modules.md#getordefaultstring)
- [getTomorrow](modules.md#gettomorrow)
- [hoursBetween](modules.md#hoursbetween)
- [includes](modules.md#includes)
- [instantToDate](modules.md#instanttodate)
- [isAfter](modules.md#isafter)
- [isBefore](modules.md#isbefore)
- [isBetween](modules.md#isbetween)
- [isEmptyCollection](modules.md#isemptycollection)
- [isEmptyString](modules.md#isemptystring)
- [isEqual](modules.md#isequal)
- [isNotEmptyCollection](modules.md#isnotemptycollection)
- [isNotEmptyString](modules.md#isnotemptystring)
- [isNumber](modules.md#isnumber)
- [isString](modules.md#isstring)
- [monthFromDate](modules.md#monthfromdate)
- [notPresent](modules.md#notpresent)
- [parzializeArray](modules.md#parzializearray)
- [parzializeArrayByKeys](modules.md#parzializearraybykeys)
- [percentage](modules.md#percentage)
- [populateTemplate](modules.md#populatetemplate)
- [present](modules.md#present)
- [removeDays](modules.md#removedays)
- [removeDuplicateByKey](modules.md#removeduplicatebykey)
- [removeDuplicateByKeys](modules.md#removeduplicatebykeys)
- [removeNullOrUndefinedFieldsFromObject](modules.md#removenullorundefinedfieldsfromobject)
- [removeWhiteSpace](modules.md#removewhitespace)
- [replaceAll](modules.md#replaceall)
- [sameDate](modules.md#samedate)
- [setTime](modules.md#settime)
- [sortByObjectValues](modules.md#sortbyobjectvalues)
- [sortNumericString](modules.md#sortnumericstring)
- [ternaryOperator](modules.md#ternaryoperator)
- [toBoolean](modules.md#toboolean)
- [toLocalDate](modules.md#tolocaldate)
- [toLocalDateTime](modules.md#tolocaldatetime)
- [toNumber](modules.md#tonumber)
- [typizeBlobFromFileName](modules.md#typizeblobfromfilename)

## Functions

### addDays

▸ **addDays**(`d`, `days?`): `Date`

Adds specified number of days to a given Date object.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `d` | `Date` | `undefined` | The Date object to which days are to be added. |
| `days` | `number` | `1` | The number of days to be added. Defaults to 1 if not provided. |

#### Returns

`Date`

- The updated Date object with additional days.

#### Defined in

[utils/date-utils.ts:89](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/date-utils.ts#L89)

___

### arrayBufferToBase64

▸ **arrayBufferToBase64**(`buffer`): `string`

Converts an ArrayBuffer to a Base64 string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | `Uint8Array` | The ArrayBuffer to convert. |

#### Returns

`string`

- The Base64 string representation of the ArrayBuffer.

#### Defined in

[utils/file-utils.ts:122](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/file-utils.ts#L122)

___

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

[utils/collection-utils.ts:29](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/collection-utils.ts#L29)

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

[utils/string-utils.ts:55](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/string-utils.ts#L55)

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

[utils/string-utils.ts:68](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/string-utils.ts#L68)

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

[utils/string-utils.ts:83](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/string-utils.ts#L83)

___

### convertArrayBufferToUint8Array

▸ **convertArrayBufferToUint8Array**(`arrayBuffer`): `Uint8Array`

Converts an ArrayBuffer to a Uint8Array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayBuffer` | `ArrayBuffer` | The ArrayBuffer to be converted. |

#### Returns

`Uint8Array`

- The converted Uint8Array.

#### Defined in

[utils/file-utils.ts:148](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/file-utils.ts#L148)

___

### convertArrayToRecord

▸ **convertArrayToRecord**\<`T`\>(`array`, `key`): `Record`\<`string`, `T`\>

Converts an array to a record by using the specified key from each element.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of array elements. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to convert. |
| `key` | keyof `T` | The key to use from each element. |

#### Returns

`Record`\<`string`, `T`\>

- The record with keys as the values of the specified key and values as the corresponding elements.

#### Defined in

[utils/conversion-utils.ts:33](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/conversion-utils.ts#L33)

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

[utils/conversion-utils.ts:8](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/conversion-utils.ts#L8)

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

[utils/conversion-utils.ts:20](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/conversion-utils.ts#L20)

___

### convertRecordToArray

▸ **convertRecordToArray**\<`T`, `K`\>(`record`): `T`[]

Converts a record to an array of its values.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `T` | The type of the record values. |
| `K` | extends `PropertyKey` | The type of the record keys. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `record` | `Record`\<`K`, `T`\> | The record to convert. |

#### Returns

`T`[]

- The array containing the values of the record.

#### Defined in

[utils/conversion-utils.ts:51](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/conversion-utils.ts#L51)

___

### createArrayBufferFromString

▸ **createArrayBufferFromString**(`string`): `ArrayBuffer`

Converts a string into an ArrayBuffer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to be converted. |

#### Returns

`ArrayBuffer`

- The converted ArrayBuffer.

#### Defined in

[utils/file-utils.ts:138](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/file-utils.ts#L138)

___

### createBlobFromBase64AndMimeType

▸ **createBlobFromBase64AndMimeType**(`base64`, `MIME_Type`): `Blob`

Create a Blob object from the given base64 string and MIME type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `base64` | `string` | The base64 string. |
| `MIME_Type` | `MimeTypeEnum` | The MIME type of the Blob. |

#### Returns

`Blob`

- The Blob object.

#### Defined in

[utils/file-utils.ts:65](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/file-utils.ts#L65)

___

### createBlobFromSourceAndMimeType

▸ **createBlobFromSourceAndMimeType**(`blobParts`, `MIME_Type`): `Blob`

Creates a Blob object from an array of blob parts and the MIME type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blobParts` | `BlobPart`[] | The array of blob parts to be combined into a Blob object. |
| `MIME_Type` | `MimeTypeEnum` | The MIME type for the Blob object. |

#### Returns

`Blob`

- The Blob object created from the provided blob parts and MIME type.

#### Defined in

[utils/file-utils.ts:76](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/file-utils.ts#L76)

___

### createFileFromBase64AndMimeType

▸ **createFileFromBase64AndMimeType**(`base64`, `MIME_Type`, `fileName`): `File`

Creates a file from a base64 encoded string and MIME type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `base64` | `string` | The base64 encoded string representing the file. |
| `MIME_Type` | `MimeTypeEnum` | The MIME type of the file. |
| `fileName` | `string` | The name of the file. |

#### Returns

`File`

- The created file object.

#### Defined in

[utils/file-utils.ts:88](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/file-utils.ts#L88)

___

### createUint8ArrayFromBase64

▸ **createUint8ArrayFromBase64**(`base64`): `Uint8Array`

Converts a base64 string to a Uint8Array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `base64` | `string` | The base64 string to convert. |

#### Returns

`Uint8Array`

The Uint8Array representing the base64 string.

#### Defined in

[utils/file-utils.ts:48](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/file-utils.ts#L48)

___

### dateWith00Mins

▸ **dateWith00Mins**(`date?`): `Date`

Sets the minutes, seconds, and milliseconds of the given date to 0.
If no date is provided, the current date and time will be used.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date?` | `number` \| `Date` | The date to modify. If not provided, the current date and time will be used. |

#### Returns

`Date`

The modified date.

#### Defined in

[utils/date-utils.ts:223](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/date-utils.ts#L223)

___

### dayBetween

▸ **dayBetween**(`d1`, `d2`): `number`

Calculates the number of days between two dates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `d1` | `Date` | The first date. |
| `d2` | `Date` | The second date. |

#### Returns

`number`

The number of days between the two dates.

#### Defined in

[utils/date-utils.ts:115](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/date-utils.ts#L115)

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

[utils/collection-utils.ts:62](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/collection-utils.ts#L62)

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

[utils/collection-utils.ts:76](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/collection-utils.ts#L76)

___

### fileIs

▸ **fileIs**(`filename`, `mimeType`): `boolean`

Checks if a file matches the specified filename and mimeType.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | The name of the file. |
| `mimeType` | `MimeTypeEnum` | The MIME type to match. |

#### Returns

`boolean`

Returns `true` if the filename matches the MIME type, otherwise `false`.

#### Defined in

[utils/file-utils.ts:110](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/file-utils.ts#L110)

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

[utils/collection-utils.ts:91](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/collection-utils.ts#L91)

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

[utils/collection-utils.ts:40](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/collection-utils.ts#L40)

___

### getDeltaTimeFromTwoDates

▸ **getDeltaTimeFromTwoDates**(`date1`, `date2`): `DeltaDateResult`

Calculates the time difference between two dates and returns the result as an object containing the number of years, months, days, hours, minutes, and seconds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date1` | `number` \| `Date` | The first date. |
| `date2` | `number` \| `Date` | The second date. |

#### Returns

`DeltaDateResult`

- The result object containing the time difference in years, months, days, hours, minutes, and seconds.

#### Defined in

[utils/date-utils.ts:261](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/date-utils.ts#L261)

___

### getExtensionFromFileName

▸ **getExtensionFromFileName**(`fileName`): `undefined` \| `string`

Retrieves the file extension from a file name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | The file name. |

#### Returns

`undefined` \| `string`

- The corresponding file extension.

#### Defined in

[utils/file-utils.ts:20](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/file-utils.ts#L20)

___

### getExtensionFromMimeType

▸ **getExtensionFromMimeType**(`mimeType`): `string`

Retrieves file extension from given MIME type

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mimeType` | `MimeTypeEnum` | The MIME type of the file |

#### Returns

`string`

- The file extension

#### Defined in

[utils/file-utils.ts:99](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/file-utils.ts#L99)

___

### getHoursAndMinutesFromDateAsString

▸ **getHoursAndMinutesFromDateAsString**(`d`, `locales`, `hour?`, `minute?`): ``null`` \| `string`

Converts a given date or number into a string representation of hours and minutes.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `d` | `undefined` \| ``null`` \| `number` \| `Date` | `undefined` | The date or number to convert. |
| `locales` | `LocalesArgument` | `undefined` | The locales argument for the `toLocaleTimeString` method. |
| `hour?` | ``"numeric"`` \| ``"2-digit"`` | `"2-digit"` | The format of the hour: "numeric" for a single digit, "2-digit" for a double digit. Default is "2-digit". |
| `minute?` | ``"numeric"`` \| ``"2-digit"`` | `"2-digit"` | The format of the minute: "numeric" for a single digit, "2-digit" for a double digit. Default is "2-digit". |

#### Returns

``null`` \| `string`

The string representation of the hours and minutes, or null if the input is null or undefined.

#### Defined in

[utils/date-utils.ts:172](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/date-utils.ts#L172)

___

### getMimeTypeFromExtension

▸ **getMimeTypeFromExtension**(`extension`): `string`

Retrieves the MIME type from a file extension.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extension` | `string` | The file extension. |

#### Returns

`string`

- The corresponding MIME type.

#### Defined in

[utils/file-utils.ts:10](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/file-utils.ts#L10)

___

### getNextDayOfWeekFromDate

▸ **getNextDayOfWeekFromDate**(`date`, `dayOfWeek`): `Date`

Gets the next occurrence of a specified day of the week from a given date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `undefined` \| ``null`` \| `number` \| `Date` | The date from which to start searching. If not provided or invalid, the current date will be used. |
| `dayOfWeek` | `DayOfWeek` | The day of the week to find the next occurrence of. |

#### Returns

`Date`

- The next occurrence of the specified day of the week.

#### Defined in

[utils/date-utils.ts:141](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/date-utils.ts#L141)

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

[utils/common-utils.ts:36](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/common-utils.ts#L36)

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

[utils/collection-utils.ts:51](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/collection-utils.ts#L51)

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

[utils/string-utils.ts:40](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/string-utils.ts#L40)

___

### getTomorrow

▸ **getTomorrow**(`d?`): `Date`

Returns tomorrow's date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `d?` | `number` \| `Date` | Optional date to be used as the base. |

#### Returns

`Date`

- Tomorrow's date.

#### Defined in

[utils/date-utils.ts:157](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/date-utils.ts#L157)

___

### hoursBetween

▸ **hoursBetween**(`d1`, `d2`, `withAbs?`): `number`

Calculates the number of hours between two given dates.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `d1` | `Date` | `undefined` | The first date. |
| `d2` | `Date` | `undefined` | The second date. |
| `withAbs?` | `boolean` | `true` | Whether to return the absolute difference or not. |

#### Returns

`number`

The number of hours between the two dates.

#### Defined in

[utils/date-utils.ts:128](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/date-utils.ts#L128)

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

[utils/string-utils.ts:10](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/string-utils.ts#L10)

___

### instantToDate

▸ **instantToDate**(`instant?`): `Date`

Converts the given instant to a Date object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `instant?` | `string` \| `Date` | The instant to convert. If not provided, the current date and time is used. |

#### Returns

`Date`

- The converted Date object.

**`Example`**

```ts
use for convert Instant(like as java object) to javascript date
```

#### Defined in

[utils/date-utils.ts:185](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/date-utils.ts#L185)

___

### isAfter

▸ **isAfter**(`d1`, `d2`, `matchOnlyForYearMonthDay?`): `boolean`

Checks if a given date is after another date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `d1` | `Date` | The first date. |
| `d2` | `Date` | The second date. |
| `matchOnlyForYearMonthDay?` | `boolean` | Optional parameter to match only up to year, month, and day. |

#### Returns

`boolean`

- Returns true if d1 is after d2, otherwise returns false.

#### Defined in

[utils/date-utils.ts:37](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/date-utils.ts#L37)

___

### isBefore

▸ **isBefore**(`d1`, `d2`, `matchOnlyForYearMonthDay?`): `boolean`

Determines if the given date is before the reference date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `d1` | `Date` | The date to compare. |
| `d2` | `Date` | The reference date. |
| `matchOnlyForYearMonthDay?` | `boolean` | Optional flag to indicate if the dates should only match for year, month, and day. Defaults to false. |

#### Returns

`boolean`

- True if d1 is before d2 (or matches only for year, month, and day if specified), otherwise false.

#### Defined in

[utils/date-utils.ts:24](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/date-utils.ts#L24)

___

### isBetween

▸ **isBetween**(`dateToMatch`, `start`, `end`, `matchOnlyForYearMonthDay?`): `boolean`

Checks if a given date falls between a start and end date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dateToMatch` | `Date` | The date to check. |
| `start` | `Date` | The start date. |
| `end` | `Date` | The end date. |
| `matchOnlyForYearMonthDay?` | `boolean` | (Optional) Specifies whether to only consider the year, month, and day when checking the date. Default is false. |

#### Returns

`boolean`

- True if the date falls between the start and end dates, false otherwise.

#### Defined in

[utils/date-utils.ts:49](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/date-utils.ts#L49)

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

[utils/collection-utils.ts:9](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/collection-utils.ts#L9)

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

[utils/string-utils.ts:20](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/string-utils.ts#L20)

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

[utils/common-utils.ts:46](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/common-utils.ts#L46)

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

[utils/collection-utils.ts:19](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/collection-utils.ts#L19)

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

[utils/string-utils.ts:30](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/string-utils.ts#L30)

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

[utils/number-utils.ts:19](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/number-utils.ts#L19)

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

[utils/string-utils.ts:93](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/string-utils.ts#L93)

___

### monthFromDate

▸ **monthFromDate**(`date`, `locales?`, `month?`): `string`

Returns the month from a given date in the specified format.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `date` | `Date` | `undefined` | The date from which to extract the month. |
| `locales?` | `LocalesArgument` | `'default'` | A string representing a BCP 47 language tag, or an array of such strings. |
| `month?` | ``"numeric"`` \| ``"2-digit"`` \| ``"long"`` \| ``"short"`` \| ``"narrow"`` | `"long"` | The format in which to return the month. Possible values are: - "numeric": Returns the month as a digit (e.g. 1, 2, 3, ... 12). - "2-digit": Returns the month as a two-digit number with leading zero (e.g. 01, 02, 03, ... 12). - "long": Returns the full name of the month (e.g. January, February, ... December). - "short": Returns the abbreviated name of the month (e.g. Jan, Feb, ... Dec). - "narrow": Returns the narrow name of the month (e.g. J, F, ... D). - undefined or not provided: Returns the default long format. |

#### Returns

`string`

The month from the given date in the specified format.

#### Defined in

[utils/date-utils.ts:212](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/date-utils.ts#L212)

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

[utils/common-utils.ts:26](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/common-utils.ts#L26)

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

[utils/collection-utils.ts:133](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/collection-utils.ts#L133)

___

### parzializeArrayByKeys

▸ **parzializeArrayByKeys**\<`T`\>(`array`, `keys`): `undefined` \| `T`[][]

The function `parzializeArrayByKeys` takes an array of objects and an array of keys, and returns a partially grouped array based on the specified keys.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `undefined` \| ``null`` \| `T`[] | The `array` parameter is an array of objects of type `T`, or it can be `undefined` or `null`. |
| `keys` | keyof `T`[] | An array of keys that represent the properties of the objects in the array. |

#### Returns

`undefined` \| `T`[][]

The function `parzializeArrayByKeys` returns an array of arrays of type `T`, or `undefined`.

#### Defined in

[utils/collection-utils.ts:150](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/collection-utils.ts#L150)

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

[utils/number-utils.ts:33](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/number-utils.ts#L33)

___

### populateTemplate

▸ **populateTemplate**(`string`, `placeholders`): `undefined` \| `string`

Replaces placeholders in a string with corresponding values from an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `undefined` \| `string` | The string containing placeholders. |
| `placeholders` | `any`[] | An array of objects containing key-value pairs, where the key represents a placeholder and the value is the replacement value. |

#### Returns

`undefined` \| `string`

- The resulting string with replaced placeholders, or undefined if the input string is undefined.

**`Example`**

```ts
populateTemplate('Replace my text {myReplacePlaceholder}', [{name: 'Valery', age: 20, myReplacePlaceholder: 'test this'}, {name: 'Marcus', age: 21}]) => Replace my text test this
```

#### Defined in

[utils/string-utils.ts:153](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/string-utils.ts#L153)

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

[utils/common-utils.ts:15](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/common-utils.ts#L15)

___

### removeDays

▸ **removeDays**(`d`, `days?`): `Date`

Removes the specified number of days from a given date.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `d` | `Date` | `undefined` | The date to remove days from. |
| `days` | `number` | `1` | The number of days to remove. Defaults to 1 if not provided. |

#### Returns

`Date`

- The new date after removing the specified number of days.

#### Defined in

[utils/date-utils.ts:102](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/date-utils.ts#L102)

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

[utils/collection-utils.ts:103](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/collection-utils.ts#L103)

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

[utils/collection-utils.ts:115](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/collection-utils.ts#L115)

___

### removeNullOrUndefinedFieldsFromObject

▸ **removeNullOrUndefinedFieldsFromObject**\<`T`\>(`value`): `undefined` \| `T`

The function removes fields with null or undefined values from an object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The `value` parameter is the object from which you want to remove fields that have `null` or `undefined` values. |

#### Returns

`undefined` \| `T`

either the input value `T` or `undefined`.

**`Example`**

```ts
example of usage: cleaning object before store into DB(JSON type colum)
```

#### Defined in

[utils/object-utils.ts:9](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/object-utils.ts#L9)

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

[utils/string-utils.ts:102](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/string-utils.ts#L102)

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

[utils/string-utils.ts:125](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/string-utils.ts#L125)

___

### sameDate

▸ **sameDate**(`d1`, `d2`): `boolean`

Checks if two dates are the same (year, month, and day).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `d1` | `Date` | The first date to compare. |
| `d2` | `Date` | The second date to compare. |

#### Returns

`boolean`

- True if the two dates are the same, false otherwise.

#### Defined in

[utils/date-utils.ts:12](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/date-utils.ts#L12)

___

### setTime

▸ **setTime**(`date`, `time`): `undefined` \| `Date`

Sets the time portion of a given date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `undefined` \| ``null`` \| `number` \| `Date` | The date object or timestamp to modify. |
| `time` | `string` | The time string to set in the format 'HH:MM'. |

#### Returns

`undefined` \| `Date`

- The modified date object or null if the input date is not present.

**`Throws`**

- Throws an error if the given date or time is not valid.

#### Defined in

[utils/date-utils.ts:241](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/date-utils.ts#L241)

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

[utils/sort-utils.ts:32](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/sort-utils.ts#L32)

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

[utils/string-utils.ts:135](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/string-utils.ts#L135)

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

[utils/string-utils.ts:114](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/string-utils.ts#L114)

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

[utils/boolean-utils.ts:9](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/boolean-utils.ts#L9)

___

### toLocalDate

▸ **toLocalDate**(`date`): `string`

Converts a Date object to a string representation of the local date.
If the input date is null or undefined, an empty string is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `undefined` \| ``null`` \| `Date` | The date object to convert. |

#### Returns

`string`

The string representation of the local date.

#### Defined in

[utils/date-utils.ts:78](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/date-utils.ts#L78)

___

### toLocalDateTime

▸ **toLocalDateTime**(`date`, `nowAsDefault?`): `string`

Converts a given `Date`, `number`, `null`, or `undefined` value to a localized string representation of the date and time in "YYYY-MM-DDTHH:MM" format.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `date` | `undefined` \| ``null`` \| `number` \| `Date` | `undefined` | The value to be converted. |
| `nowAsDefault?` | `boolean` | `false` | If `true` and `date` is not provided, the current date and time will be used as the default value. |

#### Returns

`string`

The localized string representation of the date and time. Returns 'N.d.' if `date` is `null` and `nowAsDefault` is `false`.

#### Defined in

[utils/date-utils.ts:60](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/date-utils.ts#L60)

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

[utils/number-utils.ts:9](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/number-utils.ts#L9)

___

### typizeBlobFromFileName

▸ **typizeBlobFromFileName**(`blob`, `fileName`): `undefined` \| `Blob`

Converts a Blob to a specific Blob type based on the file name extension.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blob` | `Blob` | The Blob instance to be typed. |
| `fileName` | `string` | The name of the file associated with the Blob. |

#### Returns

`undefined` \| `Blob`

- A new Blob instance of the specified type, or undefined if unsupported extension or invalid filename.

#### Defined in

[utils/file-utils.ts:33](https://github.com/kemotx90/ts-utily/blob/38d9efc3ccfe9be06d9eeb3f51836fc950c38af5/src/utils/file-utils.ts#L33)
