<script>
import routes from '@/router/index'
import HelloWorld from '@/views/Home.vue'
// import { useRouter } from 'vue-router'
import {localGet} from "@/utils";

// const router = useRouter()

routes.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    // 如果路径是 /login 则正常执行
    next()
  } else {
    // 如果不是 /login，判断是否有 token
    if (!localGet('token')) {
      // 如果没有，则跳至登录页面
      next({ path: '/login' })
    } else {
      // 否则继续执行
    next()
    }
  }
  state.showMenu = !noMenu.includes(to.path)
  state.currentPath = to.path
  document.title = pathMap[to.name]
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>

</style>
