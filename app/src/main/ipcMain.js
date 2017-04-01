/**
 * Created by TinySymphony on 2017-03-07.
 */
import {ipcMain} from 'electron';
import $ from '../IPC_CONSTANTS';
import {
  closeLyric,
  toggleLyric
} from './lyricWindow';
import {
  openMusicBox,
  hideMusicBox,
  closeMusicBox,
  toggleBoxList
} from './musicBoxWindow';
import Notification from '../notification';
ipcMain.on($.CLOSE_LYRIC, () => {
  closeLyric()
})
ipcMain.on($.TOGGLE_LYRIC, () => {
  toggleLyric()
})
ipcMain.on($.HIDE_MUSIC_BOX, () => {
  hideMusicBox()
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
ipcMain.on($.NOTIFY, (e, obj) => {
  Notification.notify(obj)
})
module.exports = ipcMain;
