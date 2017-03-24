module.exports = Vue.component('process-bar', {
  template: `<div class="inline process-bar" @mouseup="moveEnd" @mousemove="move">
    <div class="inline loaded" v-bind:style="{width: currentLeft}"></div>
    <span class="dot" v-bind:style="{left: currentLeft}" v-bind:class="{'focus-dot': focus}" @mousedown="moveStart" >·</span>
  </div>`,
  data: function () {
    return {
      focus: false,
      currentLeft: 0
    };
  },
  methods: {
    moveStart: function (e) {
      this.focus = true;
    },
    move: function (e) {
      if (!this.focus) return;
      console.log(e.offsetX);
      this.currentLeft = e.offsetX + 'px';
    },
    moveEnd: function (e) {
      this.focus = false;
    }
  }
});
