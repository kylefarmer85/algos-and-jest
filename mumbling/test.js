const accum = require('./index');

test('outputs A-Bb-Ccc-Dddd', () => {
  expect(accum('abcd')).toBe('A-Bb-Ccc-Dddd');
});

test('outputs R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy', () => {
  expect(accum('RqaEzty')).toBe('R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy');
});

test('outputs C-Ww-Aaa-Tttt', () => {
  expect(accum('cwAt')).toBe('C-Ww-Aaa-Tttt');
});

test('output A-Aa-Bbb-Cccc-Bbbbb', () => {
  expect(accum('aABcb')).toBe('A-Aa-Bbb-Cccc-Bbbbb');
});
