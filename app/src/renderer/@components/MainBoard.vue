<template lang="html">
  <div class="main fs0">
    <slot name="left"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
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
