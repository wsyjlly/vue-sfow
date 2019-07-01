<template>
  <div id="main" class="c-n-fs-c"  :style="{width:main_width+'px'}" v-show="menu.length!==0">
    <div class="r-w-fs-fs" :style="{width:main_width+'px'}">
      <div class="item_product shadow" v-for="item in eight_product_current"
           :style="{height:main_width*0.2+'px',
           width:main_width*0.3+'px',
           margin:main_width*0.016+'px'}">
        <img :src="item.img" alt=""  :style="{height:main_width*0.2+'px',width:main_width*0.3}" :width="main_width*0.3">
        <div class="name_product">{{item.title}}</div>
      </div>
    </div>

    <Page :total="eight_product.length"
          @on-change="pageChange"
          :page-size="eight_product_page_size"
          :current="1"
          v-show="eight_product_current.length!==0"></Page>
  </div>
</template>

<script>
  import {mapGetters,mapState,mapActions} from "vuex"
  export default {
    name: "Eight",
    data(){
      return{
        eight_product_current:[],
        eight_product_page_size:6,
        eight_product_current_page:1,
      }
    },
    computed:{
      ...mapState('one',["eight_product"]),
      ...mapState(["menu"]),
      ...mapGetters(["main_width"])
    },
    methods:{
      ...mapActions("one",["module14Init"]),
      pageChange(page){
        let that = this;
        that.eight_product_current = Array.from(that.eight_product).splice((page-1)*that.eight_product_page_size,that.eight_product_page_size);
      },
    },
    mounted:function () {
      let that = this;
      if (that.eight_product.length===0) {
        this.axios("/module14").then(function (response) {
          that.module14Init(response.data);

        }).then(function () {
          that.eight_product_current = Array.from(that.eight_product).splice(0,that.eight_product_page_size);
        }).catch(function (response) {
          console.log(response);
        });
      }else{
        that.eight_product_current = Array.from(that.eight_product).splice(0,that.eight_product_page_size);
      }
    }
  }
</script>

<style scoped>
  #main {
    font-size: 14px;
    font-family: Arial, "宋体";
  }

  .item_product{
    position: relative;
    overflow: hidden;
  }
  .item_product:hover .name_product{
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: show;
    animation-name: show;

  }
  .name_product{
    position: absolute;
    background: rgba(0,0,0,0.5);
    color: #DBDBDB;
    bottom: 0;
    left: 0;
    height: 30px;
    line-height: 30px;
    text-align: center;
    width: 100%;
    font-size: 14px;
    margin-bottom: -30px;
  }
  @keyframes show {
    from {
      margin-bottom: -30px;
    }
    to {
      margin-bottom: 0px;
    }
  }
</style>
