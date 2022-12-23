import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
import ElementPlus from 'element-plus'
import '@/assets/global.css'

const app = createApp(App)
app.use(Router)
app.use(ElementPlus)

// // 全局组件实现
// app.component(
//   // 注册的名字
//   'HelloWorld',
//   // 组件的实现
//   {
//     'HelloWorld':HelloWorld
//   }
// )



app.mount('#app')