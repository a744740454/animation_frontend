import HelloWorld from '@/views/Home.vue'
import test from '@/views/test.vue'


import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  { path: '/test', component: test },
  { path: '/', component: HelloWorld },
  { path: '/HelloWorld', component: HelloWorld },


]

export default createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
