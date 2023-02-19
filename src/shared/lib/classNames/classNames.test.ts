import { classNames } from './classNames';

describe('classNames', () => {
  test('only main class', () => {
    const expected = 'mainClass';
    expect(classNames(
      'mainClass',
    )).toBe(expected);
  });

  test('with 1 addition', () => {
    const expected = 'mainClass add1';
    expect(classNames(
      'mainClass',
      {}, ['add1'],
    )).toBe(expected);
  });

  test('with 2 additions', () => {
    const expected = 'mainClass add1 add2';
    expect(classNames(
      'mainClass', {},
      ['add1', 'add2'],
    )).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'mainClass add1 add2 mod1 mod2';
    expect(classNames(
      'mainClass',
      { mod1: true, mod2: true },
      ['add1', 'add2'],
    )).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'mainClass add1 add2 mod1';
    expect(classNames(
      'mainClass',
      { mod1: true, mod2: false },
      ['add1', 'add2'],
    )).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'mainClass add1 add2 mod1';
    expect(classNames(
      'mainClass',
      { mod1: true, mod2: undefined },
      ['add1', 'add2'],
    )).toBe(expected);
  });
});
