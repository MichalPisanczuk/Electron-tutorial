const { app, BrowserWindow, dialog } = require("electron");

function createWindow() {
  const appWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      devTools: true,
    },
    autoHideMenuBar: true,
  });
  // titleBarStyle: 'hidden' // Ukrycie paska programu
  //   appWindow.maximize(); // Full screen window
  appWindow.loadFile("dist/electron-tutorial/index.html");
}

app.whenReady().then(() => {
  createWindow();
});

app.on("closed", () => {
  appWindow = null;
});

// electron-packager ./ NazwaAplikacji --platform=win32 --overwrite
