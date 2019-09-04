<template>
  <div>
    <el-container>
      <el-header style="background:white;height:5vh;border-bottom:1px solid #e6e6e6;">
        <el-row style>
          <el-col :span="21" style>
            <div
              style="padding-top:12px;border-right:1px solid #e6e6e6;height:36px;float:left"
              :style="{width:(isCollapse?'44px':'157px')}"
            >
              <div style="overflow: hidden;height:20px;">ERP管理系统</div>
            </div>
            <div
              style="width: 60px; cursor: pointer;height:100%;margin:10px 0px 0px 8px;float:left"
              @click.prevent="toggleSideBar"
            >
              <i v-show="!isCollapse" class="el-icon-d-arrow-left"></i>
              <i v-show="isCollapse" class="el-icon-d-arrow-right"></i>
            </div>
          </el-col>
          <el-col :span="3" style="font-size:24px;padding-top:5px">
            <el-button type="primary" icon="el-icon-user-solid">{{this.$store.state.user.uname}}</el-button>
            <el-button type="danger" icon="el-icon-lock" circle></el-button>
            <el-button type="primary" icon="el-icon-platform-eleme" circle></el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside :style="{width:(isCollapse?'auto':'178px')}">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                default-active="1-4-1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                :collapse="isCollapse"
                style="height:90vh"
                :router="true"
              >
                <template v-for="(item,index) in menuList">
                  <!-- 三级菜单 -->
                  <el-submenu :index="index+''" :key="item.path">
                    <template slot="title">
                      <i :class="item.icon"></i>
                      <span slot="title">{{item.title}}</span>
                    </template>
                    <el-submenu
                      v-for="child in item.children"
                      :index="child.path"
                      :key="child.path"
                    >
                      <template slot="title">
                        <i class="el-icon-folder"></i>
                        <span slot="title">
                          <span>{{child.title}}</span>
                        </span>
                      </template>
                      <el-menu-item-group>
                        <template v-for="childThree in child.children">
                          <template v-if="childThree.hidden==undefined">
                            <el-menu-item
                              :index="childThree.path"
                              :key="childThree.path"
                              @click="addTab(childThree.title,childThree.name)"
                            >
                              <span slot="title">
                                <i class="el-icon-document"></i>
                                <span>{{childThree.title}}</span>
                              </span>
                            </el-menu-item>
                          </template>
                        </template>
                      </el-menu-item-group>
                    </el-submenu>
                  </el-submenu>
                </template>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <el-tabs
            v-model="this.$store.state.editableTabsValue"
            type="card"
            closable
            @tab-remove="removeTab"
          >
            <template v-if="editableTabs.length==0">
              <div>
                <h3 class="text-center">欢迎使用ERP管理系统</h3>
              </div>
            </template>
            <el-tab-pane
              v-for="item in editableTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            >
              <router-view :name="item.content" />
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
      <el-footer style="background:#1d1b1b;height:5vh">本erp权限归giaoTeam所有</el-footer>
    </el-container>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      isCollapse: false,
      menuList: [],
      editableTabsValue: this.$store.state.editableTabsValue,
      editableTabs: this.$store.state.editableTabs,
      tabIndex: 2
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    toggleSideBar(){
      this.isCollapse=!this.isCollapse
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //节点名称 节点标识 节点内容(页面内容)
    addTab(title, name) {
      this.$store.commit("addTab", { title, name });
      // if (JSON.stringify(this.editableTabs).indexOf(name) == -1) {
      //   //当数组中不存在这个tab 才push进入数组
      //   this.editableTabs.push({
      //     title: title,
      //     name: name,
      //     content: name
      //   });
      // }
      // this.editableTabsValue = name;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      //如果要删除的节点是当前选中的
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      this.editableTabsValue = activeName;
      sessionStorage.setItem(`editableTabsValue`, activeName);
      // alert(activeName+"==="+oldActiveName)
    },
    initMenu() {
      // this.$ajax
      //   .post("/menu/menuAll")
      //   .then(resp => {
      //     // console.log("ALL路由信息" + JSON.stringify(resp));
      //     let user = this.$store.state.user;
      //     let strMenu = JSON.stringify(this.menuList); //resp.data
      //     let menus = [];
      //     // alert(JSON.stringify(resp.data))
      //     user.roles.forEach(role => {
      //       role.menus.forEach(oneMenu => {
      //         // alert(JSON.stringify(oneMenu));
      //         if (strMenu.indexOf(oneMenu.title) != -1) {
      //           menus.push(oneMenu);
      //         }
      //       });
      //     });

      //     this.menuList=resp.data;
      //   })
      //   .catch(e => {});
    }
  },
  created() {
    let user = this.$store.state.user;
    if (JSON.stringify(user) == "{}") {
      //store里的user为空
      this.$store.commit(
        "Syn_SET_USER",
        JSON.parse(sessionStorage.getItem(`user`))
      ); //将浏览器缓存的用户信息存入vuex
      user = this.$store.state.user;
    }
    console.log("index.vue 准备初始化动态路由...");
    //  获取路由
    // alert(JSON.stringify(this.$router.options))
    this.$router.options.routes.forEach(element => {
      if (element.isMenu) {
        console.log(element);
        this.menuList.push(element);
      }
    });
  },
  mounted() {
    this.initMenu();
  }
};
</script>
<style  scoped>
</style>