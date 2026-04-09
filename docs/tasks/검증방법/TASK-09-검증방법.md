# TASK-09 검증방법: 히스토리

## 검증 목표
히스토리 추가, 재사용, 삭제, 영구 저장이 올바르게 동작하는지 확인한다.

## 검증 명령어

### Windows
```cmd
cd c:\workspace\Calculator\apps && npx playwright test tests/e2e/history.test.js --reporter=line
```

### Linux
```bash
cd /workspace/Calculator/apps && npx playwright test tests/e2e/history.test.js --reporter=line
```

### macOS
```bash
cd /workspace/Calculator/apps && npx playwright test tests/e2e/history.test.js --reporter=line
```

## 테스트 파일: `apps/tests/e2e/history.test.js`
```js
const { test, expect, _electron: electron } = require('@playwright/test');

test.beforeEach(async ({ }, testInfo) => {
  testInfo.app = await electron.launch({ args: ['main.js'] });
  testInfo.win = await testInfo.app.firstWindow();
});
test.afterEach(async ({ }, testInfo) => { await testInfo.app.close(); });

test('계산 완료 시 히스토리에 항목이 추가된다', async ({ }, testInfo) => {
  const win = testInfo.win;
  await win.keyboard.type('3+5');
  await win.keyboard.press('Enter');
  const items = await win.$$('#history-list .history-item');
  expect(items.length).toBeGreaterThan(0);
  const text = await items[0].textContent();
  expect(text).toContain('3 + 5 = 8');
});

test('히스토리 항목 클릭 시 결과값이 입력란에 채워진다', async ({ }, testInfo) => {
  const win = testInfo.win;
  await win.keyboard.type('3+5');
  await win.keyboard.press('Enter');
  await win.click('#history-list .history-item:first-child');
  const expr = await win.textContent('#expression');
  expect(expr).toBe('8');
});

test('히스토리 삭제 버튼 클릭 시 전체 삭제된다', async ({ }, testInfo) => {
  const win = testInfo.win;
  await win.keyboard.type('3+5');
  await win.keyboard.press('Enter');
  await win.click('#history-clear');
  const items = await win.$$('#history-list .history-item');
  expect(items.length).toBe(0);
});

test('오류 결과는 히스토리에 추가되지 않는다', async ({ }, testInfo) => {
  const win = testInfo.win;
  await win.keyboard.type('1');
  await win.click('[data-key="÷"]');
  await win.keyboard.type('0');
  await win.keyboard.press('Enter');
  const items = await win.$$('#history-list .history-item');
  expect(items.length).toBe(0);
});
```

## 기대 출력
```
✓ 계산 완료 시 히스토리에 항목이 추가된다
✓ 히스토리 항목 클릭 시 결과값이 입력란에 채워진다
✓ 히스토리 삭제 버튼 클릭 시 전체 삭제된다
✓ 오류 결과는 히스토리에 추가되지 않는다
4 passed
```
