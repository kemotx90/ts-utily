import {notPresent} from "./common-utils";

/**
 * The function removes fields with null or undefined values from an object.
 * @param {T} value - The `value` parameter is the object from which you want to remove fields that have `null` or `undefined` values.
 * @returns either the input value `T` or `undefined`.
 * @example example of usage: cleaning object before store into DB(JSON type colum)
 */
export const removeNullOrUndefinedFieldsFromObject = <T>(value: T): T | undefined => {
    if (notPresent(value)) return undefined;
    return removeEmptyFields(value);
}

/**
 * The function removes empty fields from a JavaScript object recursively.
 * @param obj - The "obj" type in TypeScript is a type that represents any value. It is often used when the type of a variable or parameter is not known or when dealing with dynamic data. In the context of the `removeEmptyFields` function, the `any` type is used to indicate that the
 * @returns The `removeEmptyFields` function returns the modified object with all empty fields removed.
 */
const removeEmptyFields = (obj: any) => {
    Object.keys(obj).forEach(key => {
        if (obj[key] && typeof obj[key] === "object") {
            if ((Object.keys(obj[key]).length === 0 && obj[key].constructor === Object) || obj[key].length === 0) {
                delete obj[key];
            } else {
                removeEmptyFields(obj[key]);
            }
        } else if (obj[key] === null || obj[key] === undefined) {
            delete obj[key];
        }
    });
    return obj;
};