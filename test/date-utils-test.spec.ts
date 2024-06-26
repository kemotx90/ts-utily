import {
    addDays,
    dateWith00Mins,
    dayBetween,
    getDatesBetween,
    getDeltaTimeFromTwoDates,
    getHoursAndMinutesFromDateAsString,
    getNextDayOfWeekFromDate,
    getTomorrow,
    hoursBetween,
    instantToDate,
    isAfter,
    isBefore,
    isBetween,
    monthFromDate,
    removeDays,
    sameDate,
    setTime,
    toLocalDate
} from "../src/index";
import {DayOfWeek} from "../src/model/day-of-week-enum";
import {DeltaDateResult} from "../src/model/delta-date-result";

describe('sameDate function', () => {
    it('should return true if two dates are the same', () => {
        const date1 = new Date('2023-03-31');
        const date2 = new Date('2023-03-31');
        expect(sameDate(date1, date2)).toBe(true);
    });

    it('should return false if two dates are different', () => {
        const date1 = new Date('2023-03-31');
        const date2 = new Date('2023-04-01');
        expect(sameDate(date1, date2)).toBe(false);
    });

    it('should compare only year, month, and day', () => {
        const date1 = new Date('2023-03-31T12:00:00');
        const date2 = new Date('2023-03-31T13:00:00');
        expect(sameDate(date1, date2)).toBe(true);
    });
});

describe('isBefore function', () => {
    it('should return false when first date is later than the second', () => {
        const date1 = new Date(2024, 11, 25);
        const date2 = new Date(2023, 11, 25);
        expect(isBefore(date1, date2)).toBeFalsy();
    });

    it('should return false when dates are equal and matchOnlyForYearMonthDay is not set', () => {
        const date1 = new Date(2023, 11, 25);
        const date2 = new Date(2023, 11, 25);
        expect(isBefore(date1, date2)).toBeFalsy();
    });

    it('should return false when first date is null', () => {
        const date2 = new Date(2023, 11, 25);
        expect(isBefore(null!, date2)).toBeFalsy();
    });

    it('should return false when second date is null', () => {
        const date1 = new Date(2023, 11, 25);
        expect(isBefore(date1, null!)).toBeFalsy();
    });

    it('should return true when first date is earlier than the second', () => {
        const date1 = new Date(2022, 11, 25);
        const date2 = new Date(2023, 11, 25);
        expect(isBefore(date1, date2)).toBeTruthy();
    });

    it('should return true when dates are equal and matchOnlyForYearMonthDay is set', () => {
        const date1 = new Date(2023, 11, 25);
        const date2 = new Date(2023, 11, 25);
        expect(isBefore(date1, date2, true)).toBeTruthy();
    });
});

/**
 * Test Suite for isAfter method.
 */
describe('isAfter', () => {
    /**
     * Tests if isAfter correctly determines that date 1 is after date 2.
     */
    test('isAfter correctly determines that date 1 is after date 2', () => {
        const date1 = new Date(2022, 3, 1);
        const date2 = new Date(2022, 2, 1);

        expect(isAfter(date1, date2)).toBeTruthy();
    });

    /**
     * Tests if isAfter correctly determines that date 1 is not after date 2.
     */
    test('isAfter correctly determines that date 1 is not after date 2', () => {
        const date1 = new Date(2022, 1, 1);
        const date2 = new Date(2022, 2, 1);

        expect(isAfter(date1, date2)).toBeFalsy();
    });

    /**
     * Tests if isAfter correctly uses the matchOnlyForYearMonthDay parameter when checking if date 1 is after date 2.
     */
    test('isAfter correctly uses the matchOnlyForYearMonthDay parameter when checking if date 1 is after date 2', () => {
        const date1 = new Date(2022, 3, 1, 12, 0, 0);
        const date2 = new Date(2022, 3, 1, 11, 59, 59);

        expect(isAfter(date1, date2, true)).toBeFalsy();
        expect(isAfter(date1, date2, false)).toBeTruthy();
    });
});

