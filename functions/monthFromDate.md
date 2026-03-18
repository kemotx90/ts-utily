```ts
function monthFromDate(
   date, 
   locales?, 
   month?): string;
```

Defined in: [date-utils.ts:212](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/date-utils.ts#L212)

Returns the month from a given date in the specified format.

## Parameters

### date

`Date`

The date from which to extract the month.

### locales?

`LocalesArgument` = `'default'`

A string representing a BCP 47 language tag, or an array of such strings.

### month?

The format in which to return the month.
  Possible values are:
  - "numeric": Returns the month as a digit (e.g. 1, 2, 3, ... 12).
  - "2-digit": Returns the month as a two-digit number with leading zero (e.g. 01, 02, 03, ... 12).
  - "long": Returns the full name of the month (e.g. January, February, ... December).
  - "short": Returns the abbreviated name of the month (e.g. Jan, Feb, ... Dec).
  - "narrow": Returns the narrow name of the month (e.g. J, F, ... D).
  - undefined or not provided: Returns the default long format.

`"numeric"` | `"2-digit"` | `"long"` | `"short"` | `"narrow"`

## Returns

`string`

The month from the given date in the specified format.
