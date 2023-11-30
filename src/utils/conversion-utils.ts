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