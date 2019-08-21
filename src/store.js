import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //登陆后的用户信息
    user: {},
    //标签页集合
    editableTabs: [],
    //当前选中的标签页
    editableTabsValue: "1"
  },
  mutations: {
    addTab(state,jsonObj) {
      if (JSON.stringify(state.editableTabs).indexOf(jsonObj.name) == -1) {
        //当数组中不存在这个tab 才push进入数组
        state.editableTabs.push({
          title: jsonObj.title,
          name: jsonObj.name,
          content: jsonObj.name
        });
      }
      state.editableTabsValue = jsonObj.name;
    }
  },
  actions: {

  }
})
