const squareDigits = require('./index.js');

test('returns 811181', () => {
  expect(squareDigits(9119)).toBe(811181);
});

test('returns 9414', () => {
  expect(squareDigits(3212)).toBe(9414);
});

test('returns 4114', () => {
  expect(squareDigits(2112)).toBe(4114);
});

