<template>
  <div id="main" class="c-n-fs-fs"  :style="{width:main_width+'px'}" v-show="menu.length!==0">
    <div class="item_make" v-for="(item,index) in sex_make" :style="{width:main_width-40+'px'}">
      <Card :bordered="false">
        <p slot="title">{{item.title}}</p>
        <div class="r-n-fs-fs content">
          <img src="http://47.102.210.175/uploadFiles/appBanner/1.jpg" width="240" height="120" alt="">
          <div class="content_container c-n-sb-fe" :style="{width:main_width-240+'px'}">
            <p :style="{width:main_width-360+'px'}">{{item.des}}</p>
            <router-link tag="div" :to="'/details6/'+index" class="more_button">
              查看更多>>
            </router-link>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapState,mapActions} from "vuex"
  export default {
    name: "Six",
    computed:{
      ...mapState('one',["sex_make"]),
      ...mapState(["menu"]),
      ...mapGetters(["main_width"])
    },
    methods:{
      ...mapActions("one",["module12Init"]),
      showDetails(index){
        console.log(index);
        this.$router.push("/details6/"+index)
      }
    },
    mounted:function () {
      let that = this;
      if (that.sex_make.length===0) {
        this.axios("/module12").then(function (response) {
          that.module12Init(response.data);
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
  .item_make{
    background:#eee;
    padding: 20px 20px 0;
  }
  .item_make:last-child{
    padding-bottom: 20px
  }
  .content{
    position: relative;
  }
  .content p{
    margin-left: 10px;
    text-indent: 2em;
  }
  .content_container{
    height: 120px;
  }
  .more_button{
    color: #424242;
    cursor: pointer;
  }
</style>
