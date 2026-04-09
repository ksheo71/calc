# TASK-08 검증방법: 부동소수점 정밀도

## 검증 목표
부동소수점 오류 없이 소수점 10자리 이내로 정확히 표시되는지 확인한다.

## 자동 검증

### Windows
```cmd
cd c:\workspace\Calculator\apps
npm test -- --grep "precision"
```

### Linux / macOS
```bash
cd /workspace/Calculator/apps
npm test -- --grep "precision"
```

## 수동 검증 (UI)

| 입력 | 기대 결과 |
|------|----------|
| `0.1 + 0.2 =` | `0.3` (0.30000000000000004 아님) |
| `1 ÷ 3 =` | `0.3333333333` (10자리) |
| `9 ^ 99 =` | 지수 표기법 (예: `2.9512665431e+94`) |
| `0.000000001 ÷ 100 =` | 지수 표기법 (예: `1e-11`) |
