<template lang="html">
  <div class="main fs0">
    <slot name="left"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {}
  },
  created () {
    if(!this.$store.state.global.songList.isMixture) {
      this.loadSongListWithId({
        id: this.$store.state.global.songList.id
      });
    }
    window.addEventListener('keydown', this.onKeyDown)
    window.addEventListener('keyup', this.onKeyUp)
    window.$holdKeys = {}
  },
  beforeDestory () {
    window.removeEventListener('keydown', this.onKeyDown)
    window.removeEventListener('keyup', this.onKeyUp)
    for(let key in window.$holdKeys) {
      window.$holdKeys[key] = false
    }
  },
  computed: {},
  mounted () {
  },
  methods: {
    ...mapActions([
      'loadSongListWithId'
    ]),
    onKeyDown (e) {
      if(e.keyCode === 91) {
        window.$holdKeys['command'] = true
      } else if (e.keyCode === 16) {
        window.$holdKeys['shift'] = true
      }
    },
    onKeyUp (e) {
      if(e.keyCode === 91) {
        window.$holdKeys['command'] = false
      } else if (e.keyCode === 16) {
        window.$holdKeys['shift'] = false
      }
    }
  },
  components: {}
}
</script>

<style lang="css" scoped>
.main {
  display: inline-block;
  height: calc(100vh - 65px - 60px);
  overflow: hidden;
  margin-bottom: -65px;
}
</style>
