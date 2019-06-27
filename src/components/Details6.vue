<template>
  <div id="main" class="c-n-fs-fs"  :style="{width:main_width+'px'}">
    <Card :bordered="true">
      <p slot="title" align="center">{{title}}</p>
      <div id="details" style="text-indent: 2em" v-html="current_details"></div>
    </Card>
  </div>
</template>

<script>
  import {mapGetters,mapState,mapActions} from "vuex"
  export default {
    name: "Details6",
    data(){
      return{
        current_details:"",
        title:""
      }
    },
    computed:{
      ...mapState(["current_menu"]),
      ...mapState('one',["sex_make"]),
      ...mapGetters(["main_width"])
    },
    methods:{
      ...mapActions(["setCurrentMenu"])
    },
    mounted:function () {
      console.log("参数："+this.$route.params.id);
      let id = this.$route.params.id;
      console.log(isNaN(id));
      if (isNaN(id)||id===undefined) this.$router.push("/details5");
      this.title = this.sex_make[id].title;
      this.current_details = this.sex_make[id].details;
      this.current_menu === undefined ? this.setCurrentMenu(5):{};
    }
  }
</script>

<style scoped>
  #main {
    font-size: 14px;
    font-family: Arial, "宋体";
  }
  #details>p{
    text-indent: 2em;
  }
</style>
