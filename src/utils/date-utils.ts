import {notPresent} from "./common-utils";
import {DayOfWeek} from "../model/day-of-week-enum";

/**
 * Checks if two dates are the same (year, month, and day).
 *
 * @param {Date} d1 - The first date to compare.
 * @param {Date} d2 - The second date to compare.
 * @returns {boolean} - True if the two dates are the same, false otherwise.
 */
export const sameDate = (d1: Date, d2: Date): boolean => {
    return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
}

/**
 * Determines if the given date is before the reference date.
 *
 * @param {Date} d1 - The date to compare.
 * @param {Date} d2 - The reference date.
 * @param {boolean} [matchOnlyForYearMonthDay] - Optional flag to indicate if the dates should only match for year, month, and day. Defaults to false.
 * @returns {boolean} - True if d1 is before d2 (or matches only for year, month, and day if specified), otherwise false.
 */
export const isBefore = (d1: Date, d2: Date, matchOnlyForYearMonthDay?: boolean): boolean => {
    if (notPresent(d1) || notPresent(d2)) return false;
    else return d1.getTime() < d2.getTime() || (!!matchOnlyForYearMonthDay && sameDate(d1, d2));
}

/**
 * Checks if a given date is after another date.
 *
 * @param {Date} d1 - The first date.
 * @param {Date} d2 - The second date.
 * @param {boolean} [matchOnlyForYearMonthDay] - Optional parameter to match only up to year, month, and day.
 * @returns {boolean} - Returns true if d1 is after d2, otherwise returns false.
 */
export const isAfter = (d1: Date, d2: Date, matchOnlyForYearMonthDay?: boolean): boolean => {
    return !isBefore(d1, d2, matchOnlyForYearMonthDay);
}

/**
 * Checks if a given date falls between a start and end date.
 * @param {Date} dateToMatch - The date to check.
 * @param {Date} start - The start date.
 * @param {Date} end - The end date.
 * @param {boolean} [matchOnlyForYearMonthDay] - (Optional) Specifies whether to only consider the year, month, and day when checking the date. Default is false.
 * @returns {boolean} - True if the date falls between the start and end dates, false otherwise.
 */
export const isBetween = (dateToMatch: Date, start: Date, end: Date, matchOnlyForYearMonthDay?: boolean): boolean => {
    return isBefore(start, dateToMatch, matchOnlyForYearMonthDay) && isBefore(dateToMatch, end, matchOnlyForYearMonthDay);
}

/**
 * Converts a given `Date`, `number`, `null`, or `undefined` value to a localized string representation of the date and time in "YYYY-MM-DDTHH:MM" format.
 *
 * @param {Date | number | null | undefined} date - The value to be converted.
 * @param {boolean} [nowAsDefault=false] - If `true` and `date` is not provided, the current date and time will be used as the default value.
 * @returns {string} The localized string representation of the date and time. Returns 'N.d.' if `date` is `null` and `nowAsDefault` is `false`.
 */
export const toLocalDateTime = (date: Date | number | null | undefined, nowAsDefault: boolean = false): string => {
    if (notPresent(date)) {
        if (nowAsDefault) date = new Date();
        else return 'N.d.';
    }

    if (!(date instanceof Date)) date = new Date(date!);
    const tzoffset = date?.getTimezoneOffset() * 60000; //offset timezon in millisecondi
    return (new Date(date.getTime() - tzoffset)).toISOString().slice(0, 16);
}

/**
 * Converts a Date object to a string representation of the local date.
 * If the input date is null or undefined, an empty string is returned.
 *
 * @param {Date | null | undefined} date - The date object to convert.
 * @returns {string} The string representation of the local date.
 */
export const toLocalDate = (date: Date | null | undefined): string => {
    return toLocalDateTime(date).slice(0, 10);
}

/**
 * Adds specified number of days to a given Date object.
 *
 * @param {Date} d - The Date object to which days are to be added.
 * @param {number} days - The number of days to be added. Defaults to 1 if not provided.
 * @returns {Date} - The updated Date object with additional days.
 */
export const addDays = (d: Date, days: number = 1): Date => {
    const newDate: Date = new Date(d);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}

/**
 * Removes the specified number of days from a given date.
 *
 * @param {Date} d - The date to remove days from.
 * @param {number} days - The number of days to remove. Defaults to 1 if not provided.
 * @returns {Date} - The new date after removing the specified number of days.
 */
export const removeDays = (d: Date, days: number = 1): Date => {
    const newDate: Date = new Date(d);
    newDate.setDate(newDate.getDate() - days);
    return newDate;
}

/**
 * Calculates the number of days between two dates.
 *
 * @param {Date} d1 - The first date.
 * @param {Date} d2 - The second date.
 * @returns {number} The number of days between the two dates.
 */
export const dayBetween = (d1: Date, d2: Date): number => {
    const difference: number = d1.getTime() - d2.getTime();
    return Math.abs(Math.ceil(difference / (1000 * 3600 * 24)));
}

/**
 * Calculates the number of hours between two given dates.
 *
 * @param {Date} d1 - The first date.
 * @param {Date} d2 - The second date.
 * @param {boolean} [withAbs=true] - Whether to return the absolute difference or not.
 * @returns {number} The number of hours between the two dates.
 */
export const hoursBetween = (d1: Date, d2: Date, withAbs: boolean = true): number => {
    if (notPresent(d1) || notPresent(d2)) return 0;
    const difference: number = (d1.getTime() - d2.getTime()) / 36e5;
    return withAbs ? Math.abs(difference) : difference;
}

