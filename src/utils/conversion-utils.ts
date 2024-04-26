/**
 * The function converts an object with index signatures to a Map.
 * @param {{
 *     [p: string]: V
 * } | undefined} indexSignatures - An object that contains index signatures, where the keys are strings and the values can be of any type.
 * @returns a `Map<string, V>` or `undefined`.
 */
export const convertIndexSignaturesToMap = <V>(indexSignatures: {
    [p: string]: V
} | undefined): Map<string, V> | undefined => {
    if (!indexSignatures) return undefined;
    else return new Map(Object.entries(JSON.parse(JSON.stringify(indexSignatures))));
}

/**
 * The function converts a Map object to an object with index signatures in TypeScript.
 * @param {Map<string, V> | undefined} map - A Map object that contains key-value pairs.
 * @returns an object with index signatures, where the keys are strings and the values are of type V. If the input map is undefined, the function returns undefined.
 */
export const convertMapToIndexSignatures = <V>(map: Map<string, V> | undefined): { [p: string]: V } | undefined => {
    if (!map) return undefined;
    else return Object.fromEntries(map);
}

/**
 * Converts an array to a record by using the specified key from each element.
 *
 * @template T - The type of array elements.
 * @param {T[]} array - The array to convert.
 * @param {keyof T} key - The key to use from each element.
 * @returns {Record<string, T>} - The record with keys as the values of the specified key and values as the corresponding elements.
 */
export const convertArrayToRecord = <T>(array: T[], key: keyof T): Record<string, T> => {
    return array.reduce((acc: Record<string, T>, item: T) => {
        const field = `${item[key]}`;
        if (field) {
            acc[field] = item;
        }
        return acc;
    }, {} as Record<string, T>);
}

/**
 * Converts a record to an array of its values.
 *
 * @param {Record<K, T>} record - The record to convert.
 * @template T - The type of the record values.
 * @template K - The type of the record keys.
 * @returns {Array<T>} - The array containing the values of the record.
 */
export const convertRecordToArray = <T, K extends PropertyKey>(record: Record<K, T>): Array<T> => {
    if (!record) return [];
    return Object.values(record);
}