# TASK-04 검증방법: 입력 제어

## 검증 목표
AC, Backspace, 키보드 입력이 올바르게 동작하는지 확인한다.

## 검증 명령어

### Windows
```cmd
cd c:\workspace\Calculator\apps && npx playwright test tests/e2e/input-control.test.js --reporter=line
```

### Linux
```bash
cd /workspace/Calculator/apps && npx playwright test tests/e2e/input-control.test.js --reporter=line
```

### macOS
```bash
cd /workspace/Calculator/apps && npx playwright test tests/e2e/input-control.test.js --reporter=line
```

## 테스트 파일: `apps/tests/e2e/input-control.test.js`
```js
const { test, expect, _electron: electron } = require('@playwright/test');

test.beforeEach(async ({ }, testInfo) => {
  testInfo.app = await electron.launch({ args: ['main.js'] });
  testInfo.win = await testInfo.app.firstWindow();
});
test.afterEach(async ({ }, testInfo) => { await testInfo.app.close(); });

test('AC 클릭 시 수식과 결과가 초기화된다', async ({ }, testInfo) => {
  const win = testInfo.win;
  await win.click('[data-key="1"]');
  await win.click('[data-key="AC"]');
  expect(await win.textContent('#expression')).toBe('');
  expect(await win.textContent('#result')).toBe('0');
});

test('Backspace 클릭 시 마지막 문자가 삭제된다', async ({ }, testInfo) => {
  const win = testInfo.win;
  await win.click('[data-key="1"]');
  await win.click('[data-key="2"]');
  await win.click('[data-key="3"]');
  await win.click('[data-key="backspace"]');
  expect(await win.textContent('#expression')).toBe('12');
});

test('키보드 Enter로 계산이 실행된다', async ({ }, testInfo) => {
  const win = testInfo.win;
  await win.keyboard.type('5+3');
  await win.keyboard.press('Enter');
  expect(await win.textContent('#result')).toBe('8');
});

test('키보드 Escape로 AC가 동작한다', async ({ }, testInfo) => {
  const win = testInfo.win;
  await win.keyboard.type('123');
  await win.keyboard.press('Escape');
  expect(await win.textContent('#expression')).toBe('');
});
```

## 기대 출력
```
✓ AC 클릭 시 수식과 결과가 초기화된다
✓ Backspace 클릭 시 마지막 문자가 삭제된다
✓ 키보드 Enter로 계산이 실행된다
✓ 키보드 Escape로 AC가 동작한다
4 passed
```
