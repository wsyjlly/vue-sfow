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
    name: "Details5",
    data(){
      return{
        current_details:"",
        title:""
      }
    },
    computed:{
      ...mapState(["current_menu","menu"]),
      ...mapState('one',["five_case"]),
      ...mapGetters(["main_width"])
    },
    methods:{
      ...mapActions(["setCurrentMenu","module16Init"])
    },
    mounted:function () {
      let that = this;
      console.log("参数："+that.$route.params.id);
      let id = that.$route.params.id;
      console.log(isNaN(id));
      if (isNaN(id)||id===undefined) that.$router.push("/details5");
      if (that.menu.length===0){
        this.axios("http://localhost:8080/module16").then(function (response) {
          that.module16Init(response.data);
        }).then(function () {
          that.setCurrentMenu(4);
        }).catch(function (response) {
          console.log(response);
        });
      }else{
        that.title = that.five_case[id].title;
        that.current_details = that.five_case[id].details;
      }

      // this.current_menu === undefined ? this.setCurrentMenu(4):{};
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