describe('isBetween function', () => {
    it('Should return true if dateToMatch is between start and end dates', () => {
        const dateToMatch = new Date(2025, 6, 15); // Jul 15, 2025
        const start = new Date(2025, 6, 1); // Jul 1, 2025
        const end = new Date(2025, 6, 30); // Jul 30, 2025
        const result = isBetween(dateToMatch, start, end);
        expect(result).toBe(true);
    });

    it('Should return false if dateToMatch is not between start and end dates', () => {
        const dateToMatch = new Date(2025, 5, 30); // Jun 30, 2025
        const start = new Date(2025, 6, 1); // Jul 1, 2025
        const end = new Date(2025, 6, 30); // Jul 30, 2025
        const result = isBetween(dateToMatch, start, end);
        expect(result).toBe(false);
    });

    it('Should consider only year, month, and day if matchOnlyForYearMonthDay is true', () => {
        const dateToMatch = new Date(2025, 6, 15, 12, 45, 30); // Jul 15 2025, 12:45:30
        const start = new Date(2025, 6, 15, 9, 0, 0); // Jul 15 2025, 09:00:00
        const end = new Date(2025, 6, 15, 18, 0, 0); // Jul 15 2025, 18:00:00
        const result = isBetween(dateToMatch, start, end, true);
        expect(result).toBe(true);
    });
});

describe('toLocalDate function', () => {
    test('converts a Date object to a string representation of the local date', () => {
        const date = new Date('2023-03-10T00:00:00Z');
        const result = toLocalDate(date);

        expect(result).toBe('2023-03-10');
    });

    test('returns an empty string if the input date is null', () => {
        const result = toLocalDate(null);

        expect(result).toBe('N.d.');
    });

    test('returns an empty string if the input date is undefined', () => {
        const result = toLocalDate(undefined);

        expect(result).toBe('N.d.');
    });
});

// Test suite for addDays function
describe("addDays function tests", () => {

    it('should correctly add days to a given date', () => {
        const date = new Date("2023-01-01");
        const expectedDate1 = new Date("2023-01-02");
        const expectedDate7 = new Date("2023-01-08");

        expect(addDays(date, 1)).toEqual(expectedDate1);
        expect(addDays(date, 7)).toEqual(expectedDate7);
    });

    it('should correctly handle if days number is not provided', () => {
        const date = new Date("2023-01-01");
        const expectedDate = new Date("2023-01-02");

        expect(addDays(date)).toEqual(expectedDate);
    });

});

describe('Remove days function tests', () => {

    // Test case 1: Test with defined number of days
    it('removes defined number of days from the date', () => {
        const startDate = new Date('2023-01-10');
        const result = removeDays(startDate, 3);
        expect(result.toISOString()).toBe(new Date('2023-01-07').toISOString());
    });

    // Test case 2: Test with default number of days
    it('removes default 1 day from the date when days are not provided', () => {
        const startDate = new Date('2023-01-10');
        const result = removeDays(startDate);
        expect(result.toISOString()).toBe(new Date('2023-01-09').toISOString());
    });

    // Test case 3: Test with invalid date
    it('returns Invalid Date when the input date is invalid', () => {
        const startDate = new Date('invalid-date');
        const result = removeDays(startDate, 2);
        expect(result.toString()).toBe('Invalid Date');
    });

    // Test case 4: Test with 0 days
    it('returns same date when 0 days are removed', () => {
        const startDate = new Date('2023-01-10');
        const result = removeDays(startDate, 0);
        expect(result.toISOString()).toBe(startDate.toISOString());
    });
});

