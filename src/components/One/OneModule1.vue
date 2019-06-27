<template>
  <div id="one-module1" class="c-n-fs-c" :style="{width:main_width+'px'}">
    <div id="m_title">
      <div id="m_name">我们做什么</div>
      <div id="m_style"><span>——</span> &nbsp;&nbsp; WHAT WE DO &nbsp;&nbsp; <span>——</span></div>
    </div>
    <div id="module1_img" class="r-w-c-c">
      <div class="m1-img c-n-c-c"
           @mouseenter="currentImg=item"
           @mouseleave="currentImg=null"
           v-for="(item,index) in module1_img"
           :style="{width: main_width*0.4+'px',height: main_width*0.25+'px',backgroundImage:'url('+item+')'}">
        <div class="m1-img-inner c-n-c-c" :style="{width: main_width*0.4+'px',height: main_width*0.25+'px'}" v-show="item===currentImg">
          <p>01 图片标题1</p>
          <p>picture title 1</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapGetters} from "vuex"
	export default {
		name: "OneModule1",
    data(){
		  return{
        currentImg:null
      }
    },
    computed:{
      ...mapState('one',["module1_img"]),
      ...mapGetters(["main_width"]),
    },
    methods:{
      mouseEnterImg(index){
        console.log(index);
      },
      mouseLeaveImg(index){
        console.log(index);
      }
    }
	}
</script>

<style scoped>
  #one-module1{
    /*height: 100px;*/
    /*background: #E8F5E9;*/
  }
  #m_title{
    margin-top: 30px;
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
  #module1_img{
    margin-top: 45px;
  }
  .m1-img{
    height: 50px;
    background: #C8E6C9;
    background: no-repeat;
    background-size:100% 100%;
  }
  .m1-img:hover{
    height: 50px;
    cursor: pointer;
    overflow: hidden;
    background: #C8E6C9;
    background: no-repeat;
    background-position: center center;

    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: enlarge;
    animation-name: enlarge;
  }
  .m1-img-inner:hover{
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: innerOpacity;
    animation-name: innerOpacity;
  }
  .m1-img-inner>p{
    color: #ffffff;
  }
  .m1-img-inner>p:first-child{
    height: 50px;
    line-height: 50px;
    font-size: 18px;
  }
  .m1-img-inner>p:last-child{
    height: 20px;
    line-height: 20px;
    font-size: 12px;
  }
  @keyframes enlarge {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
      background-size: 100% 100%;
      border-radius: 0;
    }

    to {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
      background-size: 150% 150%;
      border-radius: 15px;
    }
  }

  @keyframes innerOpacity {
     from {
       background-color: rgba(0, 0, 0, 0);
     }

     to {
       background-color: rgba(0, 0, 0, 0.3);
     }
   }
</style>
