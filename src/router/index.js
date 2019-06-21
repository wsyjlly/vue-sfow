import Vue from '../../static/frames/vue'
import Router from '../../static/frames/vue-router'
import One from '../components/One'
import Cors from '../components/Test/Cors'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/one',
      name: 'One',
      component: One
    },
    {
      path: '/test',
      name: 'Cors',
      component: Cors
    },
    {
      path: '/',
      redirect: '/test'
    }
  ]
})
