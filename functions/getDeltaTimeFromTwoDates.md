```ts
function getDeltaTimeFromTwoDates(date1, date2): DeltaDateResult;
```

Defined in: [date-utils.ts:261](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/date-utils.ts#L261)

Calculates the time difference between two dates and returns the result as an object containing the number of years, months, days, hours, minutes, and seconds.

## Parameters

### date1

The first date.

`number` | `Date`

### date2

The second date.

`number` | `Date`

## Returns

`DeltaDateResult`

- The result object containing the time difference in years, months, days, hours, minutes, and seconds.
