# TASK-01 검증방법: Electron 프로젝트 초기 설정

## 검증 목표
Electron 앱이 오류 없이 실행되는지 확인한다.

## 검증 명령어

### Windows
```cmd
cd c:\workspace\Calculator\apps && npm install && npm run verify:launch
```

### Linux
```bash
cd /workspace/Calculator/apps && npm install && npm run verify:launch
```

### macOS
```bash
cd /workspace/Calculator/apps && npm install && npm run verify:launch
```

## package.json 스크립트 정의
```json
"scripts": {
  "verify:launch": "npx playwright test tests/e2e/launch.test.js --reporter=line"
}
```

## 테스트 파일: `apps/tests/e2e/launch.test.js`
```js
const { test, expect } = require('@playwright/test');
const { spawn } = require('child_process');
const path = require('path');

test('Electron 앱이 정상 실행된다', async () => {
  const electronPath = require('electron');
  const mainPath = path.join(__dirname, '../../main.js');

  await new Promise((resolve, reject) => {
    // ELECTRON_RUN_AS_NODE 환경변수가 설정된 경우 제거 필요
    const env = { ...process.env };
    delete env.ELECTRON_RUN_AS_NODE;

    const child = spawn(electronPath, [mainPath, '--disable-gpu', '--no-sandbox'], {
      cwd: path.join(__dirname, '../..'),
      env,
      timeout: 10000
    });

    let started = false;
    const timer = setTimeout(() => {
      if (!started) { started = true; child.kill(); resolve(); }
    }, 3000);

    child.on('error', (err) => { clearTimeout(timer); reject(err); });
    child.on('exit', (code, signal) => {
      clearTimeout(timer);
      if (!started && code !== null && code !== 0) {
        reject(new Error(`Electron이 코드 ${code}로 종료됨`));
      } else { started = true; resolve(); }
    });
  });

  // 필수 파일 존재 확인
  const fs = require('fs');
  const appDir = path.join(__dirname, '../..');
  expect(fs.existsSync(path.join(appDir, 'main.js'))).toBe(true);
  expect(fs.existsSync(path.join(appDir, 'index.html'))).toBe(true);
  expect(fs.existsSync(path.join(appDir, 'styles.css'))).toBe(true);
  expect(fs.existsSync(path.join(appDir, 'renderer.js'))).toBe(true);
});
```

## 기대 출력
```
✓ Electron 앱이 정상 실행된다
1 passed
```

## 비고
- `ELECTRON_RUN_AS_NODE=1` 환경변수가 설정된 경우 Electron이 Node.js 모드로 실행되므로 테스트 내에서 제거 처리
- `--disable-gpu` 플래그로 GPU 없는 환경에서도 실행 가능
