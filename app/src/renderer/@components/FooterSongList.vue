<template lang="html">
  <div class="song-pop-list">
    <div class="pop-list-hd">
      <span class="pop-list-hd-btn btn-p-list">播放列表</span><span class="pop-list-hd-btn btn-h-list">历史记录</span>
      <span class="pop-list-close-btn f-r" @click="closeCallback">x</span>
    </div>
    <div class="pop-list-ctrl">
      <span v-text="'总' + songList.length + '首'"></span>
    </div>
    <div class="pop-list-songs">
      <p class="song-item ellipsis"
        v-bind:class="{'active-song-item': currentSong.id === item.id}"
        v-for="item in songList"
        @contextmenu="songContextMenu(item)">
        <span v-text="item.name" class="inline ellipsis p-song-name"></span>
        <span v-text="getArtistsString(item)" class="inline ellipsis p-song-artists"></span>
        <span v-text="getDuration(item)" class="inline ellipsis p-song-time mono"></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      songList: []
    }
  },
  props: {
    closeCallback: {
      type: Function,
      default: () => {}
    }
  },
  computed: {},
  mounted () {
  },
  methods: {
    songContextMenu (item) {
      var menu = this.createSongMenu(item)
      menu.popup(this.$electron.remote.getCurrentWindow())
    },
    getArtistsString (item) {
      return item.artists.map(item => item.name).join('，')
    },
    getDuration (item) {
      let seconds = (item.duration / 1000).toFixed(0)
      let min
      let sec
      if (seconds < 3600) {
        sec = seconds % 60;
        min = (seconds / 60).toFixed(0)
        return (min < 10 ? 0 + min : min) + ':' + (sec < 10 ? '0' + sec : sec)
      } else {
        var h = (seconds / 3600).toFixed(0)
        sec = (seconds - h * 3600) % 60
        min = ((seconds - h * 3600) / 60).toFixed(0)
        return (h < 10 ? '0' + h : h) + ':' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec)
      }
    },
    createSongMenu(item) {
      const separator = {
        type: 'separator'
      }

      return this.$electron.remote.Menu.buildFromTemplate([{
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
  },
  components: {}
}
</script>

<style lang="css" scoped>
.song-pop-list {
  cursor: default;
  position: absolute;;
  top: -451px;
  right: 0;
  height: 450px;
  width: 560px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  overflow: hidden;
  box-shadow: -2px -2px 6px rgba(0, 0, 0, .34);
  font-size: 12px;
}

.pop-list-hd {
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: linear-gradient(180deg, rgba(230,230,230,.94), rgba(230,230,230,.82));
}

.pop-list-ctrl {
  height: 30px;
  line-height: 30px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background: #fcfcfc;
  color: #999;
  padding-left: 20px;
}

.pop-list-hd-btn {
  padding: 2px 38px;
  color: #666;
  box-shadow: 0 0 1px rgba(0,0,0,.3);
}

.btn-p-list {
  color: #fff;
  background: #666;
  border-radius: 2px 0   0 2px;
}

.btn-h-list {
  background-color: #fff;
  border-radius: 0 2px 2px 0;
}

.pop-list-close-btn {
  display: inline-block;
  color: #888;
  font-size: 16px;
  margin-right: 10px;
}

.pop-list-songs {
  overflow: auto;
  width: 100%;
  height: 390px;
  background: #fcfcfc;
  padding-bottom: 60px;
  /*background-image: linear-gradient(180deg, #f4f4f4, #f4f4f4 50%, #fcfcfc 0);
  background-size: 60px 60px;
  background-repeat: repeat;*/
}

.song-item {
  height: 30px;
  line-height: 30px;
  padding-left: 20px;
  color: #444;
  background: #fcfcfc;
}
.song-item:nth-child(odd) {
  background: #f4f4f4;
}
.active-song-item {
  position: relative;
}
.active-song-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 5px;
  width: 3px;
  height: 20px;
  background: #d12323;
}
.p-song-name {
  width: 300px;
}
.p-song-artists {
  width: 140px;
}
.p-song-time {
  width: 80px;
  padding-right: 20px;
  text-align: right;
}
</style>
