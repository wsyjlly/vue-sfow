<template>
  <div id="main" class="c-n-fs-c"  :style="{width:main_width+'px'}" v-show="menu.length!==0">
    <Timeline>
      <Timeline-item v-for="(item,index) in four_news_current">
        <p class="time">{{item.date}}</p>
        <Collapse active-key="1" accordion :style="{width:main_width+'px'}">
          <Panel :key="index">
            {{item.title}}
            <p class="paragraph" slot="content" v-html="item.content"></p>
          </Panel>
        </Collapse>
      </Timeline-item>
    </Timeline>

    <Page :total="four_news.length"
          @on-change="pageChange"
          :page-size="four_news_page_size"
          :current="1" v-show="four_news_current.length!==0"></Page>
  </div>
</template>

<script>
  import {mapGetters,mapState,mapActions} from "vuex"
  export default {
    name: "Four",
    data(){
      return{
        four_news_current:[],
        four_news_page_size:4,
        four_news_current_page:1,
      }
    },
    computed:{
      ...mapState('one',["four_news","banner_2"]),
      ...mapState(["menu"]),
      ...mapGetters(["main_width"])
    },
    methods:{
      ...mapActions("one",["module10Init"]),

      pageChange(page){
        let that = this;
        that.four_news_current = Array.from(that.four_news).splice((page-1)*that.four_news_page_size,that.four_news_page_size);
      },
    },
    mounted:function () {
      let that = this;
      if (that.four_news.length===0) {
        this.axios("/module10").then(function (response) {
          that.module10Init(response.data);
        }).then(function () {
          that.four_news_current = Array.from(that.four_news).splice(0,that.four_news_page_size);
        }).catch(function (response) {
          console.log(response);
        });
      }else{
        that.four_news_current = Array.from(that.four_news).splice(0,that.four_news_page_size);
      }
    }
  }
</script>

<style scoped>
  #main {
    font-size: 14px;
    font-family: Arial, "宋体";
  }
  .time{
    font-size: 14px;
    font-weight: bold;
    /*height: 30px;*/
    /*line-height: 30px;*/
  }
  /*.content{*/
    /*padding-top: 5px;*/
  /*}*/
  .paragraph{
    text-align: left;
    text-indent: 2em;
    line-height: 1.5em;
  }

</style>
