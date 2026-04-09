const { add, divide, formatResult } = require('../../src/calculator');

test('0.1 + 0.2 = 0.3 (부동소수점 오류 없음)', () =>
  expect(formatResult(add(0.1, 0.2))).toBe('0.3'));

test('1 ÷ 3 = 0.3333333333 (10자리 반올림)', () =>
  expect(formatResult(divide(1, 3))).toBe('0.3333333333'));

test('소수점 10자리 초과 시 반올림', () =>
  expect(formatResult(1.00000000009)).toBe('1'));

test('매우 큰 수는 지수 표기법으로 표시', () =>
  expect(formatResult(1e16)).toMatch(/e\+/));

test('매우 작은 수는 지수 표기법으로 표시', () =>
  expect(formatResult(1e-11)).toMatch(/e-/));
