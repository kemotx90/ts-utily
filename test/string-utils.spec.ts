import {
    capitalize,
    capitalizeFully,
    compare,
    getOrDefaultString,
    includes,
    isEmptyString,
    isNotEmptyString,
    isString, populateTemplate,
    removeWhiteSpace,
    replaceAll,
    sortNumericString,
    ternaryOperator
} from "../src/index";

test('includes true', () => {
    expect(includes('test', 'es')).toBe(true);
    expect(includes('lorem ipsum', 'psum')).toBe(true);
    expect(includes('from 0 to hero', '0')).toBe(true);
});

test('not includes', () => {
    expect(includes('test', 'an')).toBe(false);
    expect(includes('lorem ipsum', 'global')).toBe(false);
    expect(includes('from 0 to hero', '1')).toBe(false);
    expect(includes(null, '1')).toBe(false);
    expect(includes(undefined, '1')).toBe(false);
});

test('not empty string', () => {
    expect(isEmptyString('1')).toBe(false);
    expect(isEmptyString('test')).toBe(false);
    expect(isEmptyString('lorem ipsum')).toBe(false);
    expect(isEmptyString('from 0 to hero')).toBe(false);
});

test('empty string', () => {
    expect(isEmptyString(' ')).toBe(true);
    expect(isEmptyString('   ')).toBe(true);
    expect(isEmptyString('')).toBe(true);
    expect(isEmptyString(null)).toBe(true);
    expect(isEmptyString(undefined)).toBe(true);
});

test('isNotEmptyString false', () => {
    expect(isNotEmptyString(' ')).toBe(false);
    expect(isNotEmptyString('   ')).toBe(false);
    expect(isNotEmptyString('')).toBe(false);
    expect(isNotEmptyString(null)).toBe(false);
    expect(isNotEmptyString(undefined)).toBe(false);
});

test('isNotEmptyString true', () => {
    expect(isNotEmptyString('1')).toBe(true);
    expect(isNotEmptyString('test')).toBe(true);
    expect(isNotEmptyString('lorem ipsum')).toBe(true);
    expect(isNotEmptyString('from 0 to hero')).toBe(true);
});

test('getOrDefaultString with get return', () => {
    expect(getOrDefaultString('1', 'default')).toBe('1');
    expect(getOrDefaultString('test', 'default')).toBe('test');
    expect(getOrDefaultString('lorem ipsum', 'default')).toBe('lorem ipsum');
    expect(getOrDefaultString('from 0 to hero', 'default')).toBe('from 0 to hero');
});

test('getOrDefaultString with default return', () => {
    expect(getOrDefaultString(' ', 'default')).toBe('default');
    expect(getOrDefaultString('   ', 'default')).toBe('default');
    expect(getOrDefaultString('', 'default')).toBe('default');
    expect(getOrDefaultString(null, 'default')).toBe('default');
    expect(getOrDefaultString(undefined, 'default')).toBe('default');
});

test('capitalize', () => {
    expect(capitalize(' ')).toBe('');
    expect(capitalize('   ')).toBe('');
    expect(capitalize('')).toBe('');
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize('test')).toBe('Test');
    expect(capitalize('lorem ipsum')).toBe('Lorem ipsum');
});

test('capitalizeFully', () => {
    expect(capitalizeFully(' ')).toBe('');
    expect(capitalizeFully('   ')).toBe('');
    expect(capitalizeFully('')).toBe('');
    expect(capitalizeFully(null)).toBe('');
    expect(capitalizeFully(undefined)).toBe('');
    expect(capitalizeFully('test')).toBe('Test');
    expect(capitalizeFully('lorem ipsum')).toBe('Lorem Ipsum');
});

test('compare', () => {
    expect(compare('abc', 'bcd')).toBe(-1);
    expect(compare('acd', 'abd')).toBe(1);
    expect(compare('abc', 'abc')).toBe(1);
});

test('isString', () => {
    expect(isString(' ')).toBe(true);
    expect(isString('   ')).toBe(true);
    expect(isString('')).toBe(true);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString('test')).toBe(true);
    expect(isString('lorem ipsum')).toBe(true);
    expect(isString({})).toBe(false);
});

test('removeWhiteSpace', () => {
    expect(removeWhiteSpace(' ')).toBe('');
    expect(removeWhiteSpace('   ')).toBe('');
    expect(removeWhiteSpace('')).toBe('');
    expect(removeWhiteSpace(null)).toBe('');
    expect(removeWhiteSpace(undefined)).toBe('');
    expect(removeWhiteSpace('test')).toBe('test');
    expect(removeWhiteSpace('lorem ipsum')).toBe('loremipsum');
    expect(removeWhiteSpace('   aaa    aaa   ')).toBe('aaaaaa');
});

test('ternaryOperator', () => {
    expect(ternaryOperator(true, 'abc', 'bcd')).toBe('abc');
    expect(ternaryOperator(false, 'abc', 'bcd')).toBe('bcd');
});

test('replaceAll', () => {
    expect(replaceAll('abc', 'c', 'bcd')).toBe('abbcd');
    expect(replaceAll('cacbc', 'c', 'bcd')).toBe('bcdabcdbbcd');
});

test('sortNumericString', () => {
    expect(sortNumericString('abc11', 'abc12')).toBe(-1);
    expect(sortNumericString('abc12', 'abc11')).toBe(1);
});

describe('populateTemplate function', () => {
    it('replaces placeholders in a string with the corresponding values from the placeholders array', () => {
        const string = 'Hello, my name is {name}, I am {age} years old';
        const placeholders = [
            { name: 'John', age: 25 },
            { location: 'New York' },
        ];

        const expected = 'Hello, my name is John, I am 25 years old';
        expect(populateTemplate(string, placeholders)).toEqual(expected);
    });

    it('returns undefined if the string is undefined', () => {
        const placeholders = [
            { name: 'John', age: 25 },
            { location: 'New York' },
        ];

        expect(populateTemplate(undefined, placeholders)).toEqual(undefined);
    });

    it('leaves placeholders unreplaced if they do not exist in the placeholders array', () => {
        const string = 'Hello, my name is {name}, I am from {location}';
        const placeholders = [
            { name: 'John', age: 25 },
            { job: 'Programmer' },
        ];

        const expected = 'Hello, my name is John, I am from ';
        expect(populateTemplate(string, placeholders)).toEqual(expected);
    });
});