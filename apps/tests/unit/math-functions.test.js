const { log10, ln, sqrt, square, power } = require('../../src/calculator');

test('log(1) = 0', () => expect(log10(1)).toBeCloseTo(0, 10));
test('log(10) = 1', () => expect(log10(10)).toBeCloseTo(1, 10));
test('log(100) = 2', () => expect(log10(100)).toBeCloseTo(2, 10));
test('log(0) → 오류', () => expect(log10(0)).toEqual({ error: '오류: 0 이하의 값은 로그를 계산할 수 없습니다' }));
test('log(-1) → 오류', () => expect(log10(-1)).toEqual({ error: '오류: 0 이하의 값은 로그를 계산할 수 없습니다' }));

test('ln(1) = 0', () => expect(ln(1)).toBeCloseTo(0, 10));
test('ln(e) ≈ 1', () => expect(ln(Math.E)).toBeCloseTo(1, 10));
test('ln(0) → 오류', () => expect(ln(0)).toEqual({ error: '오류: 0 이하의 값은 로그를 계산할 수 없습니다' }));

test('√4 = 2', () => expect(sqrt(4)).toBeCloseTo(2, 10));
test('√2 ≈ 1.4142135623', () => expect(sqrt(2)).toBeCloseTo(1.4142135623, 9));
test('√(-1) → 오류', () => expect(sqrt(-1)).toEqual({ error: '오류: 음수의 제곱근은 계산할 수 없습니다' }));

test('3² = 9', () => expect(square(3)).toBe(9));
test('(-3)² = 9', () => expect(square(-3)).toBe(9));
test('2^10 = 1024', () => expect(power(2, 10)).toBe(1024));
test('4^0.5 = 2', () => expect(power(4, 0.5)).toBeCloseTo(2, 10));
