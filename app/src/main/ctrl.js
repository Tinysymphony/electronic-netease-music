/**
 * Created by TinySymphony on 2017-03-07.
 */

// Control Module (Main Process)
import {ipcMain} from 'electron'
import $ from '../IPC_CONSTANTS'

function togglePlayStatus() {
  var $main = _getMainWindow()
  if (!$main) return
  $main.webContents.send($.TOGGLE_MUSIC)
}

function nextSong () {
}

function prevSong () {
}

function volumeUp () {
}

function volumeDown () {
}

function addFavor () {
}

function _getMainWindow () {
  return process.$mainWindow || null
}

module.exports = {
  togglePlayStatus,
  nextSong,
  prevSong,
  volumeUp,
  volumeDown,
  addFavor
}