/**
 * Gets the next occurrence of a specified day of the week from a given date.
 *
 * @param {Date | number | null | undefined} date - The date from which to start searching. If not provided or invalid, the current date will be used.
 * @param {DayOfWeek} dayOfWeek - The day of the week to find the next occurrence of.
 * @returns {Date} - The next occurrence of the specified day of the week.
 */
export const getNextDayOfWeekFromDate = (date: Date | number | null | undefined, dayOfWeek: DayOfWeek) => {
    let nexDayOfWeek: Date = date ? new Date(date) : new Date();
    nexDayOfWeek = addDays(nexDayOfWeek);

    while (nexDayOfWeek.getDay() !== dayOfWeek) {
        nexDayOfWeek = addDays(nexDayOfWeek);
    }
    return nexDayOfWeek;
}

/**
 * Returns tomorrow's date.
 *
 * @param {Date | number} [d] - Optional date to be used as the base.
 * @returns {Date} - Tomorrow's date.
 */
export const getTomorrow = (d?: Date | number): Date => {
    const now: Date = d ? new Date(d) : new Date();
    return addDays(now);
}

/**
 * Converts a given date or number into a string representation of hours and minutes.
 *
 * @param {Date | number | null | undefined} d - The date or number to convert.
 * @param {string | Intl.LocalesArgument} locales - The locales argument for the `toLocaleTimeString` method.
 * @param {"numeric" | "2-digit" | undefined} [hour="2-digit"] - The format of the hour: "numeric" for a single digit, "2-digit" for a double digit. Default is "2-digit".
 * @param {"numeric" | "2-digit" | undefined} [minute="2-digit"] - The format of the minute: "numeric" for a single digit, "2-digit" for a double digit. Default is "2-digit".
 *
 * @returns {string | null} The string representation of the hours and minutes, or null if the input is null or undefined.
 */
export const getHoursAndMinutesFromDateAsString = (d: Date | number | null | undefined, locales: string | Intl.LocalesArgument, hour: "numeric" | "2-digit" | undefined = "2-digit", minute: "numeric" | "2-digit" | undefined = "2-digit"): string | null => {
    if (!d) return null;
    return new Date(d).toLocaleTimeString(locales, {hour: hour, minute: minute});
}

/**
 * Converts the given instant to a Date object.
 *
 * @param {Date | string} [instant] - The instant to convert. If not provided, the current date and time is used.
 * @returns {Date} - The converted Date object.
 *
 * @example use for convert Instant(like as java object) to javascript date
 */
export const instantToDate = (instant?: Date | string): Date => {
    if (!instant) return new Date();

    if (typeof instant === 'string') {
        return new Date(instant);
    } else {
        const conversion = instant as unknown as number * 1000;
        return new Date(conversion);
    }
}

/**
 * Returns the month from a given date in the specified format.
 *
 * @param {Date} date - The date from which to extract the month.
 * @param {string | Intl.LocalesArgument} [locales='default'] - A string representing a BCP 47 language tag, or an array of such strings.
 * @param {"numeric" | "2-digit" | "long" | "short" | "narrow" | undefined} [month='long'] - The format in which to return the month.
 *   Possible values are:
 *   - "numeric": Returns the month as a digit (e.g. 1, 2, 3, ... 12).
 *   - "2-digit": Returns the month as a two-digit number with leading zero (e.g. 01, 02, 03, ... 12).
 *   - "long": Returns the full name of the month (e.g. January, February, ... December).
 *   - "short": Returns the abbreviated name of the month (e.g. Jan, Feb, ... Dec).
 *   - "narrow": Returns the narrow name of the month (e.g. J, F, ... D).
 *   - undefined or not provided: Returns the default long format.
 *
 * @returns {string} The month from the given date in the specified format.
 */
export const monthFromDate = (date: Date, locales: string | Intl.LocalesArgument = 'default', month: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined = "long"): string => {
    return date.toLocaleString(locales, {month: month})
}

/**
 * Sets the minutes, seconds, and milliseconds of the given date to 0.
 * If no date is provided, the current date and time will be used.
 *
 * @param {Date | number} [date] - The date to modify. If not provided, the current date and time will be used.
 * @returns {Date} The modified date.
 */
export const dateWith00Mins = (date?: Date | number): Date => {
    let dateWith00Mins: Date;
    if (notPresent(date)) dateWith00Mins = new Date();
    else dateWith00Mins = new Date(date!);
    dateWith00Mins.setMinutes(0);
    dateWith00Mins.setSeconds(0);
    dateWith00Mins.setMilliseconds(0);
    return dateWith00Mins;
}

/**
 * Sets the time portion of a given date.
 *
 * @param {Date | number | null | undefined} date - The date object or timestamp to modify.
 * @param {string} time - The time string to set in the format 'HH:MM'.
 * @returns {Date | null} - The modified date object or null if the input date is not present.
 * @throws {error} - Throws an error if the given date or time is not valid.
 */
export const setTime = (date: Date | number | null | undefined, time: string): Date | undefined => {
    try {
        if (notPresent(date)) return undefined;
        const newDate: Date = new Date(date!);
        const [hours, minutes] = time.split(':');
        newDate.setHours(Number(hours));
        newDate.setMinutes(Number(minutes));
        return newDate;
    } catch (e) {
        console.error('not valid date or time', e);
    }
}