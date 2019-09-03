import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //登陆后的用户信息
    user: {},
    //标签页集合
    editableTabs: JSON.parse(sessionStorage.getItem(`editableTabs`))==null?[]:JSON.parse(sessionStorage.getItem(`editableTabs`)),
    //当前选中的标签页
    editableTabsValue: sessionStorage.getItem(`editableTabsValue`),
    testMessage: "测试缓存数据",
    menuList: []
  },
  mutations: {
    addTab(state, jsonObj) {
      if (JSON.stringify(state.editableTabs).indexOf(jsonObj.name) == -1) {
        //当数组中不存在这个tab 才push进入数组
        state.editableTabs.push({
          title: jsonObj.title,
          name: jsonObj.name,
          content: jsonObj.name
        });
      }
      state.editableTabsValue = jsonObj.name;
      //解决页面刷新丢失store数据 存入浏览器缓存
      sessionStorage.setItem(`editableTabs`, JSON.stringify(state.editableTabs))
      sessionStorage.setItem(`editableTabsValue`, state.editableTabsValue)
    },
    removeTab(state, targetName){
      state.editableTabs.forEach((tab, index) => {
        if(tab.content==targetName){
          state.editableTabs.splice(index,1)
        }
      })
      sessionStorage.setItem(`editableTabs`,JSON.stringify(state.editableTabs))
    }
    ,
    // 同步 this.$store.commit("Syn_SET_USER", user); // user 为参数
    Syn_SET_USER(state, user) {
      // console.log(params.Token, params.userNo);
      state.user = user;
      //解决页面刷新丢失store数据 存入浏览器缓存
      sessionStorage.setItem(`user`, JSON.stringify(user))

      // user.roles.forEach(role => {
      //   role.menus.forEach(menu => {
      //     //menu 菜单项
      //     alert(JSON.stringify(menu))
      //     // this.$router.push('/user-admin')
      //     // this.$router.addRoutes(menu);//将解析后的菜单数据添加到路由里
      //   })
      // });
    }
  },
  actions: {
    //异步 this.$store.dispatch('Asyn_SET_USER',user) user 为参数
    Asyn_SET_USER(context, Object) {
      //处理异步操作
      context.commit('SET_TOKEN', Object)
    }
  }
})
