/**
 * Created by TinySymphony on 2017-03-12.
 */

const {remote} = require('electron');
const {Menu, MenuItem} = remote;

var menuList = [{
  label: '播放'
}, {
  label: '添加到播放列表'
}, {
  type: 'separator'
}, {
  label: '分享...'
}, {
  label: '复制链接'
}, {
  label: '下载全部'
}, {
  type: 'separator'
}, {
  label: '编辑歌单信息'
}, {
  label: '删除歌单'
}]

const listMenu = Menu.buildFromTemplate(menuList)
console.log(listMenu);
const songMenu = listMenu
module.exports = {
  listMenu,
  songMenu
}
