<template>
  <div id="menu" class="r-n-c-c theme_bg"  :style="{width:screen_width+'px'}">
    <div id="menu_content" class="r-n-sa-c" :style="{width:main_width+'px'}">
      <div class="menu_item item-edr-fill c-n-c-c"
           :class="item===current_menu ? 'current_menu_item':''"
           v-for="(item,index) in menu"
           :key="item.text_up" @click="selectMenu(index)">
        <p>{{item.text_up}}</p>
        <p>{{item.text_down}}</p>
      </div>
    </div>
  </div>
</template>


<script>
  import {mapGetters,mapState,mapActions} from "vuex"
	export default {
		name: "HeaderMenu",
    computed:{
      ...mapState(["screen_width","screen_height","menu","current_menu"]),
      ...mapGetters(["main_width","main_height"]),
    },
    methods:{
      ...mapActions(["setCurrentMenu","init"]),
      selectMenu(index){
        let router = ["one","two","three","four","five","six","seven","eight","nine"];
        let that = this;
        this.setCurrentMenu(index);
        that.$router.push(router[index]);
      },
    }
	}
</script>

<style scoped>
  #menu{
    width: 100%;
    height: 60px;
    margin-top: 10px;
  }
  #menu_content{
    background: #A5D6A7;
    /*width: 1200px;*/
    height: 60px;
  }
  .menu_item{
    width: 100px;
    height: 60px;
    /*font-weight: 700;*/
  }
  .current_menu_item{
    background: #4CAF50;
  }
  .menu_item:hover{
    background: #66BB6A;
    cursor: pointer;
  }
  .menu_item p:first-child{
    letter-spacing: 1px;
    font-size: 16px;
    line-height: 25px;
  }
  .menu_item p:last-child{
    font-size: 12px;
    line-height: 15px;
  }
</style>
