const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/e2e',
  timeout: 30000,
  use: {
    launchOptions: {
      executablePath: require('electron'),
    }
  }
});
