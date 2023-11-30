import {isNumber, percentage, toNumber} from "../src/index";


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

test('percentage (10,100), (150.34,300.22), (322,544)', () => {
    expect(percentage(10, 100)).toBe(10);
    expect(percentage(150.34, 300.22)).toBe(50);
    expect(percentage(322, 544)).toBe(59);
});