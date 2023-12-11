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
 * Converts a base64 string to a Uint8Array.
 *
 * @param base64 - The base64 string to convert.
 * @returns The Uint8Array representing the base64 string.
 */
export const createUint8ArrayFromBase64 = (base64: string): Uint8Array => {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}

/**
 * Create a Blob object from the given base64 string and MIME type.
 *
 * @param {string} base64 - The base64 string.
 * @param {MimeTypeEnum} MIME_Type - The MIME type of the Blob.
 * @returns {Blob} - The Blob object.
 */
export const createBlobFromBase64AndMimeType = (base64: string, MIME_Type: MimeTypeEnum): Blob => {
    return new Blob([createUint8ArrayFromBase64(base64)], {type: MIME_Type});
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
    return new File([blob], fileName, {type: MIME_Type});
}

/**
 * Retrieves file extension from given MIME type
 *
 * @param {MimeTypeEnum} mimeType - The MIME type of the file
 * @returns {string} - The file extension
 */
export const getExtensionFromMimeType = (mimeType: MimeTypeEnum): string => {
    return '.' + Object.keys(MimeTypeEnum).find(key => (MimeTypeEnum as any)[key] === mimeType)!.split('_')[1].toLowerCase();
}

/**
 * Checks if a file matches the specified filename and mimeType.
 *
 * @param {string} filename - The name of the file.
 * @param {MimeTypeEnum} mimeType - The MIME type to match.
 * @returns {boolean} Returns `true` if the filename matches the MIME type, otherwise `false`.
 */
export const fileIs = (filename: string, mimeType: MimeTypeEnum): boolean => {
    const extension: string | undefined = getExtensionFromFileName(filename);
    if (notPresent(extension)) return false;
    return getMimeTypeFromExtension(extension!) === mimeType;
}