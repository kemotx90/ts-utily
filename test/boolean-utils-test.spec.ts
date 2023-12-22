import {toBoolean} from "../dist/index";


test('boolean string true, TRUE, Y, y, 1', () => {
    expect(toBoolean('true')).toBe(true);
    expect(toBoolean('TRUE')).toBe(true);
    expect(toBoolean('Y')).toBe(true);
    expect(toBoolean('y')).toBe(true);
    expect(toBoolean('1')).toBe(true);
    expect(toBoolean(null!)).toBe(false);
    expect(toBoolean(undefined!)).toBe(false);
});

test('boolean string false, FALSE, F, f, 0', () => {
    expect(toBoolean('false')).toBe(false);
    expect(toBoolean('FALSE')).toBe(false);
    expect(toBoolean('F')).toBe(false);
    expect(toBoolean('f')).toBe(false);
    expect(toBoolean('0')).toBe(false);
});

test('not boolean string {}, X, 12, test', () => {
    expect(toBoolean('{}')).toBe(false);
    expect(toBoolean('X')).toBe(false);
    expect(toBoolean('12')).toBe(false);
    expect(toBoolean('test')).toBe(false);
});