const { add, subtract, multiply, divide } = require('../../src/calculator');

test('3 + 5 = 8', () => expect(add(3, 5)).toBe(8));
test('1.5 + 2.3 = 3.8', () => expect(add(1.5, 2.3)).toBeCloseTo(3.8, 10));
test('-3 + 5 = 2', () => expect(add(-3, 5)).toBe(2));

test('8 - 3 = 5', () => expect(subtract(8, 3)).toBe(5));
test('3 - 8 = -5', () => expect(subtract(3, 8)).toBe(-5));
test('3.5 - 1.2 = 2.3', () => expect(subtract(3.5, 1.2)).toBeCloseTo(2.3, 10));

test('4 × 3 = 12', () => expect(multiply(4, 3)).toBe(12));
test('2.5 × 4 = 10', () => expect(multiply(2.5, 4)).toBe(10));
test('-3 × 4 = -12', () => expect(multiply(-3, 4)).toBe(-12));

test('10 ÷ 2 = 5', () => expect(divide(10, 2)).toBe(5));
test('10 ÷ 3 소수 결과', () => expect(divide(10, 3)).toBeCloseTo(3.3333333333, 10));
test('0으로 나누기 → 오류', () => expect(divide(1, 0)).toEqual({ error: '오류: 0으로 나눌 수 없습니다' }));
test('0으로 나누기 상태 유지', () => expect(divide(1, 0)).toHaveProperty('error'));
