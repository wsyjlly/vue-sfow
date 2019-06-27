<template>
  <div id="one-module3" class="c-n-fs-c" :style="{width:main_width+'px'}">
    <div id="m_title">
      <div id="m_name">公司优势</div>
      <div id="m_style"><span>——</span> &nbsp;&nbsp; ADVANTAGE &nbsp;&nbsp; <span>——</span></div>
    </div>
    <div id="module3_img" class="r-n-c-fs" :style="{width: main_width+'px'}">
      <div class="swiper-container3 swiper-container"  :style="{width: main_width+'px',height: main_width*0.3+'px'}">
        <div class="swiper-wrapper">
          <div class="swiper-slide c-n-c-c" v-for="(item,index) in module3" :style="{width: main_width*0.3+'px',height: main_width*0.3+'px',backgroundImage:'url('+item.img_url+')'}">
            <div class="s_content c-n-fs-c" :style="{width: main_width*0.3-8+'px',height: main_width*0.3-8+'px'}">
              <div>{{item.title}}</div>
              <div>{{item.detail}}</div>
            </div>
          </div>
        </div>
        <!-- Navigation -->
        <div class="swiper-button-next3 swiper-button-next swiper-button-white"></div>
        <div class="swiper-button-prev3 swiper-button-prev swiper-button-white"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapGetters} from "vuex"
  export default {
    name: "OneModule3",
    computed:{
      ...mapState('one',["module3"]),
      ...mapGetters(["main_width"])
    },
    mounted:function () {
      new this.swiper('.swiper-container3', {
        loop:true,
        slidesPerView: 3,
        spaceBetween: 30,
        /*pagination: {
          el: '.swiper-pagination3',
          clickable: true,
        },*/
        navigation: {
          nextEl: '.swiper-button-next3',
          prevEl: '.swiper-button-prev3',
        },
      });
    }
  }
</script>

<style scoped>
  #one-module3{
    margin-bottom: 150px;
    /*height: 100px;*/
    /*background: #E8F5E9;*/
  }
  #m_title{
    margin-top: 150px;
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
  #module3_img{
    margin-top: 45px;
  }
  .m1-img{
    height: 50px;
    background: #C8E6C9;
    background: no-repeat;
    background-size:100% 100%;
    cursor: pointer;
    background-position: center center;
    /*background: no-repeat;*/
  }
  .m1-img:hover{
  }

  .swiper-container3 {
    background: #bbdff4;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    overflow: hidden;
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
