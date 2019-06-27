import Vue from '../../static/frames/vue'
import Router from '../../static/frames/vue-router'
import One from '../components/One'
import Two from '../components/Two'
import Three from '../components/Three'
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
      path: '/two',
      name: 'Two',
      component: Two
    },
    {
      path: '/three',
      name: 'Three',
      component: Three
    },
    {
      path: '/test',
      name: 'Cors',
      component: Cors
    },
    {
      path: '/',
      redirect: '/one'
    }
  ]
})
