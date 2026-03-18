```ts
function getHoursAndMinutesFromDateAsString(
   d, 
   locales, 
   hour?, 
   minute?): string | null;
```

Defined in: [date-utils.ts:172](https://github.com/kemotx90/ts-utily/blob/560ae9f8573563ca541d9fb01f012e8591e5b7e5/src/utils/date-utils.ts#L172)

Converts a given date or number into a string representation of hours and minutes.

## Parameters

### d

The date or number to convert.

`number` | `Date` | `null` | `undefined`

### locales

`LocalesArgument`

The locales argument for the `toLocaleTimeString` method.

### hour?

The format of the hour: "numeric" for a single digit, "2-digit" for a double digit. Default is "2-digit".

`"numeric"` | `"2-digit"`

### minute?

The format of the minute: "numeric" for a single digit, "2-digit" for a double digit. Default is "2-digit".

`"numeric"` | `"2-digit"`

## Returns

`string` \| `null`

The string representation of the hours and minutes, or null if the input is null or undefined.
