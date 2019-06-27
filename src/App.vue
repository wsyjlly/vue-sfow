<template>
  <div id="app" :style="{width:screen_width+'px'}" class="c-n-fs-c">
    <Header/>
    <router-view />
    <Bottom/>
  </div>
</template>

<script>
import Header from "./components/Header";
import HeaderMenu from "./components/Header/HeaderMenu";
import {mapState} from "vuex"
import Bottom from "./components/Bottom";
export default {
  name: 'App',
  components: {Bottom, HeaderMenu, Header},
  computed:{
    ...mapState(["screen_width","screen_height"])
  },
  created:function () {
    let scrollWidth = this.getScrollWidth()===0 ? 17:this.getScrollWidth();
    this.setWindowSize(scrollWidth);
    window.onresize = ()=>{
      this.setWindowSize(scrollWidth);
    }
  },

  methods:{
    setWindowSize (scrollWidth) {
      this.$store.state.screen_height = window.innerHeight<=500 ? 500:window.innerHeight;
      this.$store.state.screen_width = window.innerWidth<=1200 ? 1200:window.innerWidth-scrollWidth;
    },
    getScrollWidth(){
      let element = document.getElementsByTagName("body");
      let outer = document.createElement("div");
      let inner = document.createElement("div");
      let width;
      outer.appendChild(inner);
      element[0].appendChild(outer);
      outer.style.width = "100px";
      outer.style.height = "100px";
      outer.style.overflow = "auto";
      inner.style.width = "200px";
      inner.style.height = "100px";
      width = outer.offsetWidth - outer.clientWidth
      element[0].removeChild(outer);
      return width;
    }

  }
}
</script>

<style>
  *{
    font-family: "微软雅黑",Arial, "宋体", Helvetica, sans-serif, Verdana,
    "Adobe 仿宋 Std R", Avenir, Helvetica, Arial,sans-serif;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .theme_bg{
    background: #C8E6C9;
  }
  .theme_bg2{
    background: #4CAF50;
  }
  .theme_color{
    color: #1E88E5;
  }
</style>
