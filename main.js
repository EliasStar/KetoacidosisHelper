const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
  var mainWindow = new BrowserWindow({
    minHeight: 925,
    minWidth: 1300,
    center: true
  })

  mainWindow.setMenu(null)
  mainWindow.loadFile('docs/index.html')

  mainWindow.on('window-all-closed', () => app.quit())
})