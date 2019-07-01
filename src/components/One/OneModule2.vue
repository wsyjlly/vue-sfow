<template>
  <div id="one-module2" class="c-n-fs-c" :style="{width:main_width+'px'}">
    <div id="m_title" v-show="one_module2.length!==0">
      <div id="m_name">{{modules.length!==0?modules[2].name:""}}</div>
      <div id="m_style"><span>——</span> &nbsp;&nbsp; {{modules.length!==0?modules[2].desc:""}} &nbsp;&nbsp; <span>——</span></div>
    </div>
    <div id="module2_img" class="r-w-sa-c">
      <div class="m2-img r-n-c-c"
           v-for="item in one_module2"
           :style="{width: main_width*0.28+'px',
           height: main_width*0.24+'px',
           marginTop:main_width*0.02+'px' ,
           marginBottom:main_width*0.04+'px' ,
           marginLeft:main_width*0.015+'px' ,
           marginRight:main_width*0.015+'px' ,
           backgroundImage:'url('+item.img+')'}">
        <div class="m2-img-inner c-n-fe-c"
             :style="{width: main_width*0.3+'px',
             height: main_width*0.25+'px'}">
          <div class="m2-img-inner-name theme_bg"
               :style="{width: main_width*0.29+'px',
               height: main_width*0.03+'px',
               lineHeight: main_width*0.03+'px',
               marginBottom: -main_width*0.015+'px'}">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions} from "vuex"
  export default {
    name: "OneModule2",
    computed:{
      ...mapState('one',["one_module2","modules"]),
      ...mapGetters(["main_width"])
    },
    methods:mapActions("one",["module3Init"]),
    mounted:function () {
      let that = this;
      if (that.one_module2.length===0) {
        this.axios("/module3").then(function (response) {
          that.module3Init(response.data);
        }).catch(function (response) {
          console.log(response);
        });
      }
    }
  }
</script>

<style scoped>
  #one-module2{
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
  #module2_img{
    margin-top: 45px;
  }
  .m2-img{
    height: 50px;
    background: #C8E6C9;
    background: no-repeat;
    border-radius: 5px;
    /*overflow: hidden;*/
    /*background-size:100% 100%;*/
    background-size:100% 100%;
    transform:  skew(5deg,-5deg);
  }
  .m2-img-inner{
    /*background: #bbdff4;*/
  }
  .m2-img-inner-name{
    /*background: rgba(0,0,0,0.8);*/
    /*background: rgba(50, 50, 50, 0.93);*/
    font-family: "Adobe 楷体 Std R" ;
    color: #424242;
    border-radius: 3px;
  }
  .m2-img:hover{
    height: 50px;
    cursor: pointer;
    background: #C8E6C9;
    background: no-repeat;
    background-position: center center;


    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: pulse;
    animation-name: pulse;
  }
  @keyframes pulse {
    from {
      /*-webkit-transform: scale3d(1, 1, 1);*/
      /*transform: scale3d(1, 1, 1);*/
      /*transform: rotate3d(0,0,0,0deg) ;*/
      background-size:100% 100%;
    }

    to {
      /*-webkit-transform: scale3d(1.1, 1.1, 1.1);*/
      /*transform: scale3d(1.1, 1.1, 1.1);*/
      background-size:110% 110%;
      transform:  skew(0deg,0deg);
    }
  }
</style>
