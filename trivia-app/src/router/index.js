import Vue from 'vue'
import VueRouter from 'vue-router'
import TriviaApp from '../components/TriviaApp.vue'
import ChuckNorris from '../components/ChuckNorris.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'trivia-app',
    component: TriviaApp
  },
  {
    path: '/chuck',
    name: 'chuck',
    component: ChuckNorris
  },

]

const router = new VueRouter({
  routes
})

export default router
