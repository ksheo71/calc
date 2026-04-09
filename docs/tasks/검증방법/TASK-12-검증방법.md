# TASK-12 검증방법: 성능

## 검증 목표
모든 계산이 100ms 이내에 결과를 반환하는지 확인한다.

## 검증 명령어

### Windows
```cmd
cd c:\workspace\Calculator\apps && npm test -- --testPathPattern=performance
```

### Linux
```bash
cd /workspace/Calculator/apps && npm test -- --testPathPattern=performance
```

### macOS
```bash
cd /workspace/Calculator/apps && npm test -- --testPathPattern=performance
```

## 테스트 파일: `apps/tests/unit/performance.test.js`
```js
const { add, subtract, multiply, divide, sinDeg, log10, sqrt, square, power } = require('../../src/calculator');

const LIMIT_MS = 100;

function measure(fn) {
  const start = performance.now();
  fn();
  return performance.now() - start;
}

test('덧셈이 100ms 이내에 완료된다', () =>
  expect(measure(() => add(12345.678, 98765.432))).toBeLessThan(LIMIT_MS));

test('뺄셈이 100ms 이내에 완료된다', () =>
  expect(measure(() => subtract(98765, 12345))).toBeLessThan(LIMIT_MS));

test('곱셈이 100ms 이내에 완료된다', () =>
  expect(measure(() => multiply(9999, 9999))).toBeLessThan(LIMIT_MS));

test('나눗셈이 100ms 이내에 완료된다', () =>
  expect(measure(() => divide(9999999, 7))).toBeLessThan(LIMIT_MS));

test('sin이 100ms 이내에 완료된다', () =>
  expect(measure(() => sinDeg(45))).toBeLessThan(LIMIT_MS));

test('log가 100ms 이내에 완료된다', () =>
  expect(measure(() => log10(1000))).toBeLessThan(LIMIT_MS));

test('√가 100ms 이내에 완료된다', () =>
  expect(measure(() => sqrt(99999))).toBeLessThan(LIMIT_MS));

test('x²가 100ms 이내에 완료된다', () =>
  expect(measure(() => square(9999))).toBeLessThan(LIMIT_MS));

test('xʸ가 100ms 이내에 완료된다', () =>
  expect(measure(() => power(2, 32))).toBeLessThan(LIMIT_MS));
```

## 기대 출력
```
PASS tests/unit/performance.test.js
  ✓ 덧셈이 100ms 이내에 완료된다
  ✓ 뺄셈이 100ms 이내에 완료된다
  ✓ 곱셈이 100ms 이내에 완료된다
  ✓ 나눗셈이 100ms 이내에 완료된다
  ✓ sin이 100ms 이내에 완료된다
  ✓ log가 100ms 이내에 완료된다
  ✓ √가 100ms 이내에 완료된다
  ✓ x²가 100ms 이내에 완료된다
  ✓ xʸ가 100ms 이내에 완료된다
9 passed
```
