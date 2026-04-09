# TASK-06 검증방법: 로그/지수 함수

## 검증 목표
log, ln, √, x², xʸ 함수가 올바르게 계산되는지 확인한다.

## 사전 조건
- TASK-01~05 완료

## 자동 검증

### Windows
```cmd
cd c:\workspace\Calculator\apps
npm test -- --grep "math functions"
```

### Linux / macOS
```bash
cd /workspace/Calculator/apps
npm test -- --grep "math functions"
```

## 수동 검증 (UI)

| 입력 | 버튼 | 기대 결과 |
|------|------|----------|
| 100 | log | 2 |
| 1 | ln | 0 |
| 4 | √ | 2 |
| 3 | x² | 9 |
| 2, ^, 10 | = | 1024 |
| 0 | log | "오류: 0 이하의 값은 로그를 계산할 수 없습니다" |
| -1 | √ | "오류: 음수의 제곱근은 계산할 수 없습니다" |
