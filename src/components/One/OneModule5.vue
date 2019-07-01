<template>
  <div id="one-module5" class="c-n-fs-c" :style="{width:screen_width+'px'}">
    <div id="m_title" v-show="one_module5.longitude!==''">
      <div id="m_name">{{modules.length!==0?modules[5].name:""}}</div>
      <div id="m_style"><span>——</span> &nbsp;&nbsp; {{modules.length!==0?modules[5].desc:""}} &nbsp;&nbsp; <span>——</span></div>
    </div>
    <div id="module5" class="r-n-c-fs" :style="{width:screen_width+'px',height: main_width*0.3+'px'}"></div>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions} from "vuex"
  export default {
    name: "OneModule5",
    computed:{
      ...mapState(["screen_width"]),
      ...mapState('one',["one_module5","modules"]),
      ...mapGetters(["main_width"])
    },
    methods:{
      ...mapActions("one",["module6Init"]),
      mapInt(){
        let that = this;
        let map = new BMap.Map("module5");
        // 创建地图实例
        let point = new BMap.Point(that.one_module5.longitude,that.one_module5.dimension);
        // 创建点坐标
        map.centerAndZoom(point, 16);
        let marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);               // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        // map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
        map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
        let navigationControl = new BMap.NavigationControl({
          // 靠左上角位置
          anchor: BMAP_ANCHOR_TOP_LEFT,
          // LARGE类型
          type: BMAP_NAVIGATION_CONTROL_LARGE,
          // 启用显示定位
          enableGeolocation: true
        });
        map.addControl(navigationControl);
      }
    },
    // created:function (){this.loadScript()},
    mounted:function () {
      let that = this;
      if (that.one_module5.longitude===""){
        this.axios("/module6").then(function (response) {
          that.module6Init(response.data);
        }).then(function () {
          that.mapInt();
        }).catch(function (response) {
          console.log(response);
        });
      } else{
        that.mapInt();
      }

    }
  }
</script>

<style scoped>
  #one-module5{
    /*height: 100px;*/
    /*background: #E8F5E9;*/
    /*margin-top: 300px;*/
    margin-bottom: 30px;
  }
  #m_title{
    margin-top: 30px;
    margin-bottom: 45px;
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
  #module5{
    z-index: 222;
    /*position: relative;*/
    /*margin-top: 50px;*/
    /*background: rgba(38,166,154,0.5);*/
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

  .content {
    /*background: rgba(0,0,0,0.05);*/
    overflow: hidden;
    position: absolute;
  }
  #title{
    border-radius: 50%;
    border: solid 1px #bbdff4;
  }

  #map {
    background: #2c3e50;
    position: absolute;
    /*border-radius: 0 50% 50% 50%;*/
    border: solid 5px rgba(38, 166, 154, 0.5);
  }

</style>
