const uniqueInOrder = require('./index.js');

test('works on all capital letters', () => {
  expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual([
    'A',
    'B',
    'C',
    'D',
    'A',
    'B'
  ]);
});

test('works on upper and lower case numbers', () => {
  expect(uniqueInOrder('ABBCcAD')).toEqual(['A', 'B', 'C', 'c', 'A', 'D']);
});

test('works with numbers', () => {
  expect(uniqueInOrder([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
});
