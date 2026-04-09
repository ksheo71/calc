# TASK-13 검증방법: 플랫폼 빌드

## 검증 목표
각 플랫폼에서 앱을 빌드하고 정상 실행되는지 확인한다.

## Windows 빌드 및 검증
```cmd
cd c:\workspace\Calculator\apps
npm run build:win
```
- `dist/` 폴더에 `.exe` 인스톨러 생성 확인
- 인스톨러 실행 → 앱 설치 → 정상 실행 확인

## macOS 빌드 및 검증
```bash
cd /workspace/Calculator/apps
npm run build:mac
```
- `dist/` 폴더에 `.dmg` 파일 생성 확인
- `.dmg` 마운트 → 앱 실행 확인

## Linux 빌드 및 검증
```bash
cd /workspace/Calculator/apps
npm run build:linux
```
- `dist/` 폴더에 `.AppImage` 또는 `.deb` 생성 확인
- 실행 권한 부여 후 실행 확인:
```bash
chmod +x dist/*.AppImage
./dist/*.AppImage
```

## 공통 기대 결과
- 각 플랫폼에서 앱이 정상적으로 실행된다
- 모든 계산 기능이 동작한다
- 창 크기/위치가 플랫폼 기본 규칙을 따른다
