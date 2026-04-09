# TASK-11 검증방법: UI/테마

## 검증 목표
라이트 테마 CSS가 올바르게 적용되어 있는지 확인한다.

## 검증 명령어

### Windows
```cmd
cd c:\workspace\Calculator\apps && npx playwright test tests/e2e/ui-theme.test.js --reporter=line
```

### Linux
```bash
cd /workspace/Calculator/apps && npx playwright test tests/e2e/ui-theme.test.js --reporter=line
```

### macOS
```bash
cd /workspace/Calculator/apps && npx playwright test tests/e2e/ui-theme.test.js --reporter=line
```

## 테스트 파일: `apps/tests/e2e/ui-theme.test.js`
```js
const { test, expect, _electron: electron } = require('@playwright/test');

test.beforeEach(async ({ }, testInfo) => {
  testInfo.app = await electron.launch({ args: ['main.js'] });
  testInfo.win = await testInfo.app.firstWindow();
});
test.afterEach(async ({ }, testInfo) => { await testInfo.app.close(); });

test('배경색이 밝은 계열이다', async ({ }, testInfo) => {
  const win = testInfo.win;
  const bg = await win.evaluate(() =>
    getComputedStyle(document.body).backgroundColor);
  // rgb(255,255,255) 또는 밝은 회색 계열 확인
  expect(bg).toMatch(/rgb\(2[0-9]{2}/);
});

test('숫자 버튼과 연산자 버튼의 색상이 다르다', async ({ }, testInfo) => {
  const win = testInfo.win;
  const numBg = await win.evaluate(() =>
    getComputedStyle(document.querySelector('[data-key="1"]')).backgroundColor);
  const opBg = await win.evaluate(() =>
    getComputedStyle(document.querySelector('[data-key="+"]')).backgroundColor);
  expect(numBg).not.toBe(opBg);
});

test('오류 메시지가 빨간색 계열로 표시된다', async ({ }, testInfo) => {
  const win = testInfo.win;
  await win.keyboard.type('1');
  await win.click('[data-key="÷"]');
  await win.keyboard.type('0');
  await win.keyboard.press('Enter');
  const color = await win.evaluate(() =>
    getComputedStyle(document.querySelector('#result')).color);
  // red 계열 (r값이 높음)
  expect(color).toMatch(/rgb\(2[0-9]{2},\s*[0-9]+,\s*[0-9]+\)/);
});
```

## 기대 출력
```
✓ 배경색이 밝은 계열이다
✓ 숫자 버튼과 연산자 버튼의 색상이 다르다
✓ 오류 메시지가 빨간색 계열로 표시된다
3 passed
```
