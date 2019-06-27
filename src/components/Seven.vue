<template>
  <div id="main" class="c-n-fs-c"  :style="{width:main_width+'px'}">
    <div class="r-w-fs-fs" :style="{width:main_width+'px'}">
      <div class="item_product shadow" v-for="item in seven_equipment"
           :style="{height:main_width*0.2+'px',
           width:main_width*0.3+'px',
           margin:main_width*0.016+'px'}">
        <img :src="item.img" alt=""  :style="{height:main_width*0.2+'px',width:main_width*0.3}" :width="main_width*0.3">
        <div class="name_product">{{item.title}}</div>
      </div>
    </div>
    <Page :total="100" :page-size="5" :current="1"></Page>
  </div>
</template>

<script>
  import {mapGetters,mapState} from "vuex"
  export default {
    name: "Seven",
    computed:{
      ...mapState('one',["seven_equipment"]),
      ...mapGetters(["main_width"])
    },
  }
</script>

<style scoped>
  #main {
    font-size: 14px;
    font-family: Arial, "宋体";
  }

  .item_product{
    position: relative;
    overflow: hidden;
  }
  .item_product:hover .name_product{
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: show;
    animation-name: show;

  }
  .name_product{
    position: absolute;
    background: rgba(0,0,0,0.5);
    color: #DBDBDB;
    bottom: 0;
    left: 0;
    height: 30px;
    line-height: 30px;
    text-align: center;
    width: 100%;
    font-size: 14px;
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
