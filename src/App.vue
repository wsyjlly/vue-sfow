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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
