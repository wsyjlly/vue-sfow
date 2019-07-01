<template>
  <div id="main" class="r-n-c-fs"  :style="{width:main_width+'px'}" v-show="menu.length!==0">
    <div class="c-n-fs-fs" :style="{width:main_width*0.8+'px'}">
      <p>{{nine_contact.address}}</p>
      <p>{{nine_contact.tel}}</p>
      <p>{{nine_contact.web}}</p>
      <p>{{nine_contact.email}}</p>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapState,mapActions} from "vuex"
  export default {
    name: "Nine",
    computed:{
      ...mapState('one',["nine_contact"]),
      ...mapState(["menu"]),
      ...mapGetters(["main_width"])
    },
    methods:mapActions("one",["module15Init"]),
    mounted:function () {
      let that = this;
      if (that.nine_contact.email==="") {
        this.axios("/module15").then(function (response) {
          that.module15Init(response.data);
        }).catch(function (response) {
          console.log(response);
        });
      }
    }
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
