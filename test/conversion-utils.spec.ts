import {
    convertArrayToRecord,
    convertIndexSignaturesToMap,
    convertMapToIndexSignatures,
    convertRecordToArray
} from "../src/index";

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

describe('arrayToRecord', () => {
    /**
     * The function `arrayToRecord` converts an array to a record using the specified key
     * from each element of the array.
     */

    it('should convert an array to a record using a specified key', () => {
        // sample array to test
        const sampleArray = [
            {key: 'a', value: 1},
            {key: 'b', value: 2},
            {key: 'c', value: 3}
        ];

        // expected record output
        const expectedRecord = {
            a: {key: 'a', value: 1},
            b: {key: 'b', value: 2},
            c: {key: 'c', value: 3}
        };

        // test the function
        expect(convertArrayToRecord(sampleArray, 'key')).toEqual(expectedRecord);
    });
});

describe('recordToArray', () => {
    /**
     * The function `arrayToRecord` converts an array to a record using the specified key
     * from each element of the array.
     * The function `recordToArray` converts a record object to an array containing the values of the record.
     * If the input record is undefined or null, returns an empty array.
     */

        // sample array to test
    const sampleArray = [
            {key: 'a', value: 1},
            {key: 'b', value: 2},
            {key: 'c', value: 3}
        ];

    // expected record output
    const expectedRecord = {
        a: {key: 'a', value: 1},
        b: {key: 'b', value: 2},
        c: {key: 'c', value: 3}
    };
    it('should convert a record to an array of its values', () => {
        // sample record to test
        const sampleRecord = {
            a: {key: 'a', value: 1},
            b: {key: 'b', value: 2},
            c: {key: 'c', value: 3},
        };

        // expected array output
        const expectedArray = [
            {key: 'a', value: 1},
            {key: 'b', value: 2},
            {key: 'c', value: 3},
        ];

        // test the function
        expect(convertArrayToRecord(sampleArray, 'key')).toEqual(expectedRecord);
        expect(convertRecordToArray(sampleRecord)).toEqual(expectedArray);
    });

    it('should return an empty array when the input record is null', () => {
        const nullRecord = null;
        const expectedArray: any[] = [];

        expect(convertRecordToArray(nullRecord!)).toEqual(expectedArray);
    });

    it('should return an empty array when the input record is undefined', () => {
        const undefinedRecord = undefined;
        const expectedArray: any[] = [];

        expect(convertRecordToArray(undefinedRecord!)).toEqual(expectedArray);
    });
});