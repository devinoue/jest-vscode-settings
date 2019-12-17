const sum = require('./sum');
const multi = require('./multi');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('multiply 1 * 2 to equal 3', () => {
    expect(multi(1, 2)).toBe(2);
});