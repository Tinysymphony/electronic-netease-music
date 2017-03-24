<template lang="html">
  <div class="inline progress-bar">
    <div class="inline loaded" v-bind:style="{width: barWidth * 100 + '%'}"></div>
    <span class="dot"
      v-bind:style="{left: dotLeft * 100 + '%'}"
      v-bind:class="{'focus-dot': dotFocus}"
      @mousedown="moveStart">·</span>
  </div>
</template>

<script>
export default {
  mounted () {
    this.radiusOffset = this.getButtonRadiusOffset()
    let max = this.getFullWidth()
    this.barWidth = this.initValue / this.maxValue
    this.dotLeft = this.initValue / this.maxValue - this.radiusOffset / max
    window.addEventListener('mousemove', this.move)
    window.addEventListener('mouseup', this.moveEnd)
  },
  beforeDestroy () {
    window.removeEventListener('mousemove', this.move)
    window.removeEventListener('mouseup', this.moveEnd)
  },
  data () {
    return {
      barWidth: 0,
      dotLeft: 0,
      value: this.initValue,
      dotFocus: false,
      radiusOffset: 0
    }
  },
  props: {
    initValue: Number,
    maxValue: Number,
    onChange: Function,
    triggerPattern: String
  },
  computed: {},
  methods: {
    moveStart (e) {
      this.dotFocus = true;
    },
    move (e) {
      if(!this.dotFocus) return
      let width = this.getFullWidth()
      let pos = e.clientX - this.getLeftOffset() - this.radiusOffset
      if (pos < 0) pos = 0
      let el = this.$el
      if (pos > width) pos = width
      this.barWidth = pos / width
      this.dotLeft = (pos - this.radiusOffset) / width
      this.value = this.barWidth * this.maxValue
      this.triggerPattern !== 'end' && this.onChange && this.onChange(this.value)
    },
    moveEnd (e) {
      this.dotFocus = false;
      this.onChange && this.onChange(this.value)
    },
    getFullWidth () {
      return parseInt(window.getComputedStyle(this.$el, null).getPropertyValue('width'), 10)
    },
    getLeftOffset () {
      return this.$el.getBoundingClientRect().left
    },
    getButtonRadiusOffset () {
      return parseInt(window.getComputedStyle(this.$el.querySelector('.dot'), null).getPropertyValue('width'), 10) / 2
    }
  },
  components: {}
}
</script>

<style lang="css">

.progress-bar {
  position: relative;

  height: 4px;
  border-radius: 2px;
  background: #c2c2c2;
  vertical-align: middle;
}

.loaded {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 4px;
  border-radius: 2px;
  background: #d12323;
}

.dot {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: #fff;
  border-radius: 8px;
  position: absolute;
  left: 0;
  top: -6px;
  box-shadow: 0 0 1px #666;
  text-align: center;
  color: #d12323;
  line-height: 17px;
  font-size: 24px;
}

.focus-dot {
  background: #f0f0f0;
}

</style>
