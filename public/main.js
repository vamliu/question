const { app, BrowserWindow } = require("electron");

function createWindow() {
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 1600,
    height: 900,
    resizable: false,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  // 加载index.html文件
  win.loadFile("index.html");
  // 打开开发者工具
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
});
