import {convertIndexSignaturesToMap, convertMapToIndexSignatures} from "../src/index";

test('convertIndexSignaturesToMap', () => {
    expect(convertIndexSignaturesToMap({'test': {element: 'map'}})).toBeInstanceOf(Map<string, { element: string }>);
    expect(convertIndexSignaturesToMap(null!)).toBe(undefined);
    expect(convertIndexSignaturesToMap(undefined!)).toBe(undefined);
});

test('convertMapToIndexSignatures', () => {
    const map = new Map<string, { element: string }>();
    map.set('test', {element: 'map'});
    expect(convertMapToIndexSignatures(map)).toStrictEqual({'test': {element: 'map'}});
    expect(convertMapToIndexSignatures(null!)).toBe(undefined);
    expect(convertMapToIndexSignatures(undefined!)).toBe(undefined);
});