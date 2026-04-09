# TASK-02 검증방법: 기본 사칙연산

## 검증 목표
덧셈, 뺄셈, 곱셈, 나눗셈이 정확히 계산되는지 확인한다.

## 사전 조건
- TASK-01 완료

## 자동 검증 (단위 테스트)

### Windows
```cmd
cd c:\workspace\Calculator\apps
npm test
```

### Linux / macOS
```bash
cd /workspace/Calculator/apps
npm test
```

## 기대 결과
```
PASS calculator.test.js
  ✓ 3 + 5 = 8
  ✓ 8 - 3 = 5
  ✓ 4 × 3 = 12
  ✓ 10 ÷ 2 = 5
  ✓ 10 ÷ 0 → 오류 메시지
```

## 수동 검증 (UI)
1. 앱 실행 후 `3 + 5 =` 입력 → 결과 `8` 확인
2. `10 ÷ 0 =` 입력 → "오류: 0으로 나눌 수 없습니다" 확인
