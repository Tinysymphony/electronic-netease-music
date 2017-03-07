/**
 * Created by TinySymphony on 2017-03-07.
 */
const electron = require('electron')
const {app, BrowserWindow} = electron
const url = require('url')
const path = require('path')

let lyricWindow

function _toggleLyric() {
  const {$mainWindow} = process
  if (!$mainWindow) return
  if (!lyricWindow) {
    lyricWindow = new BrowserWindow({
      parent: $mainWindow,
      width: 800,
      height: 70,
      minHeight: 70,
      maxHeight: 70,
      minWidth: 400,
      frame: false,
      vibrancy: 'dark',
      alwaysOnTop: true
    })
    lyricWindow.loadURL(url.format({
      pathname: path.resolve(__dirname, './lyric.html'),
      protocol: 'file:',
      slashes: true
    }))
    lyricWindow.on('closed', () => {
      lyricWindow = null
    })
    lyricWindow.on('ready-to-show', function () {
      lyricWindow.show();
    })
  } else if (lyricWindow.isVisible()) {
    lyricWindow.hide()
  } else {
    lyricWindow.show()
  }
}

module.exports = {
  toggleLyric: _toggleLyric
}
