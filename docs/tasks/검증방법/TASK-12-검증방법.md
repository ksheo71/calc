# TASK-12 검증방법: 성능

## 검증 목표
모든 계산이 100ms 이내에 결과를 표시하는지 확인한다.

## 자동 검증 (성능 테스트)

### Windows
```cmd
cd c:\workspace\Calculator\apps
npm run test:performance
```

### Linux / macOS
```bash
cd /workspace/Calculator/apps
npm run test:performance
```

## 수동 검증 (UI 타이머 측정)
1. 앱 실행 후 브라우저 개발자 도구 열기 (Ctrl+Shift+I)
2. Console 탭에서 계산 전후 시간 로그 확인
3. 각 연산 수행 시 결과 표시까지 1초 이상 걸리지 않는지 육안 확인

## 기대 결과
- 사칙연산: 즉시 (< 10ms)
- 공학 함수: 즉시 (< 50ms)
- 히스토리 20개 이상: 즉시 (< 100ms)
