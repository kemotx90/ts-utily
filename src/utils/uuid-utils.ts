import * as crypto from "crypto";

/**
 * Generates a version 4 UUID.
 *
 * @returns {string} The generated UUIDv4 value.
 */
export const UUIDV4 = (): string => {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (Number(c) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> Number(c) / 4).toString(16)
    );
}