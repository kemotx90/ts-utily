```ts
function toLocalDateTime(date, nowAsDefault?): string;
```

Defined in: [date-utils.ts:60](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/date-utils.ts#L60)

Converts a given `Date`, `number`, `null`, or `undefined` value to a localized string representation of the date and time in "YYYY-MM-DDTHH:MM" format.

## Parameters

### date

The value to be converted.

`number` | `Date` | `null` | `undefined`

### nowAsDefault?

`boolean` = `false`

If `true` and `date` is not provided, the current date and time will be used as the default value.

## Returns

`string`

The localized string representation of the date and time. Returns 'N.d.' if `date` is `null` and `nowAsDefault` is `false`.
