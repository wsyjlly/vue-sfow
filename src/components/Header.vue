<template>
	<div id="header" class="c-n-fs-c" :style="{width:main_width+'px'}">
    <HeaderTop/>
    <HeaderMenu/>
  </div>
</template>

<script>
	import HeaderTop from "./Header/HeaderTop";
  import HeaderMenu from "./Header/HeaderMenu";
  import {mapGetters} from "vuex"
  export default {
		name: "Header",
    components: {HeaderMenu, HeaderTop},
    computed:{
      ...mapGetters(["main_width","main_height"])
    }
  }
</script>

<style scoped>
  #header{
    width: 100%;
    height: 120px;
  }
</style>
