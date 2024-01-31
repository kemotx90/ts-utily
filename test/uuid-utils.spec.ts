import {UUIDV4} from "../src/index";

describe('UUIDV4 function', () => {
    it('should generate a valid UUIDv4 string', () => {
        const uuidv4Regex = /^(?:[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-(?:8|9|a|b)[a-f0-9]{3}-[a-f0-9]{12})$/i;
        const uuid = UUIDV4();
        expect(uuid).toMatch(uuidv4Regex);
    });

    it('should generate unique UUIDv4 strings', () => {
        const uuid1 = UUIDV4();
        const uuid2 = UUIDV4();
        expect(uuid1).not.toBe(uuid2);
    });

    it('should generate unique UUIDv4 strings on 5000 elements', () => {
        let uuids: string[] = [];

        for (let i: number = 0; i < 5000; i++) {
            uuids = [...uuids, UUIDV4()]
        }

        const hasDuplicates: boolean = new Set(uuids).size !== uuids.length;
        expect(hasDuplicates).toBe(false);
    });
});