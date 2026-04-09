const { test, expect } = require('@playwright/test');
const path = require('path');

const appUrl = 'file:///' + path.join(__dirname, '../../index.html').replace(/\\/g, '/');

test.beforeEach(async ({ page }) => {
  await page.goto(appUrl);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
});

test('AC 클릭 시 수식과 결과가 초기화된다 (FR-23)', async ({ page }) => {
  await page.click('[data-key="1"]');
  await page.click('[data-key="2"]');
  await page.click('[data-key="AC"]');

  expect(await page.textContent('#expression')).toBe('');
  expect(await page.textContent('#result')).toBe('0');
});

test('Backspace 클릭 시 마지막 문자가 삭제된다 (FR-24)', async ({ page }) => {
  await page.click('[data-key="1"]');
  await page.click('[data-key="2"]');
  await page.click('[data-key="3"]');
  await page.click('[data-key="backspace"]');

  expect(await page.textContent('#expression')).toBe('12');
});

test('빈 입력란에서 Backspace 클릭 시 오류가 발생하지 않는다 (FR-24)', async ({ page }) => {
  await page.click('[data-key="backspace"]');

  expect(await page.textContent('#expression')).toBe('');
  expect(await page.textContent('#result')).toBe('0');
});

test('키보드 숫자 입력이 수식 영역에 표시된다 (NFR-04)', async ({ page }) => {
  await page.keyboard.type('123');

  expect(await page.textContent('#expression')).toBe('123');
});

test('키보드 Enter로 계산이 실행된다 (NFR-04)', async ({ page }) => {
  await page.keyboard.type('5');
  await page.click('[data-key="+"]');
  await page.keyboard.type('3');
  await page.keyboard.press('Enter');

  expect(await page.textContent('#result')).toBe('8');
});

test('키보드 Escape로 AC가 동작한다 (NFR-04)', async ({ page }) => {
  await page.keyboard.type('123');
  await page.keyboard.press('Escape');

  expect(await page.textContent('#expression')).toBe('');
  expect(await page.textContent('#result')).toBe('0');
});

test('키보드 Backspace로 마지막 문자가 삭제된다 (NFR-04)', async ({ page }) => {
  await page.keyboard.type('12');
  await page.keyboard.press('Backspace');

  expect(await page.textContent('#expression')).toBe('1');
});
