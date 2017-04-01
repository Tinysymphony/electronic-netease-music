import {BrowserWindow} from 'electron'
import url from 'url'
import path from 'path'
import extend from 'extend'

let musicBox
let isShowList = false

const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:${require('../../../config').port}/musicbox.html`
  : `file://${__dirname}/musicbox.html`

const SIZE = {
  w: 350,
  h: 60,
  listHeight: 320,
  maxListHeight: 1200
}

let listHeight = SIZE.listHeight

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
  if(!musicBox) {
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

function toggleBoxList() {
  if(!musicBox || !musicBox.isVisible()) return
  if(!isShowList) {
    // open list
    musicBox.setMinimumSize(SIZE.w, SIZE.listHeight)
    musicBox.setMaximumSize(SIZE.w, SIZE.maxListHeight)
    musicBox.setSize(SIZE.w, listHeight, true)
    isShowList = true
  } else {
    // close list
    listHeight = musicBox.getSize()[1]
    musicBox.setMaximumSize(SIZE.w, SIZE.h)
    musicBox.setMinimumSize(SIZE.w, SIZE.h)
    musicBox.setSize(SIZE.w, SIZE.h, true)
    isShowList = false
  }
}

function hideMusicBox() {
  musicBox.hide()
}

function _createMusicBox() {
  let winConfig = {
    width: SIZE.w,
    height: SIZE.h,
    frame: false,
    show: false
  };
  if (process.env.NODE_ENV === 'production') {
    winConfig = extend(winConfig, {
      minHeight: SIZE.h,
      maxHeight: SIZE.h,
      minWidth: SIZE.w,
      maxWidth: SIZE.w
    });
  }
  var win = new BrowserWindow(winConfig);
  win.loadURL(winURL)
  return win
}

function _getMain() {
  return process.$mainWindow || null
}

module.exports = {
  hideMusicBox,
  openMusicBox,
  closeMusicBox,
  toggleBoxList
}
