const binarySearch = require('/index');

test('outputs 5', () => {
  expect(binarySearch([1, 5, 14, 22, 35, 44, 67, 86, 99, 100], 44)).toBe(5);
});

test('outputs 1', () => {
  expect(binarySearch([4, 7, 16, 17, 37, 43, 55, 100], 7)).toBe(1);
});

test('outputs 0', () => {
  expect(binarySearch([3, 8, 11, 15, 32, 46, 57, 81, 96], 3)).toBe(0);
});

test('outputs 8', () => {
  expect(binarySearch([3, 8, 11, 15, 32, 46, 57, 81, 96], 96)).toBe(8);
});

test('outputs 4', () => {
  expect(binarySearch([3, 8, 11, 15, 32, 46, 57, 81, 96], 32)).toBe(4);
});
