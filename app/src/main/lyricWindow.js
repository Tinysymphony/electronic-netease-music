/**
 * Created by TinySymphony on 2017-03-07.
 */
import electron from 'electron'
const {app, BrowserWindow} = electron
import url from 'url'
import path from 'path'
import extend from 'extend'

let lyricWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:${require('../../../config').port}/lyrics.html`
  : `file://${__dirname}/lyrics.html`

function toggleLyric() {
  if (!lyricWindow || lyricWindow && !lyricWindow.isVisible()) {
    openLyric()
  } else {
    closeLyric()
  }
}

function closeLyric() {
  const $main = _getMainWindow()
  if (!$main || !lyricWindow) return
  lyricWindow.hide()
}

function openLyric() {
  const $main = _getMainWindow()
  if (!$main) return
  var win = BrowserWindow.getFocusedWindow()
  if (!lyricWindow) {
    lyricWindow = _createLyricWindow()
    lyricWindow.on('close', () => {
      lyricWindow = null
    })
    lyricWindow.on('ready-to-show', () => {
      lyricWindow.show()
      win.show()
    })
  } else {
    lyricWindow.show()
    // default focus: previous board
    win.show()
  }
}

function _createLyricWindow() {
  // screen can only be used after app is ready
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
  let winConfig = {
    width: 800,
    height: 70,
    x: (width - 800) / 2,
    y: height - 140,
    vibrancy: 'dark',
    alwaysOnTop: true,
    frame: false,
    show: false
  }
  if (process.env.NODE_ENV === 'production') {
    winConfig = extend(winConfig, {
      minHeight: 70,
      maxHeight: 70,
      minWidth: 480
    })
  }
  let win = new BrowserWindow(winConfig)
  win.loadURL(winURL)
  return win
}

function _getMainWindow() {
  return process.$mainWindow || null
}

module.exports = {
  toggleLyric,
  closeLyric,
  openLyric
}
