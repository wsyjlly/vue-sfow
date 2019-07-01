/*Vuex*/
import Vue from '../../static/frames/vue'
import Vuex from '../../static/frames/vuex'
import one from './modules/one'
import createLogger from 'vuex/dist/logger'


Vue.use(Vuex);
export default new Vuex.Store({
  state :{
    host:"http://47.102.210.175",
    screen_width:0,
    screen_height:0,
    name:"",
    password:"",
    logo_img:"",
    phone_img:"",
    main_title : "",
    main_title_t : "",
    connect_content:"",
    code1:"",
    code2:"",
    copy_right:"",
    route:["one","two","three","four","five","six","seven","eight","nine"],
    current_menu:{
      isSelected:true,
      text_up:"公司首页",
      text_down:"HOME",
    },
    menu:[
      /*{
        id:"",
        isSelected:true,
        text_up:"公司首页",
        text_down:"HOME",
      },
      {
        id:"",
        isSelected:false,
        text_up:"公司介绍",
        text_down:"ABOUT US",
      },
      {
        id:"",
        isSelected:false,
        text_up:"资质证书",
        text_down:"LICENSE",
      },
      {
        id:"",
        isSelected:false,
        text_up:"新闻资讯",
        text_down:"NEWS",
      },
      {
        id:"",
        isSelected:false,
        text_up:"工程实例 ",
        text_down:"CASE",
      },
      {
        id:"",
        isSelected:false,
        text_up:"冷库制造",
        text_down:"MAKE",
      },
      {
        id:"",
        isSelected:false,
        text_up:"制冷设备",
        text_down:"EQUIPMENT",
      },
      {
        id:"",
        isSelected:false,
        text_up:"产品展示",
        text_down:"PRODUCT",
      },
      {
        id:"",
        isSelected:false,
        text_up:"联系我们",
        text_down:"CONTACT US",
      },*/
    ]
  },
  getters:{
    main_width : state => {
      let w = state.screen_width;
      if (w<=1200){
        return 1000;
      }else if (w>1200&&w<=1500){
        return state.screen_width*0.85;
      }else if (w>1500){
        return 1300;
      }

    },
    main_height : state => {
      return state.screen_height;
    }
  },
  mutations:{
    UPDATE_CURRENT_MENU(state,index){
      state.current_menu = state.menu[index];
    }
  },
  actions:{
    setCurrentMenu({commit,state},index){
      commit("UPDATE_CURRENT_MENU",index);
    },
    /*
    * 初始化菜单
    * */
    module16Init({state,commit},data) {
      state.menu = [];
      data.forEach((item)=>{
        state.menu.push({
          isSelected:true,
          text_up:item.content,
          text_down:item.column1,
        });
      });
    },
    /*
    * 初始化菜单
    * */
    module17Init({state,commit},data) {
      let url = data[0].column3.split("@@@");
      state.logo_img=url[0];
      state.phone_img=url[1];
      state.main_title = data[0].content;
      state.main_title_t = data[0].column1;
      state.connect_content=data[0].column2;
    },
    module18Init({state,commit},data) {
      state.code1 = data[0].content;
      state.code2 = data[0].column1;
      state.copy_right = data[0].column2;
    },
    init({commit},index){
      let i = index===undefined ? 0:index;
      commit("UPDATE_CURRENT_MENU",i);
    }
  },
  modules: {
    one,
  },
  strict: false,
  // plugins: [createLogger()]
})




