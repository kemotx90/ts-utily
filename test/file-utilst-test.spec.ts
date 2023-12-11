import {
    createBlobFromBase64AndMimeType,
    getExtensionFromFileName,
    getMimeTypeFromExtension,
    typizeBlobFromFileName
} from "../src/index";
import {MimeTypeEnum} from "../src/model/mime-type-enum";

describe('getMimeTypeFromExtension', () => {
    /**
     * Describes the functionality of getMimeTypeFromExtension function
     * The function retrieves the MIME type from a file extension.
     */

    it('should return the correct MIME type for a given file extension', () => {
        // Define the extension for the test case
        const extension = 'jpg';

        // Call the function with the test case
        const mimeType = getMimeTypeFromExtension(extension);

        // Assert that the function returned the correct MIME type
        expect(mimeType).toBe((MimeTypeEnum as any)[`TYPE_${extension.toUpperCase().trim()}`]);
    });

    it('should trim the extension and ignore case', () => {
        // Define an extension with extra spaces and mixed case
        const extension = ' JpG ';

        // Call the function with the test case
        const mimeType = getMimeTypeFromExtension(extension);

        // Assert that the function returned the correct MIME type
        expect(mimeType).toBe(MimeTypeEnum.TYPE_JPG);
    });

    it('should return undefined for an unknown extension', () => {
        // Define an unknow extension
        const extension = 'unknown';

        // Call the function with the test case
        const mimeType = getMimeTypeFromExtension(extension);

        // Assert that the function returned undefined
        expect(mimeType).toBeUndefined();
    });
});

describe('getExtensionFromFileName', () => {
    /**
     * Description: This method retrieves the file extension from a file name.
     */

    test('should correctly return the extension of a standard file', () => {
        const fileName = 'test.png';
        const extension = getExtensionFromFileName(fileName);
        expect(extension).toEqual('png');
    });

    test('should correctly return the extension of a file with multiple dots', () => {
        const fileName = 'test.some.png';
        const extension = getExtensionFromFileName(fileName);
        expect(extension).toEqual('png');
    });

    test('should return undefined for a file with no extension', () => {
        const fileName = 'filename';
        const extension = getExtensionFromFileName(fileName);
        expect(extension).toEqual(undefined);
    });
});

describe('typizeBlobFromFileName function', () => {
    let blob: Blob;

    beforeEach(() => {
        blob = new Blob(['mocked data']);
    });

    it('should return undefined if there is no extension for a file', () => {
        const result = typizeBlobFromFileName(blob, 'filename');
        expect(result).toBeUndefined();
    });

    it('should correctly type the Blob according to file extension', () => {
        const result = typizeBlobFromFileName(blob, 'filename.txt');
        expect(result).toBeInstanceOf(Blob);
        expect(result?.type).toEqual('text/plain');
    });
});

describe('createBlobFromBase64AndMimeType Function', () => {
    const base64String = Buffer.from('hello world').toString('base64');
    const mimeType = MimeTypeEnum.TYPE_TXT;

    /*
     * Test if the function createBlobFromBase64AndMimeType returns a Blob
     * object after a base64 string and a MIME type are passed as arguments.
     */
    it('should create a Blob from a base64 string and MIME type', async () => {
        const blob = createBlobFromBase64AndMimeType(base64String, mimeType);
        expect(blob).toBeInstanceOf(Blob);
        expect(blob.type).toBe(mimeType);
        // You could convert Blob to a string or ArrayBuffer and compare it with the original data
        const text = await blob.text();
        expect(text).toBe('hello world');
    });
});