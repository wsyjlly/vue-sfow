<template>
  <div id="banner" class="c-n-c-c":style="{width:screen_width+'px',height:screen_height*0.7+'px'}">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in banner" :style="{backgroundImage:'url('+item+')',width:screen_width*0.4+'px',height:screen_width*0.25+'px'}"></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Navigation -->
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapState} from "vuex"
	export default {
		name: "Banner",
    computed:{
      ...mapState(["screen_width","screen_height","banner"]),
      ...mapGetters(["main_width","main_height"])
    },
    mounted:function () {
      let swiper = new this.swiper('.swiper-container', {
        effect: 'coverflow',
        loop:true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }
</script>

<style>
  #banner {
    background: #FAFAFA;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 700px;
    height: 500px;
  }
</style>
