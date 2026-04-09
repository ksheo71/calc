# TASK-02 검증방법: 기본 사칙연산

## 검증 목표
덧셈, 뺄셈, 곱셈, 나눗셈이 정확히 계산되는지 확인한다.

## 검증 명령어

### Windows
```cmd
cd c:\workspace\Calculator\apps && npm test -- --testPathPattern=arithmetic
```

### Linux
```bash
cd /workspace/Calculator/apps && npm test -- --testPathPattern=arithmetic
```

### macOS
```bash
cd /workspace/Calculator/apps && npm test -- --testPathPattern=arithmetic
```

## 테스트 파일: `apps/tests/unit/arithmetic.test.js`
```js
const { add, subtract, multiply, divide } = require('../../src/calculator');

test('3 + 5 = 8', () => expect(add(3, 5)).toBe(8));
test('8 - 3 = 5', () => expect(subtract(8, 3)).toBe(5));
test('3 - 8 = -5', () => expect(subtract(3, 8)).toBe(-5));
test('4 × 3 = 12', () => expect(multiply(4, 3)).toBe(12));
test('10 ÷ 2 = 5', () => expect(divide(10, 2)).toBe(5));
test('10 ÷ 3 ≈ 3.3333333333', () => expect(divide(10, 3)).toBeCloseTo(3.3333333333, 10));
test('0으로 나누기 → 오류', () => expect(divide(1, 0)).toEqual({ error: '오류: 0으로 나눌 수 없습니다' }));
```

## 기대 출력
```
PASS tests/unit/arithmetic.test.js
  ✓ 3 + 5 = 8
  ✓ 8 - 3 = 5
  ✓ 3 - 8 = -5
  ✓ 4 × 3 = 12
  ✓ 10 ÷ 2 = 5
  ✓ 10 ÷ 3 ≈ 3.3333333333
  ✓ 0으로 나누기 → 오류
7 passed
```
