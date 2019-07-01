<template>
  <div id="title" class="r-n-sb-c">
    <div id="company" class="r-n-fs-c">
      <img :src="logo_img" alt="" width="50" height="50" v-show="logo_img!==''">
      <div id="name" class="c-n-c-c">
        <p>{{main_title}}</p>
        <p class="">{{main_title_t}}</p>
      </div>
    </div>
    <div id="connect" class="r-n-fs-c">
      <img :src="phone_img" alt="" width="30" height="30" v-show="phone_img!==''">
      <div id="phone" class="r-n-fs-c">
        <p>{{connect_content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapState} from "vuex"
	export default {
    computed:{
      ...mapState(["main_title","main_title_t","connect","connect_name","logo_img","phone_img","connect_content"]),
      ...mapGetters(["main_width",""]),
    },
    name: "HeaderTop"
	}
</script>

<style scoped>
  #title {
    width: inherit;
    height: 60px;
    line-height: 60px;
    background: #ffffff;
    margin-top: 10px;
  }

  #company {
    height: 60px;
    cursor: pointer;
  }
  #company>img{
    border-radius: 5px;
  }

  #name {
    font-weight: 700;
    width: 380px;
    cursor: pointer;
  }

  #name p:first-child {
    letter-spacing: 2px;
    font-size: 24px;
    height: 30px;
    line-height: 30px;
    color: #424242;
    font-weight: 700;
  }

  #name p:last-child {
    font-size: 14px;
    height: 20px;
    color: #9E9E9E;
    line-height: 20px;
  }

  #connect{
    cursor: pointer;
    font-size: 16px;
  }
  #phone{
    margin-left: 10px;
  }
  #phone p{
    font-weight: 700;
    width: 250px;
    text-align: center;
  }
</style>
