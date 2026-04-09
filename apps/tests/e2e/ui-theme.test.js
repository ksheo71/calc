const { test, expect } = require('@playwright/test');
const path = require('path');

const appUrl = 'file:///' + path.join(__dirname, '../../index.html').replace(/\\/g, '/');

test.beforeEach(async ({ page }) => {
  await page.goto(appUrl);
});

test('배경색이 밝은 계열이다 (NFR-02)', async ({ page }) => {
  const bg = await page.evaluate(() =>
    getComputedStyle(document.body).backgroundColor);
  // rgb(245, 245, 245) = #f5f5f5
  expect(bg).toMatch(/rgb\(2[0-9]{2}/);
});

test('숫자 버튼과 연산자 버튼의 색상이 다르다 (NFR-02)', async ({ page }) => {
  const numBg = await page.evaluate(() =>
    getComputedStyle(document.querySelector('[data-key="1"]')).backgroundColor);
  const opBg = await page.evaluate(() =>
    getComputedStyle(document.querySelector('[data-key="+"]')).backgroundColor);
  expect(numBg).not.toBe(opBg);
});

test('오류 메시지가 빨간색 계열로 표시된다 (NFR-02)', async ({ page }) => {
  await page.click('[data-key="1"]');
  await page.click('[data-key="÷"]');
  await page.click('[data-key="0"]');
  await page.click('[data-key="="]');

  const color = await page.evaluate(() =>
    getComputedStyle(document.querySelector('#result')).color);
  // #d32f2f = rgb(211, 47, 47)
  expect(color).toMatch(/rgb\(2[0-9]{2},\s*[0-9]+,\s*[0-9]+\)/);
});

test('M 인디케이터는 메모리 값 없을 때 숨김 처리된다 (NFR-02)', async ({ page }) => {
  const display = await page.evaluate(() =>
    getComputedStyle(document.querySelector('#memory-indicator')).display);
  expect(display).toBe('none');
});

test('DEG/RAD 인디케이터가 화면에 표시된다 (NFR-02)', async ({ page }) => {
  const text = await page.textContent('#angle-mode');
  expect(text).toMatch(/DEG|RAD/);
});
