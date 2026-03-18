```ts
function isBetween(
   dateToMatch, 
   start, 
   end, 
   matchOnlyForYearMonthDay?): boolean;
```

Defined in: [date-utils.ts:49](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/date-utils.ts#L49)

Checks if a given date falls between a start and end date.

## Parameters

### dateToMatch

`Date`

The date to check.

### start

`Date`

The start date.

### end

`Date`

The end date.

### matchOnlyForYearMonthDay?

`boolean`

(Optional) Specifies whether to only consider the year, month, and day when checking the date. Default is false.

## Returns

`boolean`

- True if the date falls between the start and end dates, false otherwise.
