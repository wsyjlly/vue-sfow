<template>
  <div id="one-module4" class="c-n-fs-c" :style="{width:main_width+'px'}">
    <div id="m_title">
      <div id="m_name">公司资讯</div>
      <div id="m_style"><span>——</span> &nbsp;&nbsp; NEWS &nbsp;&nbsp; <span>——</span></div>
    </div>
    <div id="module4_img" class="r-n-c-fs" :style="{width: main_width+'px'}">
      <div class="r-n-fs-fs" :style="{width: main_width*0.8+'px',height: main_width*0.25+'px'}">
        <div class="swiper-container4 swiper-container"  :style="{width: main_width*0.4+'px',height: main_width*0.25+'px'}">
          <div class="swiper-wrapper">
            <div class="swiper-slide"  v-for="item in module4" :style="{backgroundImage:'url('+item.img_url+')',width:main_width*0.4+'px',height:main_width*0.25+'px'}"></div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination4 swiper-pagination"></div>
        </div>
        <div class="swiper-container42 swiper-container" :style="{width: main_width*0.4+'px',height: main_width*0.25+'px'}">
          <div class="swiper-wrapper">
            <div class="swiper-slide theme_bg"  v-for="(item,index) in module4" :style="{width:main_width*0.4+'px',height:main_width*0.25+'px'}">
              <div class="s_content c-n-fs-c" :style="{width: main_width*0.4-8+'px',height: main_width*0.25-8+'px'}">
                <div>{{item.title}}</div>
                <div>{{item.detail}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapGetters} from "vuex"
  export default {
    name: "OneModule4",
    data(){
      return {
        module4_current_page:-1
      }
    },
    computed:{
      ...mapState('one',["module4"]),
      ...mapGetters(["main_width"])
    },
    mounted:function () {
      let that = this;
      let swiperLeft = new this.swiper('.swiper-container4', {
        direction: 'vertical',
        loop:true,
        autoplay:{
          delay:3000,
          disableOnInteraction:false
        },
        pagination: {
          el: '.swiper-pagination4',
          clickable: true,
        }
      });

      let swiperRight =  new this.swiper('.swiper-container42', {
        effect: 'cube',
        loop:true,
        autoplay:{
          delay:3000,
          disableOnInteraction:false
        },
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
      });
      swiperLeft.on('slideChange',function () {
        that.module4_current_page = swiperLeft.realIndex;
        swiperRight.slideToLoop(swiperLeft.realIndex);
      });
      swiperRight.on('slideChange',function () {
        that.module4_current_page = swiperRight.realIndex;
        swiperLeft.slideToLoop(swiperRight.realIndex);
      });
    }
  }
</script>

<style scoped>
  #one-module4{
    /*height: 100px;*/
    /*background: #E8F5E9;*/
  }
  #m_title{
    /*margin-top: 105px;*/
  }
  #m_name{
    margin-top: 45px;
    color: #5a5a5a;
    font-size: 22px;
    height: 36px;
    line-height: 36px;
    letter-spacing: 4px;
  }
  #m_style{
    margin-top: 10px;
    color: #388E3C;
    line-height: 15px;
    font-size: 12px;
  }
  #m_style>span:first-child{
    color: #4CAF50;
    line-height: 5px;
    /*font-size: 30px;*/
    font-weight: 900;
  }
  #m_style>span:last-child{
    color: #03A9F4;
    line-height: 5px;
    /*font-size: 30px;*/
    font-weight: 900;
  }
  #module4_img{
    margin-top: 45px;
  }

  .swiper-container4,.swiper-container42 {
    background: #bbdff4;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    text-align: center;
    font-size: 18px;
  }
  .s_content{
    background: rgba(255,255,255,0.6);
    color: #616161;
    padding: 16px;
    /*background: #000;*/
  }
  .s_content>div:first-child {
    text-align: center;
    font-size: 30px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .s_content>div:last-child {
    text-align: left;
    text-indent: 28px;
    font-size: 14px;
    letter-spacing: 2px;
  }
</style>
