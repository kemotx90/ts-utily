```ts
function getNextDayOfWeekFromDate(date, dayOfWeek): Date;
```

Defined in: [date-utils.ts:141](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/date-utils.ts#L141)

Gets the next occurrence of a specified day of the week from a given date.

## Parameters

### date

The date from which to start searching. If not provided or invalid, the current date will be used.

`number` | `Date` | `null` | `undefined`

### dayOfWeek

`DayOfWeek`

The day of the week to find the next occurrence of.

## Returns

`Date`

- The next occurrence of the specified day of the week.
