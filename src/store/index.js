/*Vuex*/
import Vue from '../../static/frames/vue'
import Vuex from '../../static/frames/vuex'
import createLogger from 'vuex/dist/logger'


Vue.use(Vuex);
export default new Vuex.Store({
  state :{
    host:"http://47.102.210.175",
    screen_width:0,
    screen_height:0,
    name:"",
    password:"",
    main_title : "Simple Cloud Memo",
  },
  getters:{
    main_width : state => {
      let w = state.screen_width;
      if (w<=1200){
        return state.screen_width*0.9;
      }else if (w>1200&&w<=1500){
        return state.screen_width*0.85;
      }else if (w>1500){
        return 1200;
      }

    },
    main_height : state => {
      return state.screen_height;
    }
  },
  mutations:{
    MODULES_SHOW_UPDATE(state,flag){
      state.isModulesShow = flag === 'click' ? !state.isModulesShow:false;
    },
  },
  actions:{
    selectModulesHide({commit,state}){
      if (state.isModulesShow === false) return;
      commit("MOUSE_ON_MODULE_UPDATE",null);
      setTimeout(()=>commit("MOUSE_ON_MODULE_UPDATE",null),1000);
    }
  },
  strict: false,
  plugins: [createLogger()]
})




