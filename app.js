/**
 * Created by TinySymphony on 2017-03-06.
 */

const electron = require('electron')
// Module to control application life.
const {app, globalShortcut, BrowserWindow} = electron
// Module to create native browser window.

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let lyricWindow

function createWindow () {
  require('./app/module/menu')

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 670,
    minWidth: 1000,
    minHeight: 670,
    titleBarStyle: 'hidden-inset',
    vibrancy: 'popover',
    show: false,
    center: true
  })

  process.$mainWindow = mainWindow

  mainWindow.loadURL(url.format({
    pathname: path.resolve(__dirname, './app/module/home/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('ready-to-show', function () {
    setTimeout(function () {
      mainWindow.show();
    }, 100)
  })

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  // globalShortcut.register('CommandOrControl+Alt+M', () => {
  //  // TODO: focus app
  // })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
require('./app/module/ipcMain')
