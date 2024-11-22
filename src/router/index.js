import Vue from 'vue'
import VueRouter from 'vue-router'
import VideoPlayer from '../components/VideoPlayer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'VideoPlayer',
    component: VideoPlayer
  }
]

const router = new VueRouter({
  routes
})

export default router 