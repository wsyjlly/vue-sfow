<template>
  <div id="banner" class="c-n-c-c" :style="{width:screen_width+'px',height:screen_width*0.45+'px'}">
    <div class="swiper-container1 r-n-c-c swiper-container" :style="{width:screen_width+'px',height:screen_width*0.45+'px'}">
      <div class="swiper-wrapper" >
        <div class="swiper-slide" v-for="item in banner" :style="{width:screen_width*0.6+'px',height:screen_width*0.36+'px'}">
          <img :src="item" :style="{width:screen_width*0.6+'px',height:screen_width*0.36+'px'}">
          <!--<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>-->
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination1 swiper-pagination"></div>
      <!-- Navigation -->
      <div class="swiper-button-next1 swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev1 swiper-button-prev swiper-button-white"></div>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapState} from "vuex"
  import "../../../static/frames/swiper/swiper.css"
	export default {
		name: "Banner",
    computed:{
      ...mapState(["screen_width","screen_height"]),
      ...mapState('one',["banner"]),
      ...mapGetters(["main_width","main_height"])
    },
    watch:{

    },
    mounted:function () {
      new this.swiper('.swiper-container1', {
        // lazy: true,
        loop:true,
        speed: 1000,
        autoplay:{
          delay:5000,
          disableOnInteraction:false
        },
        effect: 'coverflow',
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
          el: '.swiper-pagination1',
        },
        navigation: {
          nextEl: '.swiper-button-next1',
          prevEl: '.swiper-button-prev1',
        },
      });
    }
  }
</script>
<style scoped>
  #banner {
    background: #FAFAFA;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    /*margin-top: 60px;*/
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
    overflow: hidden;
    width: 700px;
    height: 500px;
    border-radius: 10px;
  }

  .swiper-slide img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
  }
</style>
<style>


</style>
