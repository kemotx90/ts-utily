```ts
function typizeBlobFromFileName(blob, fileName): Blob | undefined;
```

Defined in: [file-utils.ts:34](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/file-utils.ts#L34)

Converts a Blob to a specific Blob type based on the file name extension.

## Parameters

### blob

`Blob`

The Blob instance to be typed.

### fileName

`string`

The name of the file associated with the Blob.

## Returns

`Blob` \| `undefined`

- A new Blob instance of the specified type, or undefined if unsupported extension or invalid filename.
