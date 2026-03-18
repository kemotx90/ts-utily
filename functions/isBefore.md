```ts
function isBefore(
   d1, 
   d2, 
   matchOnlyForYearMonthDay?): boolean;
```

Defined in: [date-utils.ts:24](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/date-utils.ts#L24)

Determines if the given date is before the reference date.

## Parameters

### d1

`Date`

The date to compare.

### d2

`Date`

The reference date.

### matchOnlyForYearMonthDay?

`boolean`

Optional flag to indicate if the dates should only match for year, month, and day. Defaults to false.

## Returns

`boolean`

- True if d1 is before d2 (or matches only for year, month, and day if specified), otherwise false.
