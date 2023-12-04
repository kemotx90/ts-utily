import {isEqual, notPresent} from "./common-utils";


/**
 * The function `isEmptyCollection` checks if a collection is empty or not.
 * @param {T[] | undefined | null} collection - The `collection` parameter is a generic type `T[]` which represents an array of elements of type `T`. It can also be `undefined` or `null`.
 * @returns a boolean value indicating whether the collection is empty or not.
 */
export const isEmptyCollection = <T>(collection: T[] | undefined | null): boolean => {
    if (notPresent(collection)) return true;
    else return collection?.length === 0;
}

/**
 * The function `isNotEmptyCollection` checks if a collection is not empty.
 * @param {T[] | undefined | null} collection - The `collection` parameter is of type `T[] | undefined | null`. This means it can accept an array of type `T`, or it can be `undefined` or `null`.
 * @returns The function isNotEmpty is returning a boolean value.
 */
export const isNotEmptyCollection = <T>(collection: T[] | undefined | null): boolean => {
    return !isEmptyCollection(collection);
}

/**
 * The function `at` returns the element at the specified index in a collection, or undefined if the collection is empty or the index is out of bounds.
 * @param {T[] | undefined | null} collection - The `collection` parameter is an array of type `T[]`, or it can be `undefined` or `null`. It represents the collection of elements from which we want to retrieve an element at a specific index.
 * @param {number} index - The `index` parameter is the position of the element you want to retrieve from the `collection`. It is a number that represents the index of the element in the array.
 * @returns the element at the specified index in the collection. If the collection is empty or the index is out of range, it will return undefined.
 */
export const at = <T>(collection: T[] | undefined | null, index: number): T | undefined => {
    if (isEmptyCollection(collection)) return undefined;
    if ((collection!.length - 1) < index) return undefined;
    return collection!.at(index);
}

/**
 * The `get` function returns the input collection if it is not empty, otherwise it returns an empty array.
 * @param {T[] | undefined | null} collection - The `collection` parameter is of type `T[] | undefined | null`. This means it can accept an array of type `T`, or it can be `undefined` or `null`.
 * @returns an array of type T.
 */
export const get = <T>(collection: T[] | undefined | null): T[] => {
    if (isEmptyCollection(collection)) return [];
    else return collection!;
}

/**
 * The `getOrDefaultCollection` function returns the provided collection if it is not empty, otherwise it returns the default list.
 * @param {T[] | undefined | null} collection - The `collection` parameter is a variable that represents an array of elements of type `T`, or it can be `undefined` or `null`.
 * @param {T[]} defaultList - The `defaultList` parameter is an array of type `T[]`. It is the list that will be returned if the `collection` parameter is empty or undefined.
 * @returns an array of type T.
 */
export const getOrDefaultCollection = <T>(collection: T[] | undefined | null, defaultList: T[]): T[] => {
    if (isEmptyCollection(collection)) return get(defaultList);
    else return collection!;
}

/**
 * The `deleteElementCollection` function removes an element from a collection if it exists, otherwise it returns the original collection.
 * @param {T[] | undefined | null} collection - The `collection` parameter is an array of elements of type `T`, or it can be `undefined` or `null`.
 * @param {T | Readonly<T>} element - The `element` parameter represents the element that you want to delete from the `collection`.
 * @returns an array of type T.
 */
export const deleteElementCollection = <T>(collection: T[] | undefined | null, element: T | Readonly<T>): T[] => {
    if (isEmptyCollection(collection)) return get(collection);

    const indexToRemove: number = collection!.indexOf(element, 0);
    if (indexToRemove > -1) return [...collection!].filter((_elem: T, index: number) => index !== indexToRemove);
    else return get(collection);
}

/**
 * The function checks if two collections are equal by comparing their lengths and elements.
 * @param {T[] | undefined | null} collection1 - The `collection1` parameter is an array of type `T`, or it can be `undefined` or `null`.
 * @param {T[] | undefined | null} collection2 - The `collection2` parameter is a generic array (`T[]`) or can be `undefined` or `null`. It represents the second collection that you want to compare with `collection1`.
 * @returns a boolean value.
 */
