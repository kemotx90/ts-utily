import {
    at,
    deleteElementCollection,
    equalsCollection,
    findOrDefault,
    get,
    getOrDefaultCollection,
    isEmptyCollection,
    isNotEmptyCollection, parzializeArray, removeDuplicateByKey, removeDuplicateByKeys
} from "../src/index";

test('isEmptyCollection true', () => {
    expect(isEmptyCollection([])).toBe(true);
    expect(isEmptyCollection(null)).toBe(true);
    expect(isEmptyCollection(undefined)).toBe(true);
});

test('isEmptyCollection false', () => {
    expect(isEmptyCollection(['a'])).toBe(false);
    expect(isEmptyCollection(['a', 'a'])).toBe(false);
    expect(isEmptyCollection([{}])).toBe(false);
});

test('isNotEmptyCollection false', () => {
    expect(isNotEmptyCollection([])).toBe(false);
    expect(isNotEmptyCollection(null)).toBe(false);
    expect(isNotEmptyCollection(undefined)).toBe(false);
});

test('isNotEmptyCollection true', () => {
    expect(isNotEmptyCollection(['a'])).toBe(true);
    expect(isNotEmptyCollection(['a', 'a'])).toBe(true);
    expect(isNotEmptyCollection([{}])).toBe(true);
});

test('at true', () => {
    expect(at(['a'], 0)).toBe('a');
    expect(at(['a', 'z'], 1)).toBe('z');
    expect(at(null, 0)).toBe(undefined);
    expect(at(undefined, 1)).toBe(undefined);
});

test('get', () => {
    expect(get(['a'])).toStrictEqual(['a']);
    expect(get(['a', 'z'])).toStrictEqual(['a', 'z']);
    expect(get(null)).toStrictEqual([]);
    expect(get(undefined)).toStrictEqual([]);
});

test('getOrDefaultCollection', () => {
    expect(getOrDefaultCollection(['a'], ['n'])).toStrictEqual(['a']);
    expect(getOrDefaultCollection(['a', 'z'], ['n'])).toStrictEqual(['a', 'z']);
    expect(getOrDefaultCollection(null, ['n'])).toStrictEqual(['n']);
    expect(getOrDefaultCollection(undefined, ['n'])).toStrictEqual(['n']);
});

test('deleteElementCollection', () => {
    expect(deleteElementCollection(['a'], 'n')).toStrictEqual(['a']);
    expect(deleteElementCollection(['a', 'z'], 'z')).toStrictEqual(['a']);
    expect(deleteElementCollection(null, 'n')).toStrictEqual([]);
    expect(deleteElementCollection(undefined, 'n')).toStrictEqual([]);
});

test('equalsCollection', () => {
    expect(equalsCollection(['a'], ['n'])).toStrictEqual(false);
    expect(equalsCollection(['a', 'z'], ['a', 'z'])).toStrictEqual(true);
    expect(equalsCollection(null, ['n'])).toStrictEqual(false);
    expect(equalsCollection(null, null)).toStrictEqual(true);
    expect(equalsCollection(undefined, ['n'])).toStrictEqual(false);
    expect(equalsCollection(undefined, undefined)).toStrictEqual(true);
});

test('findOrDefault', () => {
    expect(findOrDefault(['a', 'z'], 'n', 'u')).toStrictEqual('u');
    expect(findOrDefault(['a', 'z'], 'z', 'u')).toStrictEqual('z');
    expect(findOrDefault(null, 'n', 'u')).toStrictEqual('u');
    expect(findOrDefault(undefined, 'n', 'u')).toStrictEqual('u');
});

test('removeDuplicateByKey', () => {
    expect(removeDuplicateByKey([{id:'a', value:0}, {id:'a', value:1}, {id:'z', value:0}], "id")).toStrictEqual([{id:'a', value:1}, {id:'z', value:0}]);
    expect(removeDuplicateByKey([{id:'a', value:0}, {id:'a', value:1}, {id:'z', value:0}], "value")).toStrictEqual([{id:'z', value:0}, {id:'a', value:1}]);
});

test('removeDuplicateByKeys', () => {
    expect(removeDuplicateByKeys([{id:'a', value:0}, {id:'a', value:1}, {id:'a', value:1}, {id:'z', value:0}], ["id", "value"])).toStrictEqual([{id:'a', value:0}, {id:'a', value:1}, {id:'z', value:0}]);
    expect(removeDuplicateByKeys([{id:'a', value:0}, {id:'a', value:1}, {id:'a', value:1}, {id:'z', value:0}], ["id"])).toStrictEqual([{id:'a', value:1}, {id:'z', value:0}]);
});

test('parzializeArray', () => {
    expect(parzializeArray([{id:'a', value:0}, {id:'a', value:1}, {id:'z', value:0}], 1)).toStrictEqual([[{id:'a', value:0}], [{id:'a', value:1}], [{id:'z', value:0}]]);
    expect(parzializeArray([{id:'a', value:0}, {id:'a', value:1}, {id:'z', value:0}], 2)).toStrictEqual([[{id:'a', value:0}, {id:'a', value:1}], [{id:'z', value:0}]]);
    expect(parzializeArray([{id:'a', value:0}, {id:'a', value:1}, {id:'z', value:0}], 3)).toStrictEqual([[{id:'a', value:0}, {id:'a', value:1}, {id:'z', value:0}]]);
    expect(parzializeArray([{id:'a', value:0}, {id:'a', value:1}, {id:'z', value:0}], 100)).toStrictEqual([[{id:'a', value:0}, {id:'a', value:1}, {id:'z', value:0}]]);
});