```ts
function createBlobFromSourceAndMimeType(blobParts, MIME_Type): Blob;
```

Defined in: [file-utils.ts:77](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/file-utils.ts#L77)

Creates a Blob object from an array of blob parts and the MIME type.

## Parameters

### blobParts

`BlobPart`[]

The array of blob parts to be combined into a Blob object.

### MIME\_Type

`MimeTypeEnum`

The MIME type for the Blob object.

## Returns

`Blob`

- The Blob object created from the provided blob parts and MIME type.
