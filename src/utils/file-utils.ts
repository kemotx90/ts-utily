import {MimeTypeEnum} from "../model/mime-type-enum";
import {notPresent} from "./common-utils";

/**
 * Retrieves the MIME type from a file extension.
 *
 * @param {string} extension - The file extension.
 * @returns {string} - The corresponding MIME type.
 */
export const getMimeTypeFromExtension = (extension: string): string => {
    return (MimeTypeEnum as any)[`TYPE_${extension.toUpperCase().trim()}`];
}

/**
 * Retrieves the file extension from a file name.
 *
 * @param {string} fileName - The file name.
 * @returns {string} - The corresponding file extension.
 */
export const getExtensionFromFileName = (fileName: string): string | undefined => {
    const splittedNameByDot: string[] = fileName.split('.');
    if (splittedNameByDot.length < 2) return undefined
    else return splittedNameByDot.pop();
}

/**
 * Converts a Blob to a specific Blob type based on the file name extension.
 *
 * @param {Blob} blob - The Blob instance to be typed.
 * @param {string} fileName - The name of the file associated with the Blob.
 * @returns {Blob|undefined} - A new Blob instance of the specified type, or undefined if unsupported extension or invalid filename.
 */
export const typizeBlobFromFileName = (blob: Blob, fileName: string): Blob | undefined => {
    const extension: string | undefined = getExtensionFromFileName(fileName);

    if (notPresent(extension)) return undefined;
    const mimeType = getMimeTypeFromExtension(extension!);
    return new Blob([blob], {type: mimeType});
}

/**
 * Creates a Buffer from a given base64 string.
 *
 * @param {string} base64 - The base64 string to convert to a Buffer.
 * @returns {Buffer} - The Buffer representation of the base64 string.
 */
export const createBufferFromBase64 = (base64: string): Buffer => {
    return Buffer.from(base64, 'base64');
}

/**
 * Create a Blob object from the given base64 string and MIME type.
 *
 * @param {string} base64 - The base64 string.
 * @param {MimeTypeEnum} MIME_Type - The MIME type of the Blob.
 * @returns {Blob} - The Blob object.
 */
export const createBlobFromBase64AndMimeType = (base64: string, MIME_Type: MimeTypeEnum): Blob => {
    return new Blob([createBufferFromBase64(base64)], {type: MIME_Type});
}

/**
 * Creates a file from a base64 encoded string and MIME type.
 *
 * @param {string} base64 - The base64 encoded string representing the file.
 * @param {MimeTypeEnum} MIME_Type - The MIME type of the file.
 * @param {string} fileName - The name of the file.
 * @returns {File} - The created file object.
 */
export const createFileFromBase64AndMimeType = (base64: string, MIME_Type: MimeTypeEnum, fileName: string): File => {
    const blob: Blob = createBlobFromBase64AndMimeType(base64, MIME_Type);
    return new File([blob], fileName, { type: MIME_Type });
}