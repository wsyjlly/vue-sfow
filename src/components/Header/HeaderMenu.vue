<template>
  <div id="menu" class="r-n-c-c" :style="{width:screen_width+'px',background: menu.length!==0?'#C8E6C9':''}">
    <div id="menu_content" class="r-n-sa-c" :style="{width:main_width+'px',background: menu.length!==0?'#A5D6A7':''}">
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
      ...mapState(["screen_width","screen_height","menu","current_menu","route"]),
      ...mapGetters(["main_width","main_height"]),
    },
    methods:{
      ...mapActions(["setCurrentMenu","init","module16Init"]),
      selectMenu(index){
        let that = this;
        that.$router.push(that.route[index]);
        this.setCurrentMenu(index);
      },
    },
    mounted:function () {
      let that = this;
      this.axios("/module16").then(function (response) {
        that.module16Init(response.data);
      }).then(function () {
        let path = that.$router.currentRoute.path.split("/")[1];
        that.setCurrentMenu(that.route.indexOf(path));
        // that.setCurrentMenu(index);
      }).catch(function (response) {
        console.log(response);
      });
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
