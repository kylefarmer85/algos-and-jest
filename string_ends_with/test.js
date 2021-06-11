const stringEndsWith = require('./index.js');

test('returns true', () => {
  expect(stringEndsWith('abc', 'bc')).toBe(true);
});

test('returns false', () => {
  expect(stringEndsWith('abc', 'd')).toBe(false);
});

test('returns true', () => {
  expect(stringEndsWith('abcde', 'cde')).toBe(true);
});

test('returns false', () => {
  expect(stringEndsWith('abcde', 'abc')).toBe(false);
});

test('returns true if ending is an empty string', () => {
  expect(stringEndsWith('abc', '')).toBe(true)
})