<template lang="html">
  <div class="left-pad inline no-select">
    <div class="items-pad scroll">
      <section class="list-sec no-select">
        <p class="list-name">推荐</p>
        <p class="list-item"
          @click="changePage(item, 'r')"
          v-bind:class="{'active-item': activePage.id === item.id}"
          v-for="item in recommendList">
          <span v-bind:class="[item.icon, 'item-icon']"></span>
          <span v-text="item.name"></span>
        </p>
      </section>
      <section class="list-sec">
        <p class="list-name">我的音乐</p>
        <p class="list-item"
          @click="changePage(item, 'm')"
          v-bind:class="{'active-item': activePage.id === item.id}"
          v-for="item in myMusic">
          <span v-bind:class="[item.icon, 'item-icon']"></span>
          <span v-text="item.name"></span>
        </p>
      </section>
      <section class="list-sec">
        <p class="list-name">创建的歌单</p>
        <p class="list-item"
          @click="changePage(item, 'u')"
          @contextmenu="listContextMenu"
          v-bind:class="{'active-item': activePage.id === item.id}"
          v-for="item in userList">
          <span v-bind:class="[item.icon || 'icon-list', 'item-icon']"></span>
          <span v-text="item.name"></span>
        </p>
      </section>
      <section class="list-sec">
        <p class="list-name">收藏的歌单</p>
        <p class="list-item"
          @click="changePage(item, 'f')"
          @contextmenu="listContextMenu"
          v-bind:class="{'active-item': activePage.id === item.id}"
          v-for="item in favorList"><span class="icon-list item-icon"></span>
          <span v-text="item.name"></span>
        </p>
      </section>
    </div>
    <div class="playing-pad no-select">
      <img src="http://7xjgb0.com1.z0.glb.clouddn.com/wymusic-1.jpg" class="play-img f-l">
      <div class="playing-info">
        <p class="song-name ellipsis pointer">吉原ラメント</p>
        <p class="singer pointer">wytiny</p>
        <span class="icon-share playing-icon share-icon"></span>
        <span class="icon-like playing-icon suki-icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
      }]
    }
  },
  computed: {},
  mounted () {},
  methods: {
    changePage (item, type) {
      this.activePage.id = item.id
      this.activePage.type = type
    },
    listContextMenu (e) {
      const separator = {
        type: 'separator'
      };
      let menu = this.$electron.remote.Menu.buildFromTemplate([{
        label: '播放'
      }, {
        label: '添加到播放列表'
      }, separator, {
        label: '分享...'
      }, {
        label: '复制链接'
      }, {
        label: '下载全部'
      }, separator, {
        label: '编辑歌单信息'
      }, {
        label: '删除歌单'
      }])
      menu.popup(this.$electron.remote.getCurrentWindow());
    }
  },
  components: {}
}
</script>

<style lang="css" scoped>

.left-pad {
  padding-top: 5px;
  width: 200px;
  border-right: 1px solid #ccc;
  background: rgba(255, 255, 255, 0.48)
}

.items-pad {
  height: calc(100vh - 65px - 60px - 86px);
}

.playing-pad {
  height: 86px;
  width: 200px;
  border-right: 1px solid #ccc;
  border-top: 1px solid #ccc;
}

.playing-info {
  position: relative;
  width: 100%;
  margin-top: 20px;
}

.song-name {
  color: #444;
  width: 80px;
  font-size: 14px;
}

.playing-icon {
  position: absolute;
  right: 5px;
  color: #888;
}

.share-icon {
  top: 0;
}

.suki-icon {
  top: 24px;
}

.singer {
  color: #aaa;
  font-size: 13px;
}

.play-img {
  border-radius: 4px;
  border: 1px solid #ddd;
  width: 62px;
  margin: 10px;
}

.list-sec {
  width: 100%;
  /*padding: 0 12px;*/
  margin-bottom: 12px;
  cursor: default;
}

.list-name {
  font-size: 12px;
  padding: 0 12px;
  color: #888;
  margin-bottom: 10px;
}

.item-icon {
  margin-right: 10px;
  font-size: 17px;
  vertical-align: -3px;
}

.list-item {
  color: #444;
  font-size: 13px;
  padding: 5px 10px 5px 22px;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}

.active-item {
  background: rgba(0, 0, 0, .1);
  position: relative;
}

.active-item::before {
  content: '';
  width: 3px;
  height: 20px;
  background: #d12323;
  position: absolute;
  left: 0;
  top: 4px;
}
</style>
