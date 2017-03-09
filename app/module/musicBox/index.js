const {BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let musicBox

const SIZE = {
  w: 400,
  h: 60
}

function closeMusicBox() {
  const $main = _getMain()
  if(!$main || !musicBox) return
  musicBox.hide()
  $main.show()
}

function openMusicBox() {
  const $main = _getMain()
  if(!$main) return
  $main.hide()
  if(!musicBox){
    musicBox = _createMusicBox()
    musicBox.on('close', () => {
      musicBox = null
    })
    musicBox.on('ready-to-show', () => {
      musicBox.show()
    })
  } else {
    musicBox.show()
  }
}

function _createMusicBox() {
  var win = new BrowserWindow({
    width: SIZE.w,
    height: SIZE.h,
    minHeight: SIZE.h,
    maxHeight: SIZE.h,
    minWidth: SIZE.w,
    maxWidth: SIZE.w,
    frame: false
  })
  win.loadURL(url.format({
    pathname: path.resolve(__dirname, './musicBox.html'),
    protocol: 'file:',
    slashes: true
  }))
  return win
}

function _getMain() {
  return process.$mainWindow || null
}

module.exports = {
  openMusicBox,
  closeMusicBox
}
