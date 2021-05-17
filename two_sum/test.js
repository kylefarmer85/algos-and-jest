const twoSum = require("./index.js");

test('twoSum function exists', () => {
  expect(typeof twoSum).toEqual('function');
});

test('outputs [0, 2]', () => {
  expect(twoSum([3, 5, 6, 10], 9)).toEqual([0, 2]);
});

test('outputs [0, 1]', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('outputs [1, 2]', () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test('outputs [0, 1]', () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});