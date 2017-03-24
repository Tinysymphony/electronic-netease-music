'use strict'

import { app, BrowserWindow } from 'electron'
import notification from './notification'

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:${require('../../../config').port}`
  : `file://${__dirname}/home.html`

console.log('\x1b[36m', `[TinyMusic $main] starts with pid: ${process.pid}`, '\x1b[0m')

function createWindow () {
  /**
   * Initial window options
   */
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

  mainWindow.loadURL(winURL)

  mainWindow.on('ready-to-show', function () {
    setTimeout(function () {
      mainWindow.show()
    }, 100)
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  // set menu of application
  require('./menu')
  // set tray icon
  // require('./tray')
  // eslint-disable-next-line no-console
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  } else {
    mainWindow.show()
  }
})
