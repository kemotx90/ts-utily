import {getOrDefault, isEqual, notPresent, present} from "../src/index";

test('present', () => {
    expect(present([])).toBe(true);
    expect(present()).toBe(true);
    expect(present(null)).toBe(false);
    expect(present(undefined)).toBe(false);
    expect(present({})).toBe(true);
    expect(present('hola')).toBe(true);
    expect(present(1,2,0,5)).toBe(true);
});

test('notPresent', () => {
    expect(notPresent([])).toBe(false);
    expect(notPresent(null)).toBe(true);
    expect(notPresent(undefined)).toBe(true);
    expect(notPresent({})).toBe(false);
    expect(notPresent('hola')).toBe(false);
    expect(notPresent(1,2,0,5)).toBe(false);
});

test('getOrDefault', () => {
    expect(getOrDefault([], ['a','b'])).toStrictEqual([]);
    expect(getOrDefault(null, 'a')).toBe('a');
    expect(getOrDefault(undefined, 'a')).toBe('a');
    expect(getOrDefault({}, {name:'a'})).toStrictEqual({});
    expect(getOrDefault('hola', 'a')).toBe('hola');
    expect(getOrDefault(1,10)).toBe(1);
});

test('isEqual', () => {
    expect(isEqual()).toBe(true);
    expect(isEqual(null)).toBe(true);
    expect(isEqual(undefined)).toBe(true);
    expect(isEqual([], ['a','b'])).toBe(false);
    expect(isEqual(['a','b'], ['a','b'])).toBe(true);
    expect(isEqual(null, 'a')).toBe(false);
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(undefined, 'a')).toBe(false);
    expect(isEqual(undefined, undefined)).toBe(true);
    expect(isEqual({}, {name:'a'})).toBe(false);
    expect(isEqual({name:'a'}, {name:'a'})).toBe(true);
    expect(isEqual('hola', 'a')).toBe(false);
    expect(isEqual('hola', 'hola')).toBe(true);
    expect(isEqual(1,10)).toBe(false);
    expect(isEqual(1,1,1)).toBe(true);
});