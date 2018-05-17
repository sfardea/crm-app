import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Buildings'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/buildings',
      name: 'Buildings',
      component: Posts
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
