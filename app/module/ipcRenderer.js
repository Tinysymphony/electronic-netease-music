/**
 * Created by TinySymphony on 2017-03-12.
 */
const {
  ipcRenderer
} = require('electron');
const $ = require('./IPC_CONSTANTS');

ipcRenderer.on($.TOGGLE_MUSIC, function () {
  if(!window.$music) return;
  window.$music.playing ? window.$music.stopMusic() : window.$music.startMusic();
})
