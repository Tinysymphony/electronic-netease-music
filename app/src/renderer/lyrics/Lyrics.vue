<template>
  <div style="-webkit-app-region: drag;" class="no-select main">
    <span class="close" id="J-close" @click="closeLyric">x</span>
    <div class="lyric">
      <span class="icon-wytiny icon"></span>云音乐，享受好声音
    </div>
  </div>
</template>

<script>
export default {
  created() {
  },
  methods: {
    closeLyric () {
      this.$electron.ipcRenderer.send(this.$ipc.CLOSE_LYRIC)
    }
  }
}
</script>

<style>
@import '../@common/basic';
@import '../@common/icon';
.main {
  width: 100vw;
  height: 100vh;
}
.lyric {
  text-align: center;
  line-height: 70px;
  font-size: 30px;
  color: #fff;
  font-weight: lighter;
}
.icon {
  vertical-align: middle;
  margin-right: 15px;
}
.close {
  position: fixed;
  left: 10px;
  top: 0px;
  font-size: 20px;
  text-shadow: 0 0 1px #333;
  display: none;
}
body:hover .close{
  display: inline-block;
}
</style>
