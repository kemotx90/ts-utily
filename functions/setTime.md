```ts
function setTime(date, time): Date | undefined;
```

Defined in: [date-utils.ts:241](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/date-utils.ts#L241)

Sets the time portion of a given date.

## Parameters

### date

The date object or timestamp to modify.

`number` | `Date` | `null` | `undefined`

### time

`string`

The time string to set in the format 'HH:MM'.

## Returns

`Date` \| `undefined`

- The modified date object or null if the input date is not present.

## Throws

- Throws an error if the given date or time is not valid.
