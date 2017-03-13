/**
 * Created by TinySymphony on 2017-03-12.
 */

const {
  remote
} = require('electron');
const {
  Menu,
  MenuItem
} = remote;

const separator = {
  type: 'separator'
}

var listMenuList = [{
  label: '播放'
}, {
  label: '添加到播放列表'
}, separator, {
  label: '分享...'
}, {
  label: '复制链接'
}, {
  label: '下载全部'
}, separator, {
  label: '编辑歌单信息'
}, {
  label: '删除歌单'
}]

var songMenuList = [{

}]

function createSongMenu(item) {
  return Menu.buildFromTemplate([{
    label: '播放'
  }, separator, {
    label: '专辑：' + item.album.name || '...'
  }, {
    label: '歌手：' + item.artists[0].name
  }, {
    label: '来自：...'
  }, separator, {
    label: '收藏'
  }, {
    label: '分享...'
  }, {
    label: '复制链接'
  }, {
    label: '下载'
  }, separator, {
    label: '从列表中删除'
  }]);
}

const listMenu = Menu.buildFromTemplate(listMenuList)
const songMenu = Menu.buildFromTemplate(songMenuList)
module.exports = {
  listMenu,
  songMenu,
  createSongMenu
}
