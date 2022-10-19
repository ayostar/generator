import canIterate from '../app';

test('should test is object iterable', () => {
  expect(canIterate(new Map())).toBe(true);
});

test('should test is object iterable', () => {
  expect(canIterate(new Set())).toBe(true);
});

test('should test is object iterable', () => {
  expect(canIterate(null)).toBe(false);
});

test('should test is object iterable', () => {
  expect(canIterate(10)).toBe(false);
});

test('should test is object iterable', () => {
  expect(canIterate('Netology')).toBe(true);
});
