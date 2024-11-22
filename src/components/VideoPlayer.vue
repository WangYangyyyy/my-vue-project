
<template>
  <div class="video-container">
    <canvas ref="videoCanvas"></canvas>
  </div>
</template>

<script>
import JSMpeg from 'jsmpeg-player'

export default {
  name: 'VideoPlayer',
  data() {
    return {
      player: null
    }
  },
  mounted() {
    this.connectWebSocket()
  },
  methods: {
    connectWebSocket() {
      const canvas = this.$refs.videoCanvas
      const url = 'ws://localhost:9998'
      
      this.player = new JSMpeg.Player(url, {
        canvas: canvas,
        autoplay: true,
        audio: false,
        loop: true
      })
    }
  },
  beforeDestroy() {
    if (this.player) {
      this.player.destroy()
    }
  }
}
</script>

<style scoped>
.video-container {
  width: 100%;
  height: 100%;
}
canvas {
  width: 100%;
  height: 100%;
  background: #000;
}
</style>