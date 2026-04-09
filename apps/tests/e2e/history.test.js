const { test, expect } = require('@playwright/test');
const path = require('path');

const appUrl = 'file:///' + path.join(__dirname, '../../index.html').replace(/\\/g, '/');

test.beforeEach(async ({ page }) => {
  await page.goto(appUrl);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
});

test('계산 완료 시 히스토리에 항목이 추가된다 (FR-14)', async ({ page }) => {
  await page.click('[data-key="3"]');
  await page.click('[data-key="+"]');
  await page.click('[data-key="5"]');
  await page.click('[data-key="="]');

  const items = await page.$$('#history-list .history-item');
  expect(items.length).toBeGreaterThan(0);
  const text = await items[0].textContent();
  expect(text).toContain('3+5 = 8');
});

test('히스토리 항목 클릭 시 결과값이 결과 영역에 채워진다 (FR-15)', async ({ page }) => {
  await page.click('[data-key="3"]');
  await page.click('[data-key="+"]');
  await page.click('[data-key="5"]');
  await page.click('[data-key="="]');

  await page.click('#history-list .history-item:first-child');

  expect(await page.textContent('#result')).toBe('8');
});

test('히스토리 삭제 버튼 클릭 시 전체 삭제된다 (FR-16)', async ({ page }) => {
  await page.click('[data-key="3"]');
  await page.click('[data-key="+"]');
  await page.click('[data-key="5"]');
  await page.click('[data-key="="]');

  await page.click('#history-clear');

  const items = await page.$$('#history-list .history-item');
  expect(items.length).toBe(0);
});

test('오류 결과는 히스토리에 추가되지 않는다 (FR-14)', async ({ page }) => {
  await page.click('[data-key="1"]');
  await page.click('[data-key="÷"]');
  await page.click('[data-key="0"]');
  await page.click('[data-key="="]');

  const items = await page.$$('#history-list .history-item');
  expect(items.length).toBe(0);
});

test('localStorage에 히스토리가 저장된다 (FR-14)', async ({ page }) => {
  await page.click('[data-key="2"]');
  await page.click('[data-key="+"]');
  await page.click('[data-key="3"]');
  await page.click('[data-key="="]');

  await page.reload();

  const items = await page.$$('#history-list .history-item');
  expect(items.length).toBeGreaterThan(0);
});
