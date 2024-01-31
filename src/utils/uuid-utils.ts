/**
 * Generates a version 4 UUID.
 *
 * @returns {string} The generated UUIDv4 value.
 */
export const UUIDV4 = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}