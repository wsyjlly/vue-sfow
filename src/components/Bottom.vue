<template>
	<div id="bottom" class="c-n-c-c" :style="{width:screen_width+'px',height:screen_width*0.2+'px'}">
    <div class="r-n-c-c bottom_container" :style="{width:main_width+'px',height:main_width*0.2+'px'}">
      <div class="r-n-sb-c" :style="{width:main_width*0.24+'px',height:main_width*0.2+'px'}">
        <img src="http://47.102.210.175/uploadFiles/other/code.jpg" alt="" :width="main_width*0.1" :height="main_width*0.1">
        <div class="c-n-sb-fs" :style="{width:main_width*0.12+'px',height:main_width*0.1+'px'}">
          <div class="c-n-fs-fs" :style="{width:main_width*0.12+'px'}">
            <p>手机网站</p>
            <p>扫描访问手机网站</p>
          </div>
          <div class="r-n-fs-c" :style="{width:main_width*0.12+'px'}">
            <img src="http://47.102.210.175/uploadFiles/other/phone.png" alt="" :width="main_width*0.03" :height="main_width*0.03">
            <p>手机网站</p>
          </div>
        </div>
      </div>
      <div class="r-n-sb-c" :style="{width:main_width*0.24+'px',height:main_width*0.2+'px'}">
        <img src="http://47.102.210.175/uploadFiles/other/code.jpg" alt="" :width="main_width*0.1" :height="main_width*0.1">
        <div class="c-n-sb-fs" :style="{width:main_width*0.12+'px',height:main_width*0.1+'px'}">
          <div class="c-n-fs-fs" :style="{width:main_width*0.12+'px'}">
            <p>微信</p>
            <p>微信公众平台</p>
          </div>
          <div class="r-n-fs-c" :style="{width:main_width*0.12+'px'}">
            <img src="http://47.102.210.175/uploadFiles/other/wechat.png" alt="" :width="main_width*0.03" :height="main_width*0.03">
            <p>&nbsp;&nbsp;扫描关注</p>
          </div>
        </div>
      </div>
      <div class="connect c-w-c-fs" :style="{width:main_width*0.24+'px',height:main_width*0.2+'px'}">
        <div>电话：4009602114/010-84703669/13901228161王经理</div>
        <div>地址：北京市朝阳区酒仙桥中路26号新华联丽港B座331室</div>
        <div>网址：www.jxbczl.com</div>
        <div>邮箱：jxbczl@126.com</div>
      </div>
    </div>
    <div id="copy-right" :style="{width:main_width+'px',height:main_width*0.05+'px'}">
      <p>Copyright © 2018 北京晶昕冰城制冷设备有限公司 All Rights Reserved  豫ICP备18015462号-1</p>
    </div>
  </div>
</template>

<script>
	import HeaderTop from "./Header/HeaderTop";
  import HeaderMenu from "./Header/HeaderMenu";
  import {mapState,mapGetters,mapActions} from "vuex"
  export default {
		name: "Bottom",
    components: {HeaderMenu, HeaderTop},
    computed:{
      ...mapState(["screen_width"]),
      // ...mapState('one',["screen_width"]),
      ...mapGetters(["main_width","main_height"])
    }
  }
</script>

<style scoped>
  #bottom{
    font-size: 12px;
    /*background: #DBDBDB;*/
  }
  p{
    line-height: 24px;
    font-size: 14px;
  }
  .bottom_container{
    background: #ffffff;
  }
  .connect>div{
    line-height: 24px;
    font-size: 13px;
    color: #1b2b4f;;
    text-align: left;
  }
  #copy-right{
    font-size: 12px;
    color: rgba(27,43,79,.3);
  }
</style>
