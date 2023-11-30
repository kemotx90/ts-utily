import {present} from "./common-utils";
import {NestedKeyOf} from "../model/nested-key-of";

const getNestedObject = (nestedObj: any, path: string): any => {
    let pathArr = path.split('.');
    pathArr = pathArr.length > 0 ? pathArr : [path];
    return pathArr.reduce((obj, key) => (present(obj, obj[key])) ? obj[key] : undefined, nestedObj);
}

/**
 * The function "compare" compares two values (numbers or strings) and returns -1 if the first value is smaller, 1 if the first value is larger, and 0 if they are equal, based on the specified sorting order.
 * @param {number | string} a - The parameter "a" can be either a number or a string.
 * @param {number | string} b - The parameter `b` is a variable that can hold a value of either type `number` or type `string`.
 * @param {boolean} isAsc - isAsc is a boolean parameter that determines the sorting order. If isAsc is true, the function will sort the values in ascending order. If isAsc is false, the function will sort the values in descending order.
 * @returns a number that represents the comparison between the two input values (a and b). The returned value will be negative if a is less than b, positive if a is greater than b, and 0 if a is equal to b. The returned value is then multiplied by 1 or -1 based on the value of the isAsc parameter. If isAsc is true, the
 */
const compare = (a: number | string, b: number | string, isAsc: boolean) => {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

/**
 * The function `sortByObjectValues` sorts an array of objects based on the values of specified nested keys in ascending or descending order.
 * @param {(NestedKeyOf<T>)[]} keys - An array of keys that represent the nested properties of the objects being sorted.
 * @param {boolean} isAsc - The `isAsc` parameter is a boolean value that determines whether the sorting order should be ascending (`true`) or descending (`false`).
 * @returns The function `sortByObjectValues` returns a function that takes two objects `a` and `b` of type `T` and returns a number.
 *
 * @example
 * example of usage: [{name: 'Amanda', age:18}, {name: 'Victor', age:18}].sort(sortByObjectValues(['name', 'age'], true))
 * @example
 * array.sort(sortByObjectValues(['ele1', 'ele2' 'eleN',...], false))
 */
export function sortByObjectValues<T extends object>(keys: (NestedKeyOf<T>)[], isAsc: boolean): (a: T, b: T) => number {
    return function (a: T, b: T) {
        const firstKey: NestedKeyOf<T> = keys[0];

        const valA = getNestedObject(a, firstKey.toString());
        const valB = getNestedObject(b, firstKey.toString());

        if (valA === valB) {
            if (keys.length === 1) {
                return compare(valA, valB, isAsc);
            }
            return sortByObjectValues<T>(keys.slice(1), true)(a, b);
        }
        return compare(valA, valB, isAsc);
    };
}