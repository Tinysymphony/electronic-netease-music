/**
 * Created by TinySymphony on 2017-03-08.
 */

// Application Menu
const {
  Tray,
  Menu
} = require('electron')

const path = require('path')

let tray = new Tray(path.resolve(__dirname, './music@4x.png'))

const contextMenu = Menu.buildFromTemplate([{
  label: 'Single Loop',
  type: 'radio'
}, {
  label: 'List Loop',
  type: 'radio'
}, {
  label: 'Random Play',
  type: 'radio'
}, {
  type: 'separator'
}, {
  label: 'Check for Updates...'
}, {
  type: 'separator'
}, {
  role: 'quit'
}])

tray.setContextMenu(contextMenu)
