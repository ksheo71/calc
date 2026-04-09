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
const { test, expect, _electron: electron } = require('@playwright/test');

test('Electron 앱이 정상 실행된다', async () => {
  const app = await electron.launch({ args: ['main.js'] });
  const win = await app.firstWindow();
  const title = await win.title();
  expect(title).toBe('공학용 계산기');
  await app.close();
});
```

## 기대 출력
```
✓ Electron 앱이 정상 실행된다
1 passed
```
