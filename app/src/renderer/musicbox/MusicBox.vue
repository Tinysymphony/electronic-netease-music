<template lang="html">
  <div id="box" @mouseenter="showMainCtrl" @mouseleave="hideMainCtrl">
    <div class="hd no-select" style="-webkit-app-region: drag;">
      <div class="inline btn-wp">
        <span class="close btn" id="J-close" @click="hideMusicBox">x</span>
        <span class="open btn" id="J-open" @click="openMainWindow"></span>
      </div>
      <div class="inline img-wp">
        <img src="http://7xjgb0.com1.z0.glb.clouddn.com/wymusic-1.jpg" class="m-img">
      </div>
      <div class="inline other-wp">
        <div>
          <div class="inline info-wp">
            <template v-if="isShowInfo">
              <p class="m-name ellipsis">我可能听了假的云音乐</p>
              <p>wytiny</p>
            </template>
            <template v-else>
              <div class="main-ctrl-wp">
                <span class="icon-prev main-ctrl"></span>
                <span class="icon-play main-ctrl play-ctrl"></span>
                <span class="icon-next main-ctrl"></span>
              </div>
            </template>
          </div>
          <div class="inline ctrl-wp">
            <span class="icon-like"></span>
            <span class="icon-lyric lyric-icon" @click="toggleLyric"></span>
            <span class="icon-volume"></span>
            <span class="icon-list" @click="toggleList"></span>
          </div>
        </div>
        <div class="progress">

        </div>
      </div>
    </div>
    <div class="song-list scroll">
      <p class="song-item ellipsis"
        v-bind:class="{'active-item': currentSong.id === item.id}"
        v-for="item in songList">
        {{item.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
    }
  },
  methods: {
    showMainCtrl () {
      this.isShowInfo = false
    },
    hideMainCtrl () {
      this.isShowInfo = true
    },
    hideMusicBox () {
      console.log('hide');
      this.$electron.ipcRenderer.send(this.$ipc.HIDE_MUSIC_BOX)
    },
    openMainWindow () {
      this.$electron.ipcRenderer.send(this.$ipc.CLOSE_MUSIC_BOX)
    },
    toggleList () {
      this.isShowList = !this.isShowList
      this.$electron.ipcRenderer.send(this.$ipc.TOGGLE_BOX_LIST)
    },
    toggleLyric () {
      this.$electron.ipcRenderer.send(this.$ipc.TOGGLE_LYRIC)
    }
  }
}
</script>

<style lang="css">
@import '../@common/basic';
@import '../@common/icon';
body {
  height: 100vh;
  width: 100vw;
  background: #fff;
  color: #888;
}
.close {
  font-size: 20px;
}
.open {
  width: 10px;
  height: 8px;
  border: 2px solid #888;
  border-radius: 2px;
}
.btn {
  cursor: pointer;
  display: block;
}
.btn-wp {
  width: 16px;
}
.m-img {
  width: 42px;
  vertical-align: top;
  border: 1px solid #ccc;
  border-radius: 1px;
}
.m-name {
  color: #666;
}
.info-wp {
  width: 140px;
  height: 40px;
  padding: 3px;
  text-align: center;
}
.main-ctrl {
  display: inline-block;
  font-size: 18px;
  color: #666;
  margin: 0 4px;
}
.main-ctrl-wp {
  line-height: 40px;
  vertical-align: 4px;
}
.play-ctrl {
  width: 30px;
  height: 30px;
  line-height: 26px;
  border: 2px solid #666;
  border-radius: 50%;
  padding-left: 4px;
  text-align: center;
  font-size: 16px;
  vertical-align: top;
}
.other-wp {
  vertical-align: top;
  font-size: 12px;
}
.ctrl-wp {
  color: #777;
  font-size: 18px;
  vertical-align: top;
  line-height: 40px;
}
.ctrl-wp span {
  padding: 0 3px;
}
.lyric-icon {
  font-size: 24px;
  vertical-align: -2px;
}
.progress {
  position: relative;
  width: 100%;
  height: 2px;
  margin-top: 3px;
  background: #ccc;
}
.progress::after {
  content: '';
  position: absolute;
  top: 0;
  width: 0;
  height: 2px;
  width: 60%;
  background: #d12323
}
.hd {
  border-bottom: 1px solid #ccc;
  box-shadow: 0 -1px 4px #999;
  padding: 5px;
  padding-bottom: 10px;
}
.song-list {
  height: calc(100vh - 40px);
  overflow: auto;
  background-image: linear-gradient(180deg, #f4f4f4, #f4f4f4 50%, #fcfcfc 0);
  background-size: 68px 68px;
  background-repeat: repeat;
}
.song-item {
  line-height: 26px;
  padding: 4px 22px;
  font-size: 12px;
  color: #444;
  background: #fcfcfc;
}
.song-item:nth-child(odd) {
  background: #f4f4f4;
}
.active-item {
  position: relative;
}
.active-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 6px;
  width: 3px;
  height: 22px;
  background: #d12323;
}
</style>
