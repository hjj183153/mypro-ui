import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//import Header from '@/components/Header'
//import Footer from '@/components/Footer'
import index from '@/components/index'
import recipe from '@/components/recipe'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {path:'/index',name:'index',component:index},
    //{path:'/Header',name:'Header',component:Header},
    //{path:'/Footer',name:'Footer',component:Footer}
    {path:'/recipe',name:'recipe',component:recipe}
  ]
})
