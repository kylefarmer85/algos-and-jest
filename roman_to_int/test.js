const romanToInt = require('./index.js');

test('romanToInt function exists', () => {
  expect(typeof romanToInt).toEqual('function');
});

test('outputs 3', () => {
  expect(romanToInt('III')).toBe(3);
});

test('outputs 4', () => {
  expect(romanToInt('IV')).toBe(4);
});

test('outputs 9', () => {
  expect(romanToInt('IX')).toBe(9);
});

test('outputs 144', () => {
  expect(romanToInt('CXLIV')).toBe(144);
});