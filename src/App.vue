<template>
  <div id="app" :style="{width:screen_width+'px',height:screen_height+'px'}" class="c-n-fs-c">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header";
import HeaderMenu from "./components/Header/HeaderMenu";
import {mapState} from "vuex"
export default {
  name: 'App',
  components: {HeaderMenu, Header},
  computed:{
    ...mapState(["screen_width","screen_height"])
  },
  created:function () {
    this.setWindowSize();
    window.onresize = ()=>{
      this.setWindowSize();
    }
  },
  methods:{
    setWindowSize () {
      this.$store.state.screen_height = window.innerHeight<=500? 500:window.innerHeight;
      this.$store.state.screen_width = window.innerWidth<=1200? 1200:window.innerWidth;
    },

  }
}
</script>

<style>
  *{
    font-family: "Adobe 仿宋 Std R", Avenir, Helvetica, Arial,sans-serif;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .theme_bg{
    background: #A5D6A7;
  }
  .theme_bg2{
    background: #4CAF50;
  }
  .theme_color{
    color: #1E88E5;
  }
</style>
