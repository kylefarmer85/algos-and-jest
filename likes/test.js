const likes = require('./index');

test('no names', () => {
  expect(likes([])).toBe('no one likes this');
});

test('one name', () => {
  expect(likes(['Peter'])).toBe('Peter likes this');
});

test('two names', () => {
  expect(likes(['Jacob', 'Alex'])).toBe('Jacob and Alex like this');
});

test('three names', () => {
  expect(likes(['Max', 'John', 'Mark'])).toBe('Max, John and Mark like this');
});

test('four names', () => {
  expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toBe(
    'Alex, Jacob and 2 others like this'
  );
});

test('five names', () => {
  expect(likes(['Bob', 'Alex', 'Jacob', 'Mark', 'Max'])).toBe(
    'Bob, Alex and 3 others like this'
  );
});
