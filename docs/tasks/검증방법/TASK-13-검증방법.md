# TASK-13 검증방법: 플랫폼 빌드

## 검증 목표
각 플랫폼에서 앱을 빌드하고 정상 실행되는지 확인한다.

## 검증 명령어

### Windows — 빌드 및 실행 확인
```cmd
cd c:\workspace\Calculator\apps && npm run build:win && dir dist\*.exe
```

### Linux — 빌드 및 실행 확인
```bash
cd /workspace/Calculator/apps && npm run build:linux && ls dist/*.AppImage && chmod +x dist/*.AppImage && ./dist/*.AppImage --no-sandbox &
```

### macOS — 빌드 및 실행 확인
```bash
cd /workspace/Calculator/apps && npm run build:mac && ls dist/*.dmg && open dist/*.dmg
```

## package.json 스크립트 정의
```json
"scripts": {
  "build:win": "electron-builder --win",
  "build:linux": "electron-builder --linux",
  "build:mac": "electron-builder --mac"
}
```

## 빌드 후 자동 실행 테스트

### Windows
```cmd
cd c:\workspace\Calculator\apps && npx playwright test tests/e2e/launch.test.js --reporter=line
```

### Linux
```bash
cd /workspace/Calculator/apps && npx playwright test tests/e2e/launch.test.js --reporter=line
```

### macOS
```bash
cd /workspace/Calculator/apps && npx playwright test tests/e2e/launch.test.js --reporter=line
```

## 기대 결과
```
dist/
  Calculator Setup x.x.x.exe     (Windows)
  Calculator-x.x.x.AppImage      (Linux)
  Calculator-x.x.x.dmg           (macOS)

✓ Electron 앱이 정상 실행된다
1 passed
```