describe("dayBetween function", () => {
    it('should return correct number of days between two dates', () => {
        const date1 = new Date(2023, 3, 1);
        const date2 = new Date(2023, 3, 15);
        const expectedResult = 14;
        expect(dayBetween(date1, date2)).toBe(expectedResult);
    });

    it('should return 0 if both dates are the same', () => {
        const date1 = new Date(2023, 3, 1);
        const date2 = new Date(2023, 3, 1);
        const expectedResult = 0;
        expect(dayBetween(date1, date2)).toBe(expectedResult);
    });

    it('should correctly handle case where second date comes earlier than first date', () => {
        const date1 = new Date(2023, 3, 1);
        const date2 = new Date(2023, 2, 28);
        const expectedResult = 4;
        expect(dayBetween(date1, date2)).toBe(expectedResult);
    });
});

// Test suite for hoursBetween function
describe('hoursBetween', () => {
    // Test if function returns 0 when both dates are null
    it('should return 0 if d1 or d2 is not present', () => {
        expect(hoursBetween(null!, null!)).toBe(0);
    });

    // Test if function returns correct difference in hours when withAbs is true
    it('should return absolute difference in hours between two dates if withAbs is true', () => {
        const date1 = new Date(2023, 3, 3, 10, 0, 0); // Set date to April 3, 2023 10:00:00
        const date2 = new Date(2023, 3, 3, 14, 0, 0); // Set date to April 3, 2023 14:00:00
        expect(hoursBetween(date1, date2, true)).toBe(4); // The difference is 4 hours
    });

    // Test if function returns correct difference in hours when withAbs is false and d1 < d2
    it('should return negative difference in hours between two dates if withAbs is false and d1 < d2', () => {
        const date1 = new Date(2023, 3, 3, 10, 0, 0); // Set date to April 3, 2023 10:00:00
        const date2 = new Date(2023, 3, 3, 14, 0, 0); // Set date to April 3, 2023 14:00:00
        expect(hoursBetween(date1, date2, false)).toBe(-4); // The difference is -4 hours
    });

    // Test if function returns correct difference in hours when withAbs is false and d1 > d2
    it('should return positive difference in hours between two dates if withAbs is false and d1 > d2', () => {
        const date1 = new Date(2023, 3, 3, 14, 0, 0); // Set date to April 3, 2023 14:00:00
        const date2 = new Date(2023, 3, 3, 10, 0, 0); // Set date to April 3, 2023 10:00:00
        expect(hoursBetween(date1, date2, false)).toBe(4); // The difference is 4 hours
    });
});

describe('getNextDayOfWeekFromDate', () => {

    it('should return next occurrence of specified day of week from current date', () => {
        const currentDayOfWeek = (new Date()).getDay();
        const expectedDayOfWeek = currentDayOfWeek === 6 ? 0 : currentDayOfWeek + 1; // In case of Saturday, next day is Sunday

        const result = getNextDayOfWeekFromDate(undefined, expectedDayOfWeek);
        expect(result.getDay()).toBe(expectedDayOfWeek);
    });

    it('should return next occurrence of specified day of week from given date', () => {
        const date = new Date('2023-01-09'); // Let's assume this date is Monday
        const expectedDayOfWeek = DayOfWeek.Friday;

        const result = getNextDayOfWeekFromDate(date, expectedDayOfWeek);
        expect(result.getDay()).toBe(expectedDayOfWeek);
    });

    it('should return same day if provided same day', () => {
        const date = new Date('2023-01-09'); // This date is Monday
        const expectedDayOfWeek = DayOfWeek.Monday;

        const result = getNextDayOfWeekFromDate(date, expectedDayOfWeek);
        expect(result.getDay()).toBe(expectedDayOfWeek);
    });
});

describe('getTomorrow', () => {
    it('should return tomorrow\'s date when no date is provided', () => {
        const today = new Date();
        const expectedDate = addDays(today, 1);
        expectedDate.setSeconds(0, 0);
        const tomorrow = getTomorrow();
        tomorrow.setSeconds(0, 0);

        expect(tomorrow).toStrictEqual(expectedDate);
    });

    it('should return the next day of the provided date', () => {
        const baseDate = new Date('2023-09-15');
        const expectedDate = new Date('2023-09-16');

        expect(getTomorrow(baseDate)).toStrictEqual(expectedDate);
    });

    it('should handle leap year correctly', () => {
        const leapDay = new Date('2024-02-29');
        const expectedDate = new Date('2024-03-01');

        expect(getTomorrow(leapDay)).toStrictEqual(expectedDate);
    });
});

