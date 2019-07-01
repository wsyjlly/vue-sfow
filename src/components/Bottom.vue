<template>
	<div id="bottom" class="c-n-c-c" :style="{width:screen_width+'px',height:screen_width*0.2+'px'}" v-show="menu.length!==0&&code2!==''">
    <div class="r-n-c-c bottom_container" :style="{width:main_width+'px',height:main_width*0.2+'px'}">
      <div class="r-n-sb-c" :style="{width:main_width*0.24+'px',height:main_width*0.2+'px'}"  v-show="code1!==''">
        <img :src="code1" alt="" :width="main_width*0.1" :height="main_width*0.1" v-show="code1!==''">
        <div class="c-n-sb-fs" :style="{width:main_width*0.12+'px',height:main_width*0.1+'px'}">
          <div class="c-n-fs-fs" :style="{width:main_width*0.12+'px'}">
            <p>手机网站</p>
            <p>扫描访问手机网站</p>
          </div>
          <div class="r-n-fs-c" :style="{width:main_width*0.12+'px'}">
            <img src="../../static/images/phone.png" alt="" :width="main_width*0.03" :height="main_width*0.03">
            <p>手机网站</p>
          </div>
        </div>
      </div>
      <div class="r-n-sb-c" :style="{width:main_width*0.24+'px',height:main_width*0.2+'px'}"  v-show="code2!==''">
        <img :src="code2" alt="" :width="main_width*0.1" :height="main_width*0.1">
        <div class="c-n-sb-fs" :style="{width:main_width*0.12+'px',height:main_width*0.1+'px'}">
          <div class="c-n-fs-fs" :style="{width:main_width*0.12+'px'}">
            <p>微信</p>
            <p>微信公众平台</p>
          </div>
          <div class="r-n-fs-c" :style="{width:main_width*0.12+'px'}">
            <img src="../../static/images/wechat.png" alt="" :width="main_width*0.03" :height="main_width*0.03">
            <p>&nbsp;&nbsp;扫描关注</p>
          </div>
        </div>
      </div>
      <div class="connect c-w-c-fs" :style="{width:main_width*0.24+'px',height:main_width*0.2+'px'}" >
        <p>{{nine_contact.address}}</p>
        <p>{{nine_contact.tel}}</p>
        <p>{{nine_contact.web}}</p>
        <p>{{nine_contact.email}}</p>
      </div>
    </div>
    <div id="copy-right" :style="{width:main_width+'px',height:main_width*0.05+'px'}">
      <p>{{copy_right}}</p>
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
      ...mapState(["screen_width","menu","code1","code2","copy_right"]),
      ...mapState("one",["nine_contact"]),
      // ...mapState('one',["screen_width"]),
      ...mapGetters(["main_width","main_height"])
    },
    methods:{
      ...mapActions(["module18Init"]),
      ...mapActions("one",["module15Init"])
    },
    mounted:function () {
		  let that = this;
		  if (that.nine_contact.email==="") {
        this.axios("/module15").then(function (response) {
          that.module15Init(response.data);
        }).catch(function (response) {
          console.log(response);
        });
      }
      this.axios("/module18").then(function (response) {
        that.module18Init(response.data);
      }).catch(function (response) {
        console.log(response);
      });

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
    text-align: center;
    font-size: 12px;
    color: rgba(27,43,79,.3);
  }
</style>
