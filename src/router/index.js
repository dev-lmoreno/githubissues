import Vue from 'vue'
import Router from 'vue-router'
import Issues from '@/components/Issues'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Issues',
      component: Issues
    }
  ]
})
