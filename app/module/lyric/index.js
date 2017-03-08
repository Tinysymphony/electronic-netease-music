/**
 * Created by TinySymphony on 2017-03-07.
 */
const electron = require('electron')
const {app, BrowserWindow} = electron
const url = require('url')
const path = require('path')

let lyricWindow

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
  lyricWindow.hide();
}

function openLyric() {
  const $main = _getMainWindow();
  if (!$main) return
  if (!lyricWindow) {
    lyricWindow = _createLyricWindow($main);
    lyricWindow.on('close', () => {
      lyricWindow = null
    })
    lyricWindow.on('ready-to-show', () => {
      lyricWindow.show();
    })
  } else {
    lyricWindow.show();
  }
}

function _createLyricWindow($main) {
  // screen can only be used after app is ready
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
  var win = new BrowserWindow({
    parent: $main,
    width: 800,
    height: 70,
    minHeight: 70,
    maxHeight: 70,
    minWidth: 480,
    frame: false,
    x: (width - 800) / 2,
    y: height - 140,
    vibrancy: 'dark',
    alwaysOnTop: true
  })
  win.loadURL(url.format({
    pathname: path.resolve(__dirname, './lyric.html'),
    protocol: 'file:',
    slashes: true
  }))
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