describe('getHoursAndMinutesFromDateAsString', () => {
    it('should correctly format the date to hours and minutes', () => {
        const date = new Date(2023, 2, 2, 15, 30);
        const result = getHoursAndMinutesFromDateAsString(date, 'en-US');
        expect(result).toBe('03:30 PM');
    });

    it('should correctly handle numeric hour and minute format', () => {
        const date = new Date(2023, 2, 2, 15, 30);
        const result = getHoursAndMinutesFromDateAsString(date, 'it-IT', 'numeric', 'numeric');
        expect(result).toBe('15:30');
    });

    it('should return null for null or undefined date', () => {
        const resultNull = getHoursAndMinutesFromDateAsString(null, 'en-US');
        const resultUndefined = getHoursAndMinutesFromDateAsString(undefined, 'en-US');
        expect(resultNull).toBeNull();
        expect(resultUndefined).toBeNull();
    });
});

describe('instantToDate', () => {
    it('returns current date when no arguments provided', () => {
        const dateBeforeFunctionCall = new Date();
        const result = instantToDate();
        const dateAfterFunctionCall = new Date();

        expect(result).toBeInstanceOf(Date);
        expect(result.getTime()).toBeGreaterThanOrEqual(dateBeforeFunctionCall.getTime());
        expect(result.getTime()).toBeLessThanOrEqual(dateAfterFunctionCall.getTime());
    });

    it('returns correct date for string argument', () => {
        const result = instantToDate('2020-01-01T00:00:00Z');

        expect(result).toBeInstanceOf(Date);
        expect(result.toISOString()).toEqual('2020-01-01T00:00:00.000Z');
    });

    it('returns correct date for Date argument', () => {
        const instant = new Date('2020-01-01T00:00:00Z');

        const result = instantToDate(instant);

        expect(result).toBeInstanceOf(Date);
    });
});

/**
 * Test file for the monthFromDate function.
 *
 * These tests are designed to confirm that the monthFromDate function correctly
 * returns the month of a given date in the specified format.
 */

describe('monthFromDate function', () => {

    // Test for long format
    test('returns month from date in the long format', () => {
        expect(monthFromDate(new Date(2022, 0), 'en-US', 'long')).toBe('January');
    });

    // Test for short format
    test('returns month from date in the short format', () => {
        expect(monthFromDate(new Date(2022, 1), 'en-US', 'short')).toBe('Feb');
    });

    // Test for numeric format
    test('returns month from date in the numeric format', () => {
        expect(monthFromDate(new Date(2022, 11), 'en-US', 'numeric')).toBe('12');
    });

    // Test for undefined format
    test('returns month from date in the default (long) format when format is undefined', () => {
        expect(monthFromDate(new Date(2022, 0), 'en-US')).toBe('January');
    });

});


describe('dateWith00Mins function', () => {

    test('should return current date with 00 minutes, if no date is provided', () => {
        const result = dateWith00Mins();
        expect(result.getMinutes()).toBe(0);
        expect(result.getSeconds()).toBe(0);
        expect(result.getMilliseconds()).toBe(0);
        expect(result.getFullYear()).toBe(new Date().getFullYear());
        expect(result.getMonth()).toBe(new Date().getMonth());
        expect(result.getDate()).toBe(new Date().getDate());
        expect(result.getHours()).toBe(new Date().getHours());
    });

    test('should set minutes, seconds and milliseconds of the provided date to 0', () => {
        const inputDate = new Date(2023, 5, 28, 12, 34, 56, 789);
        const result = dateWith00Mins(inputDate);
        expect(result.getMinutes()).toBe(0);
        expect(result.getSeconds()).toBe(0);
        expect(result.getMilliseconds()).toBe(0);
        expect(result.getFullYear()).toBe(2023);
        expect(result.getMonth()).toBe(5);
        expect(result.getDate()).toBe(28);
        expect(result.getHours()).toBe(12);
    });

    test('should work with timestamp', () => {
        const timestamp = (new Date(2023, 5, 28, 12, 34, 56, 789)).getTime();
        const result = dateWith00Mins(timestamp);
        expect(result.getMinutes()).toBe(0);
        expect(result.getSeconds()).toBe(0);
        expect(result.getMilliseconds()).toBe(0);
        expect(result.getFullYear()).toBe(2023);
        expect(result.getMonth()).toBe(5);
        expect(result.getDate()).toBe(28);
        expect(result.getHours()).toBe(12);
    });
});

