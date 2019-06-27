<template>
	<div id="header" class="c-n-fs-c" :style="{width:main_width+'px'}">
    <HeaderTop/>
    <HeaderMenu/>
    <MenuShowBanner v-show="menu.indexOf(current_menu)>0"/>
  </div>
</template>

<script>
	import HeaderTop from "./Header/HeaderTop";
  import HeaderMenu from "./Header/HeaderMenu";
  import {mapState,mapGetters,mapActions} from "vuex"
  import MenuShowBanner from "./MenuShowBanner";
  export default {
		name: "Header",
    components: {MenuShowBanner, HeaderMenu, HeaderTop},
    computed:{
      ...mapState(["menu","current_menu"]),
      ...mapGetters(["main_width","main_height"])
    },
    created:function () {
      let route = ["/one","/two","/three","/four","/five","/six","/seven","/eight","/nine"];
      let path = this.$route.path;
      this.init(route.indexOf(path));
    },
    methods:{
		  ...mapActions(['init'])
    },
  }
</script>

<style scoped>
  #header{
    width: 100%;
  }
</style>
