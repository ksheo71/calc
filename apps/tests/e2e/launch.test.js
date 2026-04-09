const { test, expect } = require('@playwright/test');
const { spawn } = require('child_process');
const path = require('path');

test('Electron 앱이 정상 실행된다', async () => {
  const electronPath = require('electron');
  const mainPath = path.join(__dirname, '../../main.js');

  await new Promise((resolve, reject) => {
    const env = { ...process.env };
    delete env.ELECTRON_RUN_AS_NODE;

    const child = spawn(electronPath, [mainPath, '--disable-gpu', '--no-sandbox'], {
      cwd: path.join(__dirname, '../..'),
      env,
      timeout: 10000
    });

    let started = false;

    // 3초 내에 크래시 없이 실행되면 성공
    const timer = setTimeout(() => {
      if (!started) {
        started = true;
        child.kill();
        resolve();
      }
    }, 3000);

    child.on('error', (err) => {
      clearTimeout(timer);
      reject(new Error(`Electron 실행 오류: ${err.message}`));
    });

    child.on('exit', (code, signal) => {
      clearTimeout(timer);
      if (!started && code !== null && code !== 0) {
        reject(new Error(`Electron이 코드 ${code}로 종료됨`));
      } else {
        started = true;
        resolve();
      }
    });
  });

  // index.html, main.js, styles.css, renderer.js 존재 확인
  const fs = require('fs');
  const appDir = path.join(__dirname, '../..');
  expect(fs.existsSync(path.join(appDir, 'main.js'))).toBe(true);
  expect(fs.existsSync(path.join(appDir, 'index.html'))).toBe(true);
  expect(fs.existsSync(path.join(appDir, 'styles.css'))).toBe(true);
  expect(fs.existsSync(path.join(appDir, 'renderer.js'))).toBe(true);
});
