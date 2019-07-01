<template>
  <div id="main" class="c-n-fs-fs" :style="{width:main_width+'px'}" v-show="menu.length!==0">
    <div id="title" :style="{width:main_width+'px'}">
      {{two_about.title}}
    </div>
    <div id="content" :style="{width:main_width+'px',textIndent:'2em'}" class="c-w-fs-fs" v-html="two_about.content">
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapState,mapActions} from "vuex"
  export default {
    name: "Two",
    computed:{
      ...mapState("one",["two_about"]),
      ...mapState(["menu","current_menu"]),
      ...mapGetters(["main_width","main_height"])
    },
    methods:mapActions("one",["module8Init"]),
    created:function () {
      let that = this;
      if (that.two_about.content===""){
        this.axios("/module8").then(function (response) {
          that.module8Init(response.data);
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
    font-family: Arial, "宋体";
  }
  #title{
    font-size: 36px;
    line-height: 50px;
    padding: 60px 0;
    text-align: center;
  }
  #content>p{
    text-align: left;
    text-indent: 2em;
    line-height: 1.5em;
  }


</style>
