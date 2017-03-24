<template lang="html">
  <div class="radio-pad inline f-r scroll">
    <div class="inline main-pad-sec no-select">
      <div class="inline">
        <img src="http://7xjgb0.com1.z0.glb.clouddn.com/wymusic-2.png" class="p-img prev-img">
      </div>
      <div class="inline current-wp">
        <img src="http://7xjgb0.com1.z0.glb.clouddn.com/wymusic-1.jpg" class="p-img current-img">
        <span class="current-status icon-stop inline" @click="stopMusic"></span>
      </div>
      <div class="main-play-ctrl">
        <span class="icon-like click" @click="unDeveloped"></span>
        <span class="icon-gomi click" @click="unDeveloped"></span>
        <span class="icon-next-2 click" @click="unDeveloped"></span>
        <span class="icon-more click" @click="unDeveloped"></span>
      </div>
    </div>
    <div class="inline main-pad-sec info-lyric">
      <p class="name-title">我可能听了假的云音乐 <span class="label">MV</span> <span class="label">320k</span></p>
      <p class="info"><span class="set">专辑：<a class="link">蜜汁新歌慢摇116</a></span><span class="main-singer">歌手：<a class="link">テレサ・テン</a></span></p>
      <p class="linear-bar"></p>
      <div class="lyric-wp">
        <div class="scroll lyric-pad">
          <p class="lyric-item">作曲：荒木とよひさ</p>
          <p class="lyric-item">作词：三木たかし</p>
          <div class="lyric-item">
            <p>窓に西日があたる部屋は</p>
            <p>夕阳透过窗照进空房</p>
          </div>
          <div class="lyric-item active-lyric">
            <p>いつもあなたの匂いがするわ</p>
            <p>时常能嗅到你的味道</p>
          </div>
          <div class="lyric-item">
            <p>ひとり暮らせば思い出すから</p>
            <p>一人独处时回忆泛起</p>
          </div>
          <div class="lyric-item">
            <p>壁の傷も残したままおいておくわ</p>
            <p>墙壁的裂痕也放任不理</p>
          </div>
          <div class="lyric-item">
            <p>愛をつぐなえば別れになるけど</p>
            <p>想偿还爱却还是分开</p>
          </div>
          <div class="lyric-item">
            <p>こんな女でも忘れないでね</p>
            <p>别忘了这样的女人</p>
          </div>
        </div>
      </div>
    </div>
    <div class="comment-wp">
      <p class="comment-title no-select">听友评论 <span class="comment-num">(已有1024条评论)</span></p>
      <div class="comment-bar"></div>
      <div class="comment-input">
        <textarea name="comment" class="comment-textarea"></textarea>
        <div class="comment-ctrl no-select">
          <span class="icon-smile"></span>
          <span class="icon-at"></span>
          <span class="comment-btn f-r">评论</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
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
      this.playing = false;
      document.getElementById('wt-player').pause()
    }
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
.radio-pad {
  height: calc(100vh - 65px - 60px);
  width: calc(100vw - 200px);
  padding: 4rem calc(50% - 470px);
  background: #fafafa;
}
.p-img {
  width: 260px;
  border: 1px solid #888;
  vertical-align: middle;
}

.p-img.current-img {
  margin-left: -170px;
  /*-webkit-box-reflect: below 0 -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(70%, transparent) , to(rgba(250, 250, 250, 0.1)));*/
}

.current-wp {
  position: relative;
}

.current-wp .current-status {
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background: rgba(0, 0, 0, .38);
  box-shadow: 0 0 1px #777;
  text-align: center;
  line-height: 48px;
  font-size: 22px;
  color: #eee;
}

.p-img.prev-img {
  width: 200px;
  /*-webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(80%, transparent) , to(rgba(250, 250, 250, 0.1)));*/
}

.main-play-ctrl {
  margin-top: 50px;
  color: #777;
}

.main-play-ctrl span {
  display: inline-block;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  font-size: 20px;
  border: 1px solid #dedede;
  text-align: center;
  line-height: 44px;
  margin: 0 14px;
}

.name-title {
  color: #333;
  font-size: 22px;
  margin-top: -15px;
}

.label {
  display: inline-block;
  color: #d12323;
  font-size: 12px;
  padding: 1px 2px;
  border-radius: 2px;
  line-height: 12px;
  border: 1px solid #d12323;
  vertical-align: 4px;
  -webkit-user-select: none;
}

.info-lyric {
  padding-left: 30px;
}

.lyric-item.active-lyric {
  color: #b3291c;
  font-weight: bold;
}

.info {
  margin-top: 20px;
  font-size: 12px;
  color: #aaa;
}

.main-pad-sec {
  vertical-align: top;
}

.main-singer {
  margin-left: 80px;
}

.linear-bar {
  height: 1px;
  width: 100%;
  margin-top: 15px;
  background: linear-gradient(to right, #dedede, #dedede 70%, transparent 100%);
}

.lyric-pad {
  width: 115%;
  height: 280px;
  margin-top: 10px;
  border-right: 1px solid #dedede;
}

.lyric-pad::-webkit-scrollbar-thumb {
  border-radius: 0;
  background: rgba(200, 200, 200, .8);
}

.lyric-item {
  font-size: 13px;
  color: #666;
  line-height: 26px;
  margin: 10px 0;
}

.comment-wp {
  width: 100%;
  margin-top: 30px;
  color: #333;
}

.comment-title {
  font-size: 20px;
}

.comment-bar {
  position: relative;
  height: 1px;
  width: 100%;
  margin-top: 10px;
  background-color: #ddd;
}

.comment-bar::before {
  content: '';
  position: absolute;
  height: 4px;
  width: 80px;
  left: 0;
  top: -4px;
  background: #ddd;
}

.comment-num {
  color: #888;
  font-size: 12px;
  margin-left: 10px;
}

.comment-input {
  position: relative;
  border: 1px solid #bbb;
  margin-top: 20px;
  padding: 10px;
  padding-bottom: 20px;
}

.comment-textarea {
  border: 1px solid #bbb;
  border-radius: 4px;
  font-size: 12px;
  padding: 10px;
  width: 100%;
  height: 44px;
  resize: none;
}

.comment-input::after {
  content: '140';
  position: absolute;
  right: 15px;
  top: 35px;
  font-size: 12px;
  color: #aaa;
}

.comment-ctrl {
  color: #555;
  font-size: 20px;
  margin-top: 5px;
}

.comment-btn {
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 12px;
  box-shadow: 0 0 1px #333;
}

.link {
  color: #3884c3;
  cursor: pointer;
}
</style>
