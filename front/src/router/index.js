import Vue from 'vue'
import Router from 'vue-router'
import Background from '../components/background/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'background',
      component: Background
    }
  ]
})
