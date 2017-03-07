/**
 * Created by TinySymphony on 2017-03-07.
 */
const {ipcMain} = require('electron')
const $ = require('./IPC_CONSTANTS')
const {closeLyric} = require('./lyric')

ipcMain.on($.CLOSE_LYRIC, () => {
  closeLyric()
})

module.exports = ipcMain;
