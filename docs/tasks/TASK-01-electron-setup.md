# TASK-01: Electron 프로젝트 초기 설정

## 설명
Electron 기반 공학용 계산기 앱의 기본 프로젝트 구조를 설정한다.

## 관련 요구사항
- NFR-03: 플랫폼 지원 (Windows, macOS, Linux)

## 구현 내용
- [ ] Node.js 프로젝트 초기화 (`npm init`)
- [ ] Electron 설치 (`npm install electron --save-dev`)
- [ ] 기본 디렉토리 구조 생성
  - `apps/main.js` — Electron 메인 프로세스
  - `apps/index.html` — 계산기 UI 진입점
  - `apps/renderer.js` — 렌더러 프로세스
  - `apps/styles.css` — 스타일시트
- [ ] `package.json` 실행 스크립트 설정 (`start`, `build`)
- [ ] Electron 기본 창 설정 (크기, 타이틀, resizable 등)

## 검증 방법
[검증방법/TASK-01-검증방법.md](검증방법/TASK-01-검증방법.md) 참조

## 상태
⬜ 대기