// Main test suite
describe('setTime function from date-utils file', () => {

    it('should set the time properly', () => {
        const date = new Date(2023, 3, 3);
        const time = '07:30';
        const newDate = setTime(date, time);
        expect(newDate?.getHours()).toBe(7);
        expect(newDate?.getMinutes()).toBe(30);
    });

    it('should return undefined when date is not present', () => {
        const time = '07:30';
        const newDate = setTime(undefined, time);
        expect(newDate).toBeUndefined();
    });

    it('should properly handle timestamps', () => {
        const timestamp = Date.now();
        const time = '12:00';
        const newDate = setTime(timestamp, time);
        expect(newDate?.getHours()).toBe(12);
        expect(newDate?.getMinutes()).toBe(0);
    });
});

describe('getDeltaTimeFromTwoDates', () => {
    it('should return correctly formed DeltaDateResult when given valid input', () => {
        const date1 = new Date(2023, 3, 19, 12, 0, 0);
        const date2 = new Date(2023, 3, 20, 12, 0, 0);

        const expectedResult: DeltaDateResult = {
            years: 0,
            months: 0,
            days: 1,
            hours: 0,
            minutes: 0,
            seconds: 0
        }

        expect(getDeltaTimeFromTwoDates(date1, date2)).toEqual(expectedResult);
    });

    it('should return correctly formed DeltaDateResult when given two equal dates', () => {
        const date1 = new Date(2023, 3, 19, 12, 0, 0);

        const expectedResult: DeltaDateResult = {
            years: 0,
            months: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }

        expect(getDeltaTimeFromTwoDates(date1, date1)).toEqual(expectedResult);
    });
});

describe('getDatesBetween', () => {
    // A basic test case for the function
    it('should return all dates between two given dates', () => {
        const startDate = new Date('2022-01-01');
        const endDate = new Date('2022-01-05');

        const result = getDatesBetween(startDate, endDate);

        const expected = ['2022-01-01', '2022-01-02', '2022-01-03', '2022-01-04', '2022-01-05'].map(d => new Date(d));

        expect(result).toEqual(expected);
    });

    // A test case when providing timestamps instead of Date objects
    it('should work with timestamps', () => {
        const startDate = new Date('2022-01-01').getTime();
        const endDate = new Date('2022-01-05').getTime();

        const result = getDatesBetween(startDate, endDate);

        const expected = ['2022-01-01', '2022-01-02', '2022-01-03', '2022-01-04', '2022-01-05'].map(d => new Date(d));

        expect(result).toEqual(expected);
    });

    // Test case to check if function returns empty array when one or both parameters are missing
    it('should return an empty array if one parameter is missing', () => {
        const result = getDatesBetween(new Date('2022-01-01'), undefined!);
        expect(result).toEqual([]);

        const result2 = getDatesBetween(undefined!, new Date('2022-01-05'));
        expect(result2).toEqual([]);
    });

    // Test to check if function returns array with only one date when start and end dates are same
    it('should return array with only one date when start and end dates are same', () => {
        const startDate = new Date('2022-01-01');
        const endDate = new Date('2022-01-01');

        const result = getDatesBetween(startDate, endDate);

        expect(result).toEqual([new Date('2022-01-01')]);
    });
});