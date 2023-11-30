/**
 * The function checks if a value is either null or undefined.
 * @param {T} val - The `val` parameter is a generic type `T` which represents the value that needs to be checked for null or undefined.
 * @returns a boolean value indicating whether the input value is either undefined or null.
 */
const isNullOrUndefined = <T>(val: T) => {
    return val === undefined || val === null;
}

/**
 * The `present` function checks if all the arguments passed to it are not null or undefined.
 * @param {T[]} args - args is a rest parameter of type T[]. It allows the function to accept any number of arguments of type T.
 * @returns a boolean value.
 */
export const present = <T>(...args: T[]): boolean => {
    if (isNullOrUndefined(args)) return false;
    const params = args.reduce((a: T[], v: T) => a.concat(v), []);
    return params.every((obj: any) => !isNullOrUndefined(obj));
}

/**
 * The function `notPresent` checks if any of the arguments passed to it are not present.
 * @param {T[]} args - The `args` parameter is a rest parameter of type `T[]`, which means it can accept any number of arguments of type `T`.
 * @returns a boolean value.
 */
export const notPresent = <T>(...args: T[]): boolean => {
    return !present(args);
}

/**
 * The `getOrDefault` function returns the provided data if it is not null or undefined, otherwise it returns the provided default value.
 * @param {T} data - The `data` parameter is the value that you want to check if it is null or undefined.
 * @param {T} defaultValue - The `defaultValue` parameter is the value that will be returned if the `data` parameter is `null` or `undefined`.
 * @returns The function `getOrDefault` returns the value of `data` if it is not null or undefined, otherwise it returns the value of `defaultValue`.
 */
export const getOrDefault = <T>(data: T, defaultValue: T): T => {
    if (isNullOrUndefined(data)) return defaultValue;
    else return data;
}

/**
 * The `isEqual` function checks if all the given objects are equal by comparing their JSON representations.
 * @param {T[]} objects - The `objects` parameter is a rest parameter that allows you to pass in multiple objects of type `T`. The rest parameter syntax (`...objects`) allows you to pass any number of arguments, which will be collected into an array called `objects`.
 * @returns The function `isEqual` returns a boolean value.
 */
export const isEqual = <T>(...objects: T[]): boolean => {
    if (notPresent(objects)) return false;
    else return objects.every(obj => JSON.stringify(obj) === JSON.stringify(objects[0]));
}