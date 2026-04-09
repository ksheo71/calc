# TASK-03 검증방법: 화면 표시

## 검증 목표
입력 수식과 계산 결과가 화면에 올바르게 표시되는지 확인한다.

## 검증 명령어

### Windows
```cmd
cd c:\workspace\Calculator\apps && npx playwright test tests/e2e/display.test.js --reporter=line
```

### Linux
```bash
cd /workspace/Calculator/apps && npx playwright test tests/e2e/display.test.js --reporter=line
```

### macOS
```bash
cd /workspace/Calculator/apps && npx playwright test tests/e2e/display.test.js --reporter=line
```

## 테스트 파일: `apps/tests/e2e/display.test.js`
```js
const { test, expect, _electron: electron } = require('@playwright/test');

test.beforeEach(async ({ }, testInfo) => {
  testInfo.app = await electron.launch({ args: ['main.js'] });
  testInfo.win = await testInfo.app.firstWindow();
});
test.afterEach(async ({ }, testInfo) => { await testInfo.app.close(); });

test('숫자 입력 시 수식 영역에 표시된다', async ({ }, testInfo) => {
  const win = testInfo.win;
  await win.click('[data-key="1"]');
  await win.click('[data-key="2"]');
  await win.click('[data-key="3"]');
  const expr = await win.textContent('#expression');
  expect(expr).toBe('123');
});

test('계산 결과가 결과 영역에 표시된다', async ({ }, testInfo) => {
  const win = testInfo.win;
  await win.click('[data-key="3"]');
  await win.click('[data-key="+"]');
  await win.click('[data-key="5"]');
  await win.click('[data-key="="]');
  const result = await win.textContent('#result');
  expect(result).toBe('8');
});
```

## 기대 출력
```
✓ 숫자 입력 시 수식 영역에 표시된다
✓ 계산 결과가 결과 영역에 표시된다
2 passed
```
