const { app, BrowserWindow } = require('electron');
const path = require('path');

// Windows 작업표시줄 고정 시 올바른 아이콘을 표시하기 위해 앱 ID 설정 (app.isReady() 이전에 호출 필요)
app.setAppUserModelId('com.calculator.app');

function getIconPath() {
  if (app.isPackaged) {
    return path.join(process.resourcesPath, 'icon.ico');
  }
  return path.join(__dirname, 'build', 'icon.ico');
}

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 700,
    resizable: false,
    title: '공학용 계산기',
    icon: getIconPath(),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
