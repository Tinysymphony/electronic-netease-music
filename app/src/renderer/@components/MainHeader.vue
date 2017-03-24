<template lang="html">
  <header style="-webkit-app-region: drag" class="hd no-select">
    <div class="left-sec bar-sec">
      <div class="inline app-icon-wp">
        <span class="icon-wytiny app-icon"></span>
        <span class="app-name">云音乐</span>
      </div>
      <div class="inline router-search-wp">
        <span class="icon-left router-icon left-router"></span><span class="icon-left router-icon right-router inline"></span>
        <div class="inline">
          <span class="icon-search search-icon"></span>
          <input type="text" name="" placeholder="搜索音乐，歌手，歌词，用户" class="search-ipt">
        </div>
      </div>
      <div class="inline f-r mail-setting-wp">
        <span class="icon-mail mail-icon"></span>
        <span class="icon-setting"></span>
      </div>
    </div>
    <div class="right-sec bar-sec">
      <div class="my-avatar-wp">
        <img src="http://7xjgb0.com1.z0.glb.clouddn.com/avatar-miyamori.png" class="my-avatar">
      </div>
      <div class="transform-btn f-r" @click="useMusicBox">
        <span class="transform-btn-tail"></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {
    useMusicBox() {
      this.$electron.ipcRenderer.send(this.$ipc.OPEN_MUSIC_BOX);
    }
  },
  components: {}
}
</script>

<style lang="css">
.hd {
height: 60px;
width: 100vw;
background-color: #b52820;
z-index: 100;
cursor: default;
}

.bar-sec {
position: relative;
padding-top: 30px;
display: inline-block;
}

.my-avatar {
position: absolute;
width: 26px;
border-radius: 20px;
top: -24px;
left: 5px;
}

.my-avatar-wp {
width: 100%;
position: relative;
}

.my-avatar-wp::after {
position: absolute;
left: 36px;
top: -10px;
content: '';
width: 0;
height: 0;
border: transparent solid;
border-top-color: #fff;
border-width: 4px;
}

.transform-btn {
position: absolute;
top: -15px;
left: 35px;
width: 14px;
height: 10px;
background: rgba(0, 0, 0, .3);
border-radius: 2px;
box-shadow: 0 0 1px rgba(200, 200, 200, .2) inset;
}

.transform-btn-tail {
position: absolute;
top: 2px;
left: 2px;
display: inline-block;
width: 7px;
height: 3px;
background: #ab2b2b;
}

.app-icon {
font-size: 20px;
}

.left-sec {
position: relative;
width: calc(100vw - 60px);
height: 100%;
border-right: 1px solid #95211a;
padding-right: 20px;
}

.app-icon-wp {
padding-left: 20px;
margin-right: 60px;
line-height: 20px;
color: white;
}

.app-name {
vertical-align: 3px;
font-size: 18px;
}

.router-search-wp {
position: absolute;
top: 28px;
left: 240px;
}

.router-icon {
padding: 5px 7px;
background: #cb1d13;
font-size: 12px;
border-radius: 4px 0 0 4px;
border: 1px solid #a21108;
}

.right-router {
transform: rotate(180deg);
vertical-align: 0.5px;
border-right: none;
}

.left-router {
}

.search-icon {
color: #bbb;
position: absolute;
left: 86px;
top: 5px;
font-size: 14px;
}

.search-ipt {
margin-left: 20px;
padding: 5px 10px 5px 25px;
width: 200px;
border-radius: 50px;
}

.mail-icon {
padding-right: 20px;
}
</style>
