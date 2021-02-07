const {
  app,
  BrowserWindow
} = require('electron');

app.on('ready', function () {
  var mainWindow = new BrowserWindow({
    minHeight: 925,
    minWidth: 1300,
    center: true
  });

  mainWindow.setMenu(null);
  mainWindow.loadFile('page/index.html');

  mainWindow.on('window-all-closed', function () {
    app.quit()
  });
});