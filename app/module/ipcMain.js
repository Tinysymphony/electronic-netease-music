/**
 * Created by TinySymphony on 2017-03-07.
 */
const {
  ipcMain
} = require('electron')
const $ = require('./IPC_CONSTANTS')
const {
  closeLyric,
  toggleLyric,
} = require('./lyric')
const {
  openMusicBox,
  closeMusicBox,
  toggleBoxList
} = require('./musicBox')
ipcMain.on($.CLOSE_LYRIC, () => {
  closeLyric()
})
ipcMain.on($.TOGGLE_LYRIC, () => {
  toggleLyric()
})
ipcMain.on($.OPEN_MUSIC_BOX, () => {
  openMusicBox()
})
ipcMain.on($.CLOSE_MUSIC_BOX, () => {
  closeMusicBox()
})
ipcMain.on($.TOGGLE_BOX_LIST, () => {
  toggleBoxList()
})

module.exports = ipcMain;
