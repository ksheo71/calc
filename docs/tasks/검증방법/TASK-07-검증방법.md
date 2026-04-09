# TASK-07 검증방법: 오류 처리

## 검증 목표
모든 오류 상황에서 올바른 메시지가 반환되는지 확인한다.

## 검증 명령어

### Windows
```cmd
cd c:\workspace\Calculator\apps && npm test -- --testPathPattern=error-handling
```

### Linux
```bash
cd /workspace/Calculator/apps && npm test -- --testPathPattern=error-handling
```

### macOS
```bash
cd /workspace/Calculator/apps && npm test -- --testPathPattern=error-handling
```

## 테스트 파일: `apps/tests/unit/error-handling.test.js`
```js
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
```

## 기대 출력
```
PASS tests/unit/error-handling.test.js
  ✓ 0으로 나누기 → 오류 메시지
  ✓ 음수 제곱근 → 오류 메시지
  ✓ log(0) → 오류 메시지
  ✓ ln(-1) → 오류 메시지
  ✓ tan(90°) → 오류 메시지
5 passed
```
