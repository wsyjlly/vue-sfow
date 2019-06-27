import Vue from '../../static/frames/vue'
import Router from '../../static/frames/vue-router'
import One from '../components/One'
import Two from '../components/Two'
import Three from '../components/Three'
import Four from '../components/Four'
import Five from '../components/Five'
import Six from '../components/Six'
import Seven from '../components/Seven'
import Eight from '../components/Eight'
import Nine from '../components/Nine'
import Details5 from '../components/Details5'
import Details6 from '../components/Details6'
import Cors from '../components/Test/Cors'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/one',
      name: 'one',
      component: One
    },
    {
      path: '/two',
      name: 'two',
      component: Two
    },
    {
      path: '/three',
      name: 'three',
      component: Three
    },
    {
      path: '/four',
      name: 'four',
      component: Four
    },
    {
      path: '/five',
      name: 'five',
      component: Five,
    },
    {
      path: '/six',
      name: 'six',
      component: Six
    },
    {
      path: '/seven',
      name: 'seven',
      component: Seven
    },
    {
      path: '/eight',
      name: 'eight',
      component: Eight
    },
    {
      path: '/nine',
      name: 'nine',
      component: Nine
    },
    {
      path: '/details5/:id',
      name: 'details5',
      component: Details5
    },
    {
      path: '/details6/:id',
      name: 'details6',
      component: Details6
    },
    {
      path: '/test',
      name: 'cors',
      component: Cors
    },
    {
      path: '/',
      redirect: '/one'
    }
  ]
})
