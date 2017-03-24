import {ipcRenderer} from 'electron'
import $ from '@src/IPC_CONSTANTS'
import Vue from 'vue'
var musicBox = new Vue({
  el: '#box',
  data: {
    currentSong: {
      id: 's-100'
    },
    isShowInfo: true,
    songList: [{
      name: '吉原ラメント'
    }, {
      name: 'Ineter.Ming'
    }, {
      name: '突然的自我'
    }, {
      name: 'Sunrise'
    }, {
      id: 's-100',
      name: '我可能听了假的云音乐'
    }, {
      name: 'メトロノーム'
    }, {
      name: 'Hello XG'
    }, {
      name: 'Strikingly'
    }, {
      name: 'Alibaba'
    }, {
      name: 'Tencent'
    }, {
      name: 'NetEase'
    }]
  },
  methods: {
    showMainCtrl: function () {
      this.isShowInfo = false
    },
    hideMainCtrl: function () {
      this.isShowInfo = true
    },
    openMainWindow: function () {
      ipcRenderer.send($.CLOSE_MUSIC_BOX)
    },
    toggleList: function () {
      this.isShowList = !this.isShowList
      ipcRenderer.send($.TOGGLE_BOX_LIST)
    },
    toggleLyric: function () {
      ipcRenderer.send($.TOGGLE_LYRIC)
    }
  }
})
