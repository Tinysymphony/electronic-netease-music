// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const notification = require('../notification')
const {ipcRenderer} = require('electron')
const $ = require('../IPC_CONSTANTS')

var tinyMusic = new Vue({
  el: '#app',
  data: {
    activePage: {
      id: 'r-fm',
      type: 'r'
    },
    recommendList: [{
      id: 'r-find',
      name: '发现音乐',
      icon: 'icon-music'
    }, {
      id: 'r-fm',
      name: '私人FM',
      icon: 'icon-fm'
    }, {
      id: 'r-mv',
      name: 'MV',
      icon: 'icon-mv'
    }, {
      id: 'r-friend',
      name: '朋友',
      icon: 'icon-friends'
    }],
    myMusic: [{
      id: 'm-download',
      name: '下载',
      icon: 'icon-download'
    }, {
      id: 'm-singer',
      name: '我的歌手',
      icon: 'icon-mine'
    }],
    userList: [{
      id: 'u-like',
      name: '喜欢 ☆',
      icon: 'icon-like'
    }, {
      id: 'u-1',
      name: '偽物同士'
    }, {
      id: 'u-2',
      name: '非传统国语歌选修'
    }, {
      id: 'u-3',
      name: '睡个好觉_(:з」∠)_'
    }],
    favorList: [{
      id: 'f-1',
      name: 'Love Live!'
    }, {
      id: 'f-2',
      name: 'ご注文はうさぎですか'
    }, {
      id: 'f-3',
      name: '国士无双十三面待ち'
    }, {
      id: 'f-4',
      name: '嶺上開花三暗刻'
    }, {
      id: 'f-5',
      name: '立直のみ'
    }, {
      id: 'f-6',
      name: '無駄ツモ'
    }, {
      id: 'f-7',
      name: '六月是你的高考'
    }, {
      id: 'f-8',
      name: '种子歌核心课程'
    }],
  },
  methods: {
    changePage: function (item, type) {
      this.activePage.id = item.id
      this.activePage.type = type
    },
    unDeveloped: function () {
      notification.notify({
        wait: false,
        title: 'Warning',
        message: '非常抱歉，功能尚未开发'
      })
    },
    toggleLyric: function () {
      ipcRenderer.send($.TOGGLE_LYRIC)
    },
    useMusicBox: function () {
      ipcRenderer.send($.OPEN_MUSIC_BOX)
    }
  }
})
