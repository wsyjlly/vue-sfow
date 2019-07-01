<template>
  <div id="banner" class="c-n-c-c" :style="{width:screen_width+'px',height:screen_width*0.45+'px',
    background: menu.length!==0?'#FAFAFA':''}">
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
  import {mapGetters,mapState,mapActions} from "vuex"
  import "../../../static/frames/swiper/swiper.css"
	export default {
		name: "Banner",
    computed:{
      ...mapState(["screen_width","screen_height","menu"]),
      ...mapState('one',["banner"]),
      ...mapGetters(["main_width","main_height"])
    },
    watch:{

    },
    methods:{
      ...mapActions("one",["module1Init"]),
      swiperInit(){
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
    },
    mounted:function () {
		  let that = this;
		  if (that.banner.length===0){
        this.axios("/module1").then(function (response) {
          that.module1Init(response.data)
        }).then(function () {
          that.swiperInit();
        }).catch(function (response) {
          console.log(response);
        });
      }else{
        that.swiperInit();
      }


    }
  }
</script>
<style scoped>
  #banner {
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


  /*.swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color:#000;
    opacity: 1;
    background: rgba(0,0,0,0.2);
  }
  .swiper-pagination-bullet-active {
    color:#fff;
    background: #007aff;
  }*/
</style>
