const { test, expect } = require('@playwright/test');
const { spawn } = require('child_process');
const path = require('path');

// Electron 앱 실행 헬퍼
async function launchApp() {
  return new Promise((resolve, reject) => {
    const env = { ...process.env };
    delete env.ELECTRON_RUN_AS_NODE;

    const child = spawn(require('electron'), [
      path.join(__dirname, '../../main.js'),
      '--disable-gpu', '--no-sandbox', '--remote-debugging-port=9222'
    ], {
      cwd: path.join(__dirname, '../..'),
      env,
      stdio: ['ignore', 'pipe', 'pipe']
    });

    setTimeout(() => resolve(child), 2000);
    child.on('error', reject);
  });
}

test('숫자 입력 시 수식 영역(#expression)에 표시된다 (FR-21)', async ({ page }) => {
  // E2E: index.html을 직접 렌더링해서 검증
  await page.goto('file:///' + path.join(__dirname, '../../index.html').replace(/\\/g, '/'));

  await page.click('[data-key="1"]');
  await page.click('[data-key="2"]');
  await page.click('[data-key="3"]');

  const expr = await page.textContent('#expression');
  expect(expr).toBe('123');
});

test('연산자 입력 시 수식 영역에 표시된다 (FR-21)', async ({ page }) => {
  await page.goto('file:///' + path.join(__dirname, '../../index.html').replace(/\\/g, '/'));

  await page.click('[data-key="3"]');
  await page.click('[data-key="+"]');

  const expr = await page.textContent('#expression');
  expect(expr).toBe('3+');
});

test('= 클릭 시 결과 영역(#result)에 계산 결과가 표시된다 (FR-22)', async ({ page }) => {
  await page.goto('file:///' + path.join(__dirname, '../../index.html').replace(/\\/g, '/'));

  await page.click('[data-key="3"]');
  await page.click('[data-key="+"]');
  await page.click('[data-key="5"]');
  await page.click('[data-key="="]');

  const result = await page.textContent('#result');
  expect(result).toBe('8');
});

test('공학 함수 결과가 결과 영역에 표시된다 (FR-22)', async ({ page }) => {
  await page.goto('file:///' + path.join(__dirname, '../../index.html').replace(/\\/g, '/'));

  await page.click('[data-key="4"]');
  await page.click('[data-key="square"]');

  const result = await page.textContent('#result');
  expect(result).toBe('16');
});

test('초기 결과 영역은 0을 표시한다 (FR-22)', async ({ page }) => {
  await page.goto('file:///' + path.join(__dirname, '../../index.html').replace(/\\/g, '/'));

  const result = await page.textContent('#result');
  expect(result).toBe('0');
});
