import {present} from "./common-utils";
import {PercentageOptions} from "../model/percentage-options";


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
 * Calculates the percentage of a value with respect to a total value.
 *
 * @param {number} value - The part value to calculate the percentage for.
 * @param {number} totalValue - The total value that represents 100%.
 * @param {PercentageOptions} [options] - Optional settings for the calculation.
 * @param {number} [options.decimals=0] - The number of decimal places to round the result to.
 * @param {number} [options.toZero=0] - The fallback value to return if either the value and totalValue are 0.
 * @param {'round' | 'ceil' | 'floor'} [options.approximate='round'] - The approximation method to use for rounding.
 * @returns {number} The calculated percentage, rounded to the specified number of decimals.
 */
export const percentage = (value: number, totalValue: number, options?: PercentageOptions): number => {
    const decimals: number = options?.decimals ?? 0;
    const factor = Math.pow(10, decimals);

    if (value === 0 && totalValue === 0) return options?.toZero ?? 0;
    return Math[options?.approximate ?? 'round']((value / totalValue) * 100 * factor) / factor;
}