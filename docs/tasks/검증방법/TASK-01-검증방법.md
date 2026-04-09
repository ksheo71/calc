# TASK-01 검증방법: Electron 프로젝트 초기 설정

## 검증 목표
Electron 앱이 정상적으로 실행되는지 확인한다.

## 사전 조건
- Node.js 18 이상 설치
- 프로젝트 루트(`apps/`)에서 `npm install` 완료

## 검증 명령어

### Windows
```cmd
cd c:\workspace\Calculator\apps
npm install
npm start
```

### Linux / macOS
```bash
cd /workspace/Calculator/apps
npm install
npm start
```

## 기대 결과
- Electron 창이 열린다
- 창 타이틀이 "공학용 계산기"로 표시된다
- 계산기 UI가 화면에 렌더링된다
- 콘솔에 오류가 없다
