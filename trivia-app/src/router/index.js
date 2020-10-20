import Vue from 'vue'
import VueRouter from 'vue-router'
import TriviaApp from '../components/TriviaApp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'trivia-app',
    component: TriviaApp
  },

]

const router = new VueRouter({
  routes
})

export default router
