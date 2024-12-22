const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      // nodeIntegration: true,
    },
  })

  win.loadFile('index.html')
}

// app.whenReady().then(createWindow)
app.whenReady().then(() => {
  ipcMain.handle('ping', () => {
    return 'pong'
  })
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
