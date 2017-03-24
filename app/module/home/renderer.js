// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {remote, ipcRenderer} = require('electron');
const notification = require('../notification');
const $ = require('../IPC_CONSTANTS');

const {listMenu, createSongMenu} = require('./menu');

const $http = require('../fetch');

window.$music = new Vue({
  created: function () {
    $http.getSongs([27808044], function (err, res, data) {
      var data = JSON.parse(res.body);
      var $player = document.getElementById('wt-player');
      $player.src = data.songs[0].mp3Url;
      // $player.play();
    });
    $http.getPlayList(66497320, (err, res, data) => {
      var data = JSON.parse(res.body);
      this.listNum = data.result.tracks.length;
      this.songList = data.result.tracks;
    });
    require('../ipcRenderer');
    window.addEventListener('mousemove', this.move);
    window.addEventListener('mouseup', this.moveEnd);
  },
  el: '#app',
  data: {
    progressBar: {
      focus: false,
      currentLeft: 0,
      posX: 0
    },
    currentLeft: 0,
    currentTime: 0,
    // test ends
    currentSong: {
      id: 25788001
    },
    songList: [],
    showPopupSongList: false,
    playing: false,
    listNum: 0,
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
      ipcRenderer.send($.TOGGLE_LYRIC);
    },
    useMusicBox: function () {
      ipcRenderer.send($.OPEN_MUSIC_BOX);
    },
    stopMusic: function () {
      this.playing = false;
      document.getElementById('wt-player').pause();
    },
    startMusic: function () {
      this.playing = true;
      document.getElementById('wt-player').play();
    },
    // 右键点击
    listContextMenu: function (e) {
      e.preventDefault();
      listMenu.popup(remote.getCurrentWindow());
    },
    songContextMenu: function (item) {
      var menu = createSongMenu(item);
      menu.popup(remote.getCurrentWindow());
    },
    togglePopupSongList: function (e) {
      this.showPopupSongList = !this.showPopupSongList;
    },
    closePopupSongList: function (e) {
      this.showPopupSongList = false;
    },
    getArtistsString: function (item) {
      return item.artists.map(item => item.name).join('，');
    },
    getDuration: function (item) {
      var seconds = (item.duration / 1000).toFixed(0),
        sec, min;
      if (seconds < 3600) {
        sec = seconds % 60;
        min = (seconds / 60).toFixed(0);
        return (min < 10 ? 0 + min : min) + ':' + (sec < 10 ? '0' + sec : sec);
      } else {
        var h = (seconds / 3600).toFixed(0);
        sec = (seconds - h * 3600) % 60;
        min = ((seconds - h * 3600) / 60).toFixed(0);
        return (h < 10 ? '0' + h : h) + ':' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec);
      }
    },
    // test
    moveStart: function (e) {
      this.progressBar.focus = true;
      this.progressBar.posX = e.clientX;
    },
    move: function (e) {
      if (!this.progressBar.focus) return;
      // validate
      var pos = e.clientX - 214;
      if (pos < - 8) pos = -8;
      var el = document.querySelector('.progress-bar');
      var width = parseInt(window.getComputedStyle(el, null).getPropertyValue('width'), 10);
      if (pos > width - 8) pos = width - 8;
      this.progressBar.currentLeft = pos;
    },
    moveEnd: function (e) {
      this.progressBar.focus = false;
    }
  },
  components: {
  }
})
