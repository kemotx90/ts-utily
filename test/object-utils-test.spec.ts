import {removeDuplicateByKeys, removeNullOrUndefinedFieldsFromObject} from "../src/index";

test('removeNullOrUndefinedFieldsFromObject', () => {
    expect(removeNullOrUndefinedFieldsFromObject([{id:'a', value:0}, {id:'a', value:null}, {id:undefined, value:{}}, {id:null, value:undefined}])).toStrictEqual([{id:'a', value:0}, {id:'a'}, {}, {}]);
    expect(removeNullOrUndefinedFieldsFromObject(undefined)).toBe(undefined);
});