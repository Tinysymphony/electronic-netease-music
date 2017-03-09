/**
 * Created by TinySymphony on 2017-03-07.
 */
const {ipcMain} = require('electron')
const $ = require('./IPC_CONSTANTS')
const {closeLyric} = require('./lyric')
const {openMusicBox, closeMusicBox} = require('./musicBox')
ipcMain.on($.CLOSE_LYRIC, () => {
  closeLyric()
})
ipcMain.on($.OPEN_MUSIC_BOX, () => {
  openMusicBox()
})
ipcMain.on($.CLOSE_MUSIC_BOX, () => {
  closeMusicBox()
})

module.exports = ipcMain;
