import Vue from 'vue'
import Router from 'vue-router'
import Frist from '@/views/first'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '我是第一页',
      component: Frist
    },
    {
      path: "/second",
      name: "我是第二页",
      component: () => import("@/views/second")
    },
    {
      path:"/test1",
      name:"解决方法一",
      component:()=>import("@/views/test1")
    },
    {
      path:"/test2",
      name:"解决方法二",
      component:()=>import("@/views/test2")
    },
    {
      path:"/index",
      name:"测试页",
      component:()=>import("@/views/index")

    }
  ]
})
