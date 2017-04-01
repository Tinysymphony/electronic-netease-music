'use strict'

import { app, BrowserWindow } from 'electron'
import notification from '../notification'

let mainWindow
const winURL = process.env.NODE_ENV !== 'production'
  ? `http://localhost:${require('../../../config').port}/home.html`
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
  remark()
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

require('./ipcMain')

function remark() {
  const YES = '当然有'
  notification.notify({
    title: '欢迎使用',
    message: '对于wytiny云音乐的新版本有什么意见？',
    closeLabel: '没有喔',
    actions: YES
  }, function (err, res, meta) {
    if(err) throw(err)
    if(meta.activationValue !== YES) return
    notification.notify({
      title: '意见反馈',
      message: '请在下面填写您的意见，我们会及时跟进~',
      reply: true
    }, function (err, res, meta) {
      if(err) throw(err)
      console.log(meta);
    })
  });
}
