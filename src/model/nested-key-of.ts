type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * The NestedKeyOf type is a utility type that takes an object type and returns a string literal union of all the keys of the object, including nested keys.
 */
export type NestedKeyOf<ObjectType extends object | undefined, Depth extends number = 10> =
    [Depth] extends [never] ? never
        : ObjectType extends object
            ? ObjectType extends (infer Item)[]
                ? Item extends object
                    ? `${number}` | `${number}.${NestedKeyOf<Item, Prev[Depth]> extends infer U extends string ? U : never}`
                    : `${number}`
                : {
                    [Key in keyof ObjectType & (string | number)]: NonNullable<ObjectType[Key]> extends object
                        ? `${Key}` | `${Key}.${NestedKeyOf<NonNullable<ObjectType[Key]>, Prev[Depth]> extends infer U extends string ? U : never}`
                        : `${Key}`
                }[keyof ObjectType & (string | number)] : never;

export type NestedKeyOfSuggest<ObjectType extends object | undefined, Depth extends number = 10> =
    [Depth] extends [never] ? never
        : ObjectType extends object
            ? ObjectType extends (infer Item)[]
                ? Item extends object
                    ? `0` | `0.${NestedKeyOfSuggest<Item, Prev[Depth]> extends infer U extends string ? U : never}`
                    : `0`
                : {
                    [Key in keyof ObjectType & (string | number)]: NonNullable<ObjectType[Key]> extends object
                        ? `${Key}` | `${Key}.${NestedKeyOfSuggest<NonNullable<ObjectType[Key]>, Prev[Depth]> extends infer U extends string ? U : never}`
                        : `${Key}`
                }[keyof ObjectType & (string | number)]
            : never;

export type NestedKeyOfWithSuggest<ObjectType extends object | undefined> =
    NestedKeyOf<ObjectType> | NestedKeyOfSuggest<ObjectType>;