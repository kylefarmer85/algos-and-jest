const chunk = require('./index');

test('array with 4 numbers, size of 2', () => {
  expect(chunk([1, 2, 3, 4], 2)).toEqual([
    [1, 2],
    [3, 4]
  ]);
});

test('array with 5 numbers, size of 2', () => {
  expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
});

test('array with 8 numbers, size of 3', () => {
  expect(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8]
  ]);
});
