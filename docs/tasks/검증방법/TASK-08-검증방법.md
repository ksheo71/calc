# TASK-08 검증방법: 부동소수점 정밀도

## 검증 목표
부동소수점 오류 없이 소수점 10자리 이내로 정확히 계산되는지 확인한다.

## 검증 명령어

### Windows
```cmd
cd c:\workspace\Calculator\apps && npm test -- --testPathPattern=precision
```

### Linux
```bash
cd /workspace/Calculator/apps && npm test -- --testPathPattern=precision
```

### macOS
```bash
cd /workspace/Calculator/apps && npm test -- --testPathPattern=precision
```

## 테스트 파일: `apps/tests/unit/precision.test.js`
```js
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
```

## 기대 출력
```
PASS tests/unit/precision.test.js
  ✓ 0.1 + 0.2 = 0.3 (부동소수점 오류 없음)
  ✓ 1 ÷ 3 = 0.3333333333 (10자리 반올림)
  ✓ 소수점 10자리 초과 시 반올림
  ✓ 매우 큰 수는 지수 표기법으로 표시
  ✓ 매우 작은 수는 지수 표기법으로 표시
5 passed
```
