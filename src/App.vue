<template>
  <v-app>
    <v-main>
      <video-player></video-player>
    </v-main>
  </v-app>
</template>

<script>
import VideoPlayer from './components/VideoPlayer.vue'

export default {
  name: 'App',
  components: {
    VideoPlayer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
