/**
 * Created by TinySymphony on 2017-03-07.
 */

// Application Menu
import {toggleLyric} from './lyricWindow'
import {
  togglePlayStatus,
  nextSong,
  prevSong,
  volumeUp,
  volumeDown,
  addFavor
} from './ctrl'
import {
  app,
  Menu
} from 'electron'
/**
 * MenuItem  click(menuItem, browserWindow, event)
 */
let menuList = [{
  label: app.getName(),
  submenu: [{
    // 关于
    role: 'about'
  }, {
    // 分隔线
    type: 'separator'
  }, {
    // 系统服务
    role: 'services',
    submenu: []
  }, {
    type: 'separator'
  }, {
    // 朗读
    label: 'Speech',
    submenu: [{
      role: 'startspeaking'
    }, {
      role: 'stopspeaking'
    }]
  }, {
    type: 'separator'
  }, {
    // 隐藏当前窗口
    role: 'hide'
  }, {
    // 隐藏所有窗口
    role: 'hideothers'
  }, {
    // 显示
    role: 'unhide'
  }, {
    type: 'separator'
  }, {
    // 退出应用
    role: 'quit'
  }]
}, {
  // 编辑菜单
  label: 'Edit',
  submenu: [{
    // 撤销
    role: 'undo'
  }, {
    // 重做
    role: 'redo'
  }, {
    role: 'copy'
  }, {
    role: 'paste'
  }, {
    role: 'pasteandmatchstyle'
  }, {
    role: 'selectall'
  }, {
    role: 'delete'
  }]
}, {
  // 窗口菜单
  label: 'Window',
  submenu: [{
    role: 'minimize'
  }, {
    role: 'close'
  }, {
    role: 'zoomin'
  }, {
    role: 'zoomout'
  }, {
    role: 'resetzoom'
  }, {
    role: 'help'
  }]
}, {
  // 控制菜单
  label: 'Control',
  submenu: [{
    label: 'Stop/Resume',
    accelerator: 'Space',
    click: togglePlayStatus
  }, {
    label: 'Next',
    accelerator: 'CmdOrCtrl+Right',
    click: nextSong
  }, {
    label: 'Prev',
    accelerator: 'CmdOrCtrl+Left',
    click: prevSong
  }, {
    label: 'Volume Up',
    accelerator: 'CmdOrCtrl+Up',
    click: volumeUp
  }, {
    label: 'Volume Down',
    accelerator: 'CmdOrCtrl+Down',
    click: volumeDown
  }, {
    label: 'Like',
    accelerator: 'CmdOrCtrl+L',
    click: addFavor
  }, {
    label: 'Toggle Lyric',
    accelerator: 'CmdOrCtrl+R',
    click: toggleLyric
  }]
}]

if (process.env.NODE_ENV === 'development') {
  menuList.push({
    label: 'Developer',
    submenu: [{
      role: 'toggledevtools'
    }, {
      label: 'refreh',
      accelerator: 'CmdOrCtrl+D',
      click: function (item, browserWindow, e) {
        browserWindow.reload()
      }
    }]
  })
}

const menu = Menu.buildFromTemplate(menuList)
// add menu after application is ready
Menu.setApplicationMenu(menu)
