# TASK-05 검증방법: 삼각함수 및 각도 모드

## 검증 목표
sin, cos, tan 함수와 DEG/RAD 전환이 올바르게 동작하는지 확인한다.

## 검증 명령어

### Windows
```cmd
cd c:\workspace\Calculator\apps && npm test -- --testPathPattern=trig
```

### Linux
```bash
cd /workspace/Calculator/apps && npm test -- --testPathPattern=trig
```

### macOS
```bash
cd /workspace/Calculator/apps && npm test -- --testPathPattern=trig
```

## 테스트 파일: `apps/tests/unit/trig.test.js`
```js
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
```

## 기대 출력
```
PASS tests/unit/trig.test.js
  ✓ sin(90°) = 1
  ✓ sin(30°) = 0.5
  ✓ cos(0°) = 1
  ✓ cos(60°) = 0.5
  ✓ tan(45°) = 1
  ✓ tan(90°) → 오류
  ✓ sin(π/2) = 1
  ✓ cos(π) = -1
  ✓ tan(0) = 0
9 passed
```
