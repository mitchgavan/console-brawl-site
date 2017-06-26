import isEven from '../utilities/isEven';

test('2 equals true', () => {
  expect(isEven(2)).toBe(true);
});

test('1 equals false', () => {
  expect(isEven(1)).toBe(false);
});
