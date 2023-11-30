import {sortByObjectValues} from "../src/utils/sort-utils";

test('sortByObjectValues', () => {
    expect([{id:'a', value:0}, {id:'b', value:1}, {id:'c', value:0}].sort(sortByObjectValues(['id'], true))).toStrictEqual([{id:'a', value:0}, {id:'b', value:1}, {id:'c', value:0}]);
    expect([{id:'a', value:0}, {id:'b', value:1}, {id:'c', value:0}].sort(sortByObjectValues(['id'], false))).toStrictEqual([{id:'c', value:0}, {id:'b', value:1}, {id:'a', value:0}]);
    expect([{id:'a', value:0}, {id:'b', value:1}, {id:'b', value:0}].sort(sortByObjectValues(['id', 'value'], true))).toStrictEqual([{id:'a', value:0}, {id:'b', value:0}, {id:'b', value:1}]);
    expect([{id:'a', value:0}, {id:'b', value:1}, {id:'b', value:0}].sort(sortByObjectValues(['id', 'value'], false))).toStrictEqual([{id:'b', value:0}, {id:'b', value:1}, {id:'a', value:0}]);
});