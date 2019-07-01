<template>
	<div id="menu_banner" class="r-n-c-c" :style="{width:screen_width+'px',height:screen_width*0.4+'px'}">
    <div class="c-n-c-c title_name theme_bg" :style="{width:main_width*0.4+'px',height:main_width*0.4+'px',
    marginRight:-main_width*0.1+'px'}">
      <!--<img src="../../static/images/user.jpg" alt="" :width="main_width*(0.4)" :height="main_width*(0.4)" >-->
      <div id="text_up">{{current_menu!==undefined ? current_menu.text_up:''}}</div>
      <div id="text_down">{{current_menu!==undefined ? current_menu.text_down:''}}</div>
    </div>
    <div id="menu_banner_container" class="r-n-fe-fs" :style="{width:main_width*0.8+'px',height:main_width*0.3+'px'}">
      <div class="swiper-container swiper-container-m swiper-no-swiping" :style="{width:main_width*0.8+'px',height:main_width*0.3+'px'}">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in banner_2" :style="{backgroundImage:'url('+item+')'}"></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination swiper-pagination-m"></div>
        <!-- Add Scrollbar -->
        <div class="swiper-scrollbar-m swiper-scrollbar"></div>
        <!-- Navigation -->
        <div class="swiper-button-next-m swiper-button-next swiper-button-white"></div>
        <div class="swiper-button-prev-m swiper-button-prev swiper-button-white"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions} from "vuex"
	export default {
		name: "MenuShowBanner",
    data(){
		  return{
		    sw:undefined
      }
    },
    computed:{
      ...mapState('one',["banner_2"]),
      ...mapState(["screen_width","current_menu","menu","route"]),
      ...mapGetters(["main_width"])
    },
    watch:{
		  current_menu:function(e1){
		    // console.log(e1);
		    let index = this.menu.indexOf(e1);
		    // console.log(e2);
		    // console.log(index);
		    index>0&&this.sw!==undefined ? this.sw.slideToLoop(index-1):{};
      }
    },
    methods:{
      ...mapActions("one",["module7Init"]),
      ...mapActions(["setCurrentMenu"]),
      swiper_init(){
        let that = this;
        let current_menu_new = [];
        this.menu.map(function (e1,e2) {
          if (e2!==0) current_menu_new.push(e1);
        });
        this.sw = new this.swiper('.swiper-container-m', {
          initialSlide:that.menu.indexOf(that.current_menu)-1||-1,
          effect: 'cube',
          // loop:true,
          grabCursor: true,
          cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
          scrollbar: {
            el: '.swiper-scrollbar-m',
            hide: true,
          },
          navigation: {
            nextEl: '.swiper-button-next-m',
            prevEl: '.swiper-button-prev-m',
          },
        });
        this.sw.on("slideChange",function () {
          that.setCurrentMenu(that.sw.realIndex+1);
          that.$router.push("/"+that.route[that.sw.realIndex+1]);
        })
      }
    },
    mounted:function () {
		  let that = this;
      this.axios("/module7").then(function (response) {
        that.module7Init(response.data);
      }).then(function () {
        that.swiper_init();
      }).catch(function (response) {
        console.log(response);
      });
    },
    updated:function () {
      this.swiper_init();
    }
	}
</script>

<style scoped>
  #menu_banner{
    /*position: relative;*/
    /*height: 100%;*/
  }
  #menu_banner_container{
    position: relative;
    /*background: #fff;*/
    /*font-family: Helvetica Neue, Helvetica, Arial, sans-serif;*/
    /*font-size: 14px;*/
    /*color:#000;*/
    /*margin: 0;*/
    /*padding: 0;*/
  }
  .title_name{
    /*position: absolute;*/
    border-radius: 50%;
    overflow: hidden;
    /*background: #bbdff4;*/
  }
  #text_up{
    font-size: 36px;
    line-height: 100px;
    color: #000;
  }
  #text_down{
    font-size: 24px;
    line-height: 50px;
    color: #000;
  }
  .swiper-container {
    border-radius: 10px;
    cursor: pointer;
    /*overflow: hidden;*/
    /*width: 800px;*/
    /*height: 300px;*/
    /*position: absolute;*/
    /*left: 50%;*/
    /*top: 50%;*/
    /*margin-left: -150px;*/
    /*margin-top: -150px;*/
  }
  .swiper-slide {
    cursor: pointer;
    background-position: center;
    background-size: cover;
  }
</style>
