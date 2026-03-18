import {notPresent} from "./common-utils";


/**
 * Converts the input value to a boolean representation.
 *
 * The function interprets the following values as `true`:
 * - String values "true" (case insensitive), "1", and "y" (case insensitive)
 * - The number `1`
 *
 * All other values, including undefined or null, are interpreted as `false`.
 *
 * @param {string | 1 | 0} value - The input value to convert to a boolean.
 * @returns {boolean} Returns the boolean representation of the input value.
 */
export const toBoolean = (value: string | 1 | 0): boolean => {
    if (notPresent(value)) return false;
    else if (typeof value === 'number') return Boolean(value);
    else return value.trim().toLowerCase() === 'true' || value.trim() === '1' || value.trim().toLowerCase() === 'y';
}