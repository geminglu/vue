import Vue from 'vue'
import Router from 'vue-router'
import Information from '@/pages/Information'
import Ring from '@/pages/Ring'
import Spicy from '@/pages/Spicy'
import We from '@/pages/We'

Vue.use(Router)

let routes = [
  {path: '/',redirect: 'Information'},
  {path: '/Information',name: 'HelloWorld',component: Information},
  {path: '/Ring',name: 'Ring',component: Ring},
  {path: '/Spicy',name: 'Spicy',component: Spicy},
  {path: '/We',name: 'HelloWorWeld',component: We},
]
export default new Router({
  routes
})
