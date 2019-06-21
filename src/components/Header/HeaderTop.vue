<template>
  <div id="title" class="r-n-sb-c">
    <div id="company" class="r-n-fs-c">
      <img src="../../../static/images/user.jpg" alt="" width="50" height="50">
      <div id="name" class="c-n-fs-c">
        <p>北京嘉瑞世飞制冷有限公司</p>
        <p>Beijing Jiarui Shifei Refrigeration Limited company</p>
      </div>
    </div>
    <div id="connect" class="r-n-fs-c">
      <img src="../../../static/images/connect.png" alt="" width="30" height="30">
      <div id="phone" class="r-n-fs-c">
        <p>详询热线 :13901228161 &nbsp;&nbsp;&nbsp;<span>王经理</span></p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex"
	export default {
		name: "HeaderTop",
    computed:{
      ...mapGetters(["main_width","main_height"])
    }
	}
</script>

<style scoped>
  #title {
    width: inherit;
    height: 60px;
    line-height: 60px;
    background: #ffffff;
  }

  #company {
    height: 60px;
  }

  #name {
    font-weight: 700;
    width: 380px;
  }

  #name p:first-child {
    font-size: 24px;
    height: 40px;
    line-height: 40px;
  }

  #name p:last-child {
    font-size: 14px;
    height: 20px;
    line-height: 20px;
  }

  #connect{
    font-size: 16px;
  }
  #phone p{
    font-weight: 700;
    width: 250px;
    text-align: center;
  }
</style>
