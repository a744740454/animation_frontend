<script setup>
import Footer from "@/components/Footer.vue";
import HomeBanner from '@/components/HomeBanner.vue'

</script>

<template>

  <div class="login_box">
    <div class="common-layout">
      <el-container>
        <el-header>Header</el-header>
        <el-main><el-button type="primary" round>登录 </el-button></el-main>
        <el-footer>Footer</el-footer>
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
</style>
