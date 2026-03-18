```ts
function createFileFromBase64AndMimeType(
   base64, 
   MIME_Type, 
   fileName): File;
```

Defined in: [file-utils.ts:89](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/file-utils.ts#L89)

Creates a file from a base64 encoded string and MIME type.

## Parameters

### base64

`string`

The base64 encoded string representing the file.

### MIME\_Type

`MimeTypeEnum`

The MIME type of the file.

### fileName

`string`

The name of the file.

## Returns

`File`

- The created file object.
