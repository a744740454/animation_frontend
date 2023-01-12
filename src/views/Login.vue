<template>

  <div class="login_box">
    <div class="common-layout">
      <el-container>
        <el-header><h2>创建账户</h2></el-header>
        <el-main>
          <el-input v-model="username" placeholder="账户" class="input_margin" />
          <el-input class="input_margin" type="password" v-model="password" placeholder="密码" show-password />
          <el-button class="input_margin" type="primary" round @click="login">登录</el-button>
          <el-button class="input_margin" type="primary" round>注册</el-button>
        </el-main>
        <el-footer>用其他账户登录</el-footer>
      </el-container>
    </div>

  </div>
  <HomeBanner></HomeBanner>
  <Footer></Footer>
</template>

<style scoped>
.login_box {
  width: 20%;
  height: 70%;
  position: absolute;
  right: 200px;
  top: 45px;
  background: #FFFFFF;
  box-shadow: 9px 4px 21px rgba(202, 202, 202, 0.25);
  border-radius: 30px;
  z-index: 100;
}

.input_margin{
  margin-top: 10px;
}
</style>

<script setup>
import Footer from "@/components/Footer.vue";
import {login_api} from "../utils/api";
import HomeBanner from '@/components/HomeBanner.vue'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import router from "@/router";
import {localSet} from "@/utils";

//
const username = ref('')
const password = ref('')
function login(){
  //校验密码是否为空
  if (!password.value){
    ElMessage.error('密码不能为空')
    return
  }

  //访问登录接口，登录成功的情况下将token存入localStorage
  let data = {
    username:username.value,
    password:password.value
  }
  login_api(data).then(res=>{
    localSet('token',res.jwt)
    router.push("/")
    console.log(res)
  })
}

</script>