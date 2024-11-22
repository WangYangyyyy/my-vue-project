function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  
  // 启动RTSP服务器
  require('./rtsp-server');
  
  // ... 其他窗口配置代码 ...
} 