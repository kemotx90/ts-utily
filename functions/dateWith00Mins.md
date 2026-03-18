```ts
function dateWith00Mins(date?): Date;
```

Defined in: [date-utils.ts:223](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/date-utils.ts#L223)

Sets the minutes, seconds, and milliseconds of the given date to 0.
If no date is provided, the current date and time will be used.

## Parameters

### date?

The date to modify. If not provided, the current date and time will be used.

`number` | `Date`

## Returns

`Date`

The modified date.
