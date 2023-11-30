import {present} from "./common-utils";


/**
 * The `toNumber` function converts a value to a number, returning 0 if the value is not a valid number.
 * @param {T} value - The `value` parameter is of type `T`, which means it can be any type. It represents the value that needs to be converted to a number.
 * @returns a number.
 */
export const toNumber = <T>(value: T): number => {
    if (isNaN(Number(value))) return 0;
    else return Number(value);
}

/**
 * The function `isNumber` checks if a value is a number in TypeScript.
 * @param {T} value - The `value` parameter is the value that you want to check if it is a number. It can be of any type `T`.
 * @returns a boolean value.
 */
export const isNumber = <T>(value: T): boolean => {
    try {
        return present(value) && !isNaN(Number(value));
    } catch (e) {
        return false;
    }
}

/**
 * The function calculates the percentage of a value in relation to a total value.
 * @param {number} value - The value parameter represents the specific value that you want to calculate the percentage of. It is a number that you want to find the percentage of in relation to the totalValue.
 * @param {number} totalValue - The total value represents the maximum value or the total amount that you want to calculate the percentage of.
 * @returns a number, which is the calculated percentage value.
 */
export const percentage = (value: number, totalValue: number): number => {
    return Math.round((value / totalValue) * 100);
}