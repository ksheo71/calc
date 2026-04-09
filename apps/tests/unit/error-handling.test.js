const { divide, sqrt, log10, ln, tanDeg } = require('../../src/calculator');

test('0으로 나누기 → 오류 메시지', () =>
  expect(divide(1, 0)).toEqual({ error: '오류: 0으로 나눌 수 없습니다' }));

test('음수 제곱근 → 오류 메시지', () =>
  expect(sqrt(-1)).toEqual({ error: '오류: 음수의 제곱근은 계산할 수 없습니다' }));

test('log(0) → 오류 메시지', () =>
  expect(log10(0)).toEqual({ error: '오류: 0 이하의 값은 로그를 계산할 수 없습니다' }));

test('ln(-1) → 오류 메시지', () =>
  expect(ln(-1)).toEqual({ error: '오류: 0 이하의 값은 로그를 계산할 수 없습니다' }));

test('tan(90°) → 오류 메시지', () =>
  expect(tanDeg(90)).toEqual({ error: '오류: 정의되지 않는 값' }));
