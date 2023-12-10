/**
 * for nested object into array use object.array.0.nested (no ide suggestion as propose)
 */
export type NestedKeyOf<ObjectType extends object> =
    {
        [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
        ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]> extends infer U extends string ? U : never}`
        : `${Key}`
    }[keyof ObjectType & (string | number)];