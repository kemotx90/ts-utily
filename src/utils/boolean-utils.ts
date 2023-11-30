import {notPresent} from "./common-utils";


/**
 * The function `toBoolean` converts a string value to a boolean value, considering various possible representations of true like as 'true', '1' or 'y'.
 * @param {string} value - The `value` parameter is a string that represents a boolean value.
 * @returns a boolean value.
 */
export const toBoolean = (value: string): boolean => {
    if (notPresent(value)) return false;
    else return value.trim().toLowerCase() === 'true' || value.trim() === '1' || value.trim().toLowerCase() === 'y';
}