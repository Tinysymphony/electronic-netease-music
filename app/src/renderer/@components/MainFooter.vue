<template lang="html">
  <footer class="fix ft no-select" id="J-footer">
    <footer-song-list
      v-if="showPopupSongList" v-cloak
      :close-callback="closePopupSongList"/>
    <div class="inline ctrl-btn prev-btn" @click="unDeveloped">
      <span class="icon-prev"></span>
    </div>
    <div class="inline ctrl-btn play-btn" @click="playing ? stopMusic() : startMusic()">
      <span v-bind:class="{'icon-play': !playing, 'icon-stop': playing}"></span>
    </div>
    <div class="inline ctrl-btn next-btn" @click="unDeveloped">
      <span class="icon-next"></span>
    </div>
    <progress-bar
      class="progress"
      :init-value="progressBar.current"
      :max-value="progressBar.max"
      :on-change="changeProgress"
      trigger-pattern="end"/>
    <span class="ft-time">2:23 / 4:12</span>
    <div class="inline volume-sec">
      <span class="icon-volume"></span>
    </div>
    <div class="inline volume-bar">
    </div>
    <div class="inline f-r right-ctrl">
      <span class="icon-single icon"></span>
      <span class="icon-lyric lyric-icon icon" @click="toggleLyric"></span>
      <span class="icon-list list-icon icon" @click="togglePopupSongList"></span>
      <span class="num" @click="togglePopupSongList" v-text="listNum"></span>
    </div>
  </footer>
</template>

<script>
import FooterSongList from '@components/FooterSongList'
import ProgressBar from '@components/ProgressBar'
export default {
  data () {
    return {
      progressBar: {
        current: 20,
        max: 123
      },
      listNum: 0,
      currentLeft: 0,
      currentTime: 0,
      playing: false,
      showPopupSongList: false
    }
  },
  computed: {},
  mounted () {},
  methods: {
    unDeveloped () {
      this.$notification.notify({
        wait: false,
        title: 'Warning',
        message: '非常抱歉，功能尚未开发'
      })
    },
    stopMusic () {
      this.playing = false
      // TOREFACTOR
      document.getElementById('wt-player').pause()
    },
    startMusic () {
      this.playing = true;
      // TOREFACTOR
      document.getElementById('wt-player').play()
    },
    toggleLyric () {
      this.$electron.ipcRenderer.send(this.$ipc.TOGGLE_LYRIC)
    },
    togglePopupSongList (e) {
      this.showPopupSongList = !this.showPopupSongList
    },
    closePopupSongList (e) {
      this.showPopupSongList = false
    },
    changeProgress (val) {
      this.progressBar.current = val
    }
  },
  components: {
    FooterSongList,
    ProgressBar
  }
}
</script>

<style lang="css" scoped>
.ft {
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 65px;
  border-top: 1px solid #ccc;
  background: rgba(255, 255, 255, 0.48);
  line-height: 65px;
  padding-right: 15px;
  cursor: default;
}

.progress {
  width: calc(100vw - 600px);
  margin: 0 20px 0 36px;
}

.ctrl-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #d12323;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  padding-top: 1px;
  margin-left: 20px;
}

.play-btn {
  width: 35px;
  height: 35px;
  line-height: 35px;
}

.volume-sec {
  margin-left: 20px;
  color: #666;
  vertical-align: -2px;
}

.ft-time {
  color: #999;
  font-size: 12px;
}

.volume-bar {
  position: relative;
  width: 100px;
  height: 4px;
  border-radius: 2px;
  background: #d12323;
  vertical-align: middle;;
}

.volume-bar::after {
  content: '';
  display: inline-block;
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background: #fff;
  box-shadow: 0 0 1px #999;
  right: -5px;
  top: -5px;
}

.right-ctrl {
  color: #555;
  font-size: 18px;
}

.right-ctrl .icon {
  margin: 0 5px;
  vertical-align: middle;
}

.lyric-icon {
  font-size: 25px;
}

.right-ctrl .list-icon {
  margin-right: 2px;
}

.num {
  display: inline-block;
  background: #bbb;
  height: 16px;
  padding: 0 5px;
  border-radius: 10px;
  font-size: 10px;
  line-height: 14px;
  color: #eee;
  vertical-align: middle;
}
</style>
