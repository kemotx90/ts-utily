```ts
function isAfter(
   d1, 
   d2, 
   matchOnlyForYearMonthDay?): boolean;
```

Defined in: [date-utils.ts:37](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/date-utils.ts#L37)

Checks if a given date is after another date.

## Parameters

### d1

`Date`

The first date.

### d2

`Date`

The second date.

### matchOnlyForYearMonthDay?

`boolean`

Optional parameter to match only up to year, month, and day.

## Returns

`boolean`

- Returns true if d1 is after d2, otherwise returns false.
