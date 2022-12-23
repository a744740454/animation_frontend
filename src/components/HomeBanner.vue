<template>
  <div class="banner">
    <swiper
        :spaceBetween="30"
        :effect="'fade'"
        :modules="modules"
        :autoplay="{
      delay: 3000,
    }"
        :allowTouchMove="false">
      <swiper-slide v-for="i in imgList">
        <img :src="i" style="height: 100%;width: 100%"/>
      </swiper-slide>
    </swiper>
  </div>

</template>

<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import {EffectFade, Navigation, Pagination, Autoplay} from "swiper";
import {onMounted, reactive, ref} from "vue";
import {get_banner} from "../utils/api";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let imgList = reactive([])

    // 获取背景轮播图
    get_banner().then(res => {
      let image_urls = res.image_urls
      for (let i = 0; i < image_urls.length; i++) {
        imgList.push(image_urls[i])
      }
    }).catch(err => {
    })

    return {
      modules: [EffectFade, Navigation, Pagination, Autoplay],
      imgList
    };
  },
};
</script>
<style scoped>
.banner {
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
}
</style>
