<template>
  <div id="main" class="c-n-fs-c"  :style="{width:main_width+'px'}">
    <Timeline>
      <Timeline-item v-for="(item,index) in four_news">
        <p class="time">{{item.date}}</p>
        <Collapse active-key="1" :style="{width:main_width+'px'}">
          <Panel key="1">
            {{item.title}}
            <p class="paragraph" slot="content" v-html="item.content"></p>
          </Panel>
        </Collapse>
      </Timeline-item>
    </Timeline>

    <Page :total="100" :page-size="5" :current="1"></Page>
  </div>
</template>

<script>
  import {mapGetters,mapState} from "vuex"
  export default {
    name: "Four",
    computed:{
      ...mapState('one',["four_news"]),
      ...mapGetters(["main_width"])
    },
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
