import {notPresent} from "./common-utils";


/**
 * The function checks if a given string contains another given string, ignoring case sensitivity.
 * @param {string | undefined | null} string1 - A string that can be undefined or null.
 * @param {string | undefined | null} string2 - The `string2` parameter is a string that represents the substring that we want to check if it is present in `string1`.
 * @returns The function `includes` returns a boolean value.
 */
export const includes = (string1: string | undefined | null, string2: string | undefined | null): boolean => {
    if (notPresent(string1, string2)) return false;
    else return string1!.toLowerCase().includes(string2!);
}

/**
 * The function checks if a string is empty, including cases where the string is undefined or null.
 * @param {string | undefined | null} string - The `string` parameter is of type `string | undefined | null`, which means it can accept a value of type `string`, `undefined`, or `null`.
 * @returns The function `isEmpty` returns a boolean value.
 */
export const isEmptyString = (string: string | undefined | null): boolean => {
    if (notPresent(string)) return true;
    else return string?.trim().length === 0;
}

/**
 * The function `isNotEmptyString` checks if a string is not empty.
 * @param {string | undefined | null} string - The parameter "string" is of type string and can also be undefined or null.
 * @returns The function isNotEmpty is returning a boolean value.
 */
export const isNotEmptyString = (string: string | undefined | null): boolean => {
    return !isEmptyString(string);
}

/**
 * The `getOrDefaultString` function returns a string value if it is not empty, otherwise it returns a default value.
 * @param {string | undefined | null} string - The `string` parameter is a string value that can be either a valid string, `undefined`, or `null`.
 * @param {string} [defaultValue] - The `defaultValue` parameter is a string that specifies the value to return if the `string` parameter is empty, undefined, or null. If no `defaultValue` is provided, it defaults to an empty string ('').
 * @returns The function `getOrDefault` returns a string value.
 */
export const getOrDefaultString = (string: string | undefined | null, defaultValue: string = ''): string => {
    try {
        if (isEmptyString(string?.trim())) return defaultValue;
        else return string!;
    } catch (e) {
        console.error(e);
        return defaultValue;
    }
}

/**
 * The `capitalize` function takes a string as input and returns the same string with the first letter of each word capitalized.
 * @param {string | undefined | null} str - The `str` parameter is a string that may be `undefined` or `null`.
 * @returns The `capitalize` function returns a string.
 */
export const capitalize = (str: string | undefined | null): string => {
    const splitStr: string[] = getOrDefaultString(str).toLowerCase().split(' ');
    for (let i: number = 0; i < 1; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

/**
 * The `capitalizeFully` function takes a string as input and returns a new string with each word capitalized.
 * @param {string | undefined | null} str - The `str` parameter is a string that can also be `undefined` or `null`.
 * @returns The function `capitalizeFully` returns a string.
 */
export const capitalizeFully = (str: string | undefined | null): string => {
    if (isEmptyString(str)) return getOrDefaultString(str);

    const words = getOrDefaultString(str).split(" ");
    return words.map(word => {
        return capitalize(word);
    }).join(" ");
}

/**
 * The function "compare" compares two strings case-insensitively and returns -1 if the first string is smaller, 1 if the second string is smaller.
 * @param {string} s1 - The parameter `s1` is a string that represents the first string to be compared.
 * @param {string} s2 - The parameter `s2` is a string that represents the second string to be compared.
 * @returns a number. If `s1` is lexicographically less than `s2` (ignoring case), it returns -1. Otherwise, it returns 1.
 */
export const compare = (s1: string, s2: string): number => {
    if (s1.toLowerCase() < s2.toLowerCase()) return -1;
    else return 1;
}

/**
 * The function `isString` checks if an object is a string or an instance of the String class.
 * @param {T} obj - The `obj` parameter is a generic type `T`, which means it can be any type.
 * @returns a boolean value indicating whether the input object is a string or not.
 */
export const isString = <T>(obj: T) => {
    return typeof obj === 'string' || obj instanceof String;
}

/**
 * The `removeWhiteSpace` function removes all white spaces from a given string.
 * @param {string | undefined | null} str - The `str` parameter is a string that can be either a valid string value, `undefined`, or `null`.
 * @returns a string with all whitespace characters removed.
 */
export const removeWhiteSpace = (str: string | undefined | null): string => {
    if (isEmptyString(str)) return '';
    else return str!.replace(/\s/g, "");
}

/**
 * The `ternaryOperator` function returns `s1` if `condition` is true, otherwise it returns `s2`.
 * @param {boolean} condition - A boolean value that represents the condition to be evaluated. If the condition is true, the function will return s1. If the condition is false, the function will return s2.
 * @param {string} s1 - The parameter `s1` is a string that represents the value to be returned if the condition is true.
 * @param {string} s2 - The parameter `s2` is a string that represents the value to be returned if the `condition` is false.
 * @returns The ternaryOperator function returns either s2 or s1 based on the value of the condition. If the condition is false, it returns s2. Otherwise, it returns s1.
 */
export const ternaryOperator = (condition: boolean, s1: string, s2: string) => {
    return !condition ? s2 : s1;
}

/**
 * The `replaceAll` function replaces all occurrences of a specified string in a given string with another specified string.
 * @param {string} originalString - The original string that you want to perform the replacement on.
 * @param {string} occurrenceToReplace - The `occurrenceToReplace` parameter is a string that represents the occurrence or pattern that you want to replace in the `originalString`.
 * @param {string} replaceWith - The `replaceWith` parameter is the string that will replace all occurrences of `occurrenceToReplace` in the `originalString`.
 * @returns The function `replaceAll` returns a string.
 */
export const replaceAll = (originalString: string, occurrenceToReplace: string, replaceWith: string): string => {
    return getOrDefaultString(originalString).replace(new RegExp(getOrDefaultString(occurrenceToReplace), 'g'), getOrDefaultString(replaceWith));
}

/**
 * The function `sortNumericString` compares two numeric strings and returns a number indicating their relative order.
 * @param {string} a - The parameter "a" is a string representing the first numeric string to be compared.
 * @param {string} b - The parameter "b" is a string representing the second value to be compared.
 * @returns a number.
 */
export const sortNumericString = (a: string, b: string): number => {
    return collator.compare(a, b);
}

/**
 *  The code `const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});`
 *  is creating a new instance of the `Intl.Collator` object. for sort numerif string
 */
const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});

/**
 * Replaces placeholders in a string with corresponding values from an array.
 *
 * @param {string | undefined} string - The string containing placeholders.
 * @param {any[]} placeholders - An array of objects containing key-value pairs, where the key represents a placeholder and the value is the replacement value.
 * @returns {string | undefined} - The resulting string with replaced placeholders, or undefined if the input string is undefined.
 * @example populateTemplate('Replace my text {myReplacePlaceholder}', [{name: 'Valery', age: 20, myReplacePlaceholder: 'test this'}, {name: 'Marcus', age: 21}]) => Replace my text test this
 */
export const populateTemplate = (string: string | undefined, placeholders: any[]): string | undefined => {
    const placeholderRegex: RegExp = /\{(\w+?)}/g;
    return string?.replace(placeholderRegex, (_, name) => {
        const element: any = placeholders?.find(el => el[name]);
        return element ? element[name] : '';
    });
}