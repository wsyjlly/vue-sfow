<template>
  <div id="main" class="r-n-c-fs"  :style="{width:main_width+'px'}">
    <div class="c-n-fs-fs" :style="{width:main_width*0.8+'px'}">
      <p>地址：北京市朝阳区酒仙桥中路26号新华联丽港B座331室</p>
      <p>电话：400-960-2114/010-84703669</p>
      <p>网址：jxbczl.com</p>
      <p>邮箱：jxbczl@126.com</p>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapState} from "vuex"
  export default {
    name: "Nine",
    computed:{
      ...mapState('one',["four_news"]),
      ...mapGetters(["main_width"])
    },
  }
</script>

<style scoped>
  #main {
    font-size: 14px;
    font-family:  "sans-serif";
  }
  p{
    line-height: 37px;
    font-size: 20px;
    font-weight: 500;
  }
</style>
