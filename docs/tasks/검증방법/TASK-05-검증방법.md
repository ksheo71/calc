# TASK-05 검증방법: 삼각함수 및 각도 모드

## 검증 목표
sin, cos, tan 함수와 DEG/RAD 전환이 올바르게 동작하는지 확인한다.

## 사전 조건
- TASK-01~04 완료

## 자동 검증

### Windows
```cmd
cd c:\workspace\Calculator\apps
npm test -- --grep "trigonometric"
```

### Linux / macOS
```bash
cd /workspace/Calculator/apps
npm test -- --grep "trigonometric"
```

## 수동 검증 (UI)

### DEG 모드 확인
1. 앱 실행 (기본 DEG 모드 확인)
2. `9`, `0` 입력 후 `sin` 클릭 → `1` 표시 확인
3. `6`, `0` 입력 후 `cos` 클릭 → `0.5` 표시 확인
4. `4`, `5` 입력 후 `tan` 클릭 → `1` 표시 확인

### RAD 모드 전환 확인
5. DEG/RAD 버튼 클릭 → 화면에 `RAD` 표시 확인
6. `0` 입력 후 `sin` 클릭 → `0` 표시 확인

### tan 오류 확인
7. DEG 모드에서 `9`, `0` 입력 후 `tan` 클릭 → "오류: 정의되지 않는 값" 확인
