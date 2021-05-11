const func = require ('./index.js')

test('romanToInt function exists', () => {
  expect(typeof func).toEqual('function');
});

test('outputs 3', () => {
  expect(func('III').toBe(3))
})

test('outputs 4', () => [
  expect(func('IV').toBe(4))
])

test('outputs 9', () => {
  expect(func('IX').toBe(9))
})
