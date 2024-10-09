import {isNumber, percentage, toNumber} from "../src/index";

// Tests for the toNumber function
test('to number 0, 100, -100, 1.2', () => {
    expect(toNumber('0')).toBe(0);
    expect(toNumber(100)).toBe(100);
    expect(toNumber('-100')).toBe(-100);
    expect(toNumber('1.2')).toBe(1.2);
});

test('not number {}, test, u12, 1.2n', () => {
    expect(toNumber({})).toBe(0);
    expect(toNumber('test')).toBe(0);
    expect(toNumber('u12')).toBe(0);
    expect(toNumber('1.2n')).toBe(0);
});

// Tests for the isNumber function
test('is number 0, 100, -100, 1.2', () => {
    expect(isNumber('0')).toBe(true);
    expect(isNumber(100)).toBe(true);
    expect(isNumber('-100')).toBe(true);
    expect(isNumber('1.2')).toBe(true);
});

test('is not number {}, test, u12, 1.2n', () => {
    expect(isNumber({})).toBe(false);
    expect(isNumber('test')).toBe(false);
    expect(isNumber('u12')).toBe(false);
    expect(isNumber('1.2n')).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
});

// Tests for the percentage function
/*
 * The `percentage` function calculates the percentage of a value relative to a total value,
 * rounded to a specified number of decimal places.
 */

test('percentage of 10 out of 100 is 10%', () => {
    expect(percentage(10, 100)).toBe(10);
});

test('percentage of 150.34 out of 300.22 is around 50%', () => {
    expect(percentage(150.34, 300.22)).toBeCloseTo(50, 0);
});

test('percentage of 322 out of 544 is around 59.19 with 2 decimals', () => {
    expect(percentage(322, 544, 2)).toBeCloseTo(59.19, 2);
});

test('percentage of 1 out of 3 is around 33.33 with 2 decimals', () => {
    expect(percentage(1, 3, 2)).toBeCloseTo(33.33, 2);
});

test('percentage of 25 out of 25 is 100%', () => {
    expect(percentage(25, 25)).toBe(100);
});

test('percentage of 0 out of 25 is 0%', () => {
    expect(percentage(0, 25)).toBe(0);
});

test('percentage with 0 total value returns Infinity', () => {
    expect(percentage(25, 0)).toBe(Infinity);
});

test('percentage with negative value and total', () => {
    expect(percentage(-50, -100)).toBe(50);
});

test('percentage with mixed positive value and negative total', () => {
    expect(percentage(50, -200)).toBe(-25);
});