export const equalsCollection = <T>(collection1: T[] | undefined | null, collection2: T[] | undefined | null): boolean => {
    if (isEmptyCollection(collection1) && isEmptyCollection(collection2)) return true;
    else if (isEmptyCollection(collection1) && isNotEmptyCollection(collection2)) return false;
    else if (isNotEmptyCollection(collection1) && isEmptyCollection(collection2)) return false;
    else if (collection1?.length !== collection2?.length) return false;
    else return !collection1!.some((el: T, index: number) => el !== collection2![index]);
}

/**
 * The `findOrDefault` function searches for an element in a collection and returns it if found, otherwise it returns a default element.
 * @param {T[] | undefined | null} collection - The `collection` parameter is an array of elements of type `T`, or it can be `undefined` or `null`. It represents the collection of elements in which we want to find a specific element.
 * @param {T | Readonly<T>} element - The `element` parameter represents the element that you want to find in the `collection`.
 * @param {T | Readonly<T>} defaultElement - The `defaultElement` parameter is the value that will be returned if the `element` is not found in the `collection`.
 * @returns a value of type T.
 */
export const findOrDefault = <T>(collection: T[] | undefined | null, element: T | Readonly<T>, defaultElement: T | Readonly<T>): T => {
    const result: T | undefined = collection?.find(el => isEqual(el, element));
    if (notPresent(result)) return defaultElement;
    else return result!;
}

/**
 * The function `removeDuplicatesByKey` removes duplicate elements from a collection based on a specified key.
 * @param {T[] | undefined | null} collection - The `collection` parameter is an array of objects of type `T`. It can also be `undefined` or `null`.
 * @param [key] - The `key` parameter is an optional parameter that specifies the property of the objects in the `collection` array that should be used as the key for removing duplicates. If `key` is not provided, the entire objects in the `collection` array will be compared for duplicates.
 * @returns The function `rimuoviDuplicatiByKey` returns an array of type `T[]`.
 */
export const removeDuplicateByKey = <T>(collection: T[] | undefined | null, key?: keyof T): T[] => {
    if (isEmptyCollection(collection)) return get(collection);
    else if (!key) return collection!;
    else return [...new Map<string, T>(collection!.map(item => [`${item[key]}`, item])).values()];
}

/**
 * The `removeDuplicateByKeys` function removes duplicate elements from a collection based on specified keys.
 * @param {T[] | undefined | null} collection - The `collection` parameter is an array of objects of type `T`. It can also be `undefined` or `null`.
 * @param keys - The `keys` parameter is an array of keys that are used to determine uniqueness in the collection. Each element in the array represents a key in the objects of the collection.
 * @returns an array of type T, which is the collection with duplicate elements removed based on the specified keys.
 */
export const removeDuplicateByKeys = <T>(collection: T[] | undefined | null, keys: Array<keyof T>): T[] => {
    if (isEmptyCollection(collection)) return get(collection);
    else if (isEmptyCollection(keys)) return collection!;

    return Object.values(
        collection!.reduce((a: any, c: T) => {
            const compositeKey: any = keys.map(el => c[el]).join('|');
            a[compositeKey] = c;
            return a
        }, {}));
}

/**
 * The function `parzializeArray` takes an array and a section size as input and returns an array of arrays, where each subarray contains a section of the original array.
 * @param {T[] | undefined | null} array - The `array` parameter is an array of elements of type `T`, or it can be `undefined` or `null`.
 * @param {number} section - The parameter "section" represents the size of each section or chunk that the array will be divided into.
 * @returns an array of arrays of type T, or undefined.
 */
export const parzializeArray = <T>(array: T[] | undefined | null, section: number): T[][] | undefined => {
    if (isEmptyCollection(array)) return undefined;

    const parzializedArray: Array<T[]> = [];
    for (let i: number = 0; i < array!.length; i += section) {
        parzializedArray.push(array!.slice(i, i + section));
    }
    return parzializedArray;
}