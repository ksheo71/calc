const { sinDeg, cosDeg, tanDeg, sinRad, cosRad, tanRad } = require('../../src/calculator');

// DEG 모드
test('sin(90°) = 1', () => expect(sinDeg(90)).toBeCloseTo(1, 10));
test('sin(30°) = 0.5', () => expect(sinDeg(30)).toBeCloseTo(0.5, 10));
test('cos(0°) = 1', () => expect(cosDeg(0)).toBeCloseTo(1, 10));
test('cos(60°) = 0.5', () => expect(cosDeg(60)).toBeCloseTo(0.5, 10));
test('tan(45°) = 1', () => expect(tanDeg(45)).toBeCloseTo(1, 10));
test('tan(90°) → 오류', () => expect(tanDeg(90)).toEqual({ error: '오류: 정의되지 않는 값' }));

// RAD 모드
test('sin(π/2) = 1', () => expect(sinRad(Math.PI / 2)).toBeCloseTo(1, 10));
test('cos(π) = -1', () => expect(cosRad(Math.PI)).toBeCloseTo(-1, 10));
test('tan(0) = 0', () => expect(tanRad(0)).toBeCloseTo(0, 10));
