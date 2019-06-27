<template>
  <div id="main" class="c-n-fs-c"  :style="{width:main_width+'px'}">
    <!--<div id="m_title">-->
      <!--<div id="m_name">我们做什么</div>-->
      <!--<div id="m_style"><span>——</span> &nbsp;&nbsp; WHAT WE DO &nbsp;&nbsp; <span>——</span></div>-->
    <!--</div>-->
    <div class="r-w-sb-fs" :style="{width:main_width+'px'}">
      <div class="item_certificate" v-for="item in three_certificate"
           :style="{height:main_width*0.2+'px',marginTop:main_width*0.02+'px'}">
        <img :src="item.img" alt=""  :style="{height:main_width*0.2+'px'}">
        <div class="name_certificate">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapState} from "vuex"
  export default {
    name: "Three",
    computed:{
      ...mapState(["menu","current_menu"]),
      ...mapState('one',["three_certificate"]),
      ...mapGetters(["main_width","main_height"])
    },
  }
</script>

<style scoped>
  #main {
    font-size: 14px;
    font-family: Arial, "宋体";
  }
  #m_title{
    margin-top: 50px;
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
  .item_certificate{
    position: relative;
    overflow: hidden;
  }
  .item_certificate:hover .name_certificate{
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: show;
    animation-name: show;

  }
  .name_certificate{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 30px;
    line-height: 30px;
    text-align: center;
    width: 100%;
    font-size: 14px;
    color: #424242;
    margin-bottom: -30px;
  }
  @keyframes show {
    from {
      margin-bottom: -30px;
    }
    to {
      margin-bottom: 0px;
    }
  }
</style>
