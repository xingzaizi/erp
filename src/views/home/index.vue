<template>
  <div>
    <el-container>
      <el-header style="background:#eee;height:5vh">
        <el-row>
          <el-col :span="3">
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;padding-top:3px">
              <el-radio-button :label="false">展开</el-radio-button>
              <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group>
          </el-col>
          <el-col :span="12">中间部分</el-col>
          <el-col :span="6">欢迎</el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside :style="{width:(isCollapse?'auto':'200px')}">
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
                      <i :class="item.meta.icon"></i>
                      <span slot="title">{{item.meta.title}}</span>
                    </template>
                    <el-submenu
                      v-for="child in item.children"
                      :index="child.path"
                      :key="child.path"
                    >
                      <template slot="title">
                        <i class="el-icon-folder"></i>
                        <span slot="title">
                          <span>{{child.meta.title}}</span>
                        </span>
                      </template>
                      <el-menu-item-group>
                        <template v-for="childThree in child.children">
                          <template v-if="childThree.hidden==undefined">
                            <el-menu-item
                              :index="childThree.path"
                              :key="childThree.path"
                              @click="addTab(childThree.meta.title,childThree.name)"
                            >
                              <span slot="title">
                                <i class="el-icon-document"></i>
                                <span>{{childThree.meta.title}}</span>
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
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    }
  },
  created() {
    //  获取路由
    // alert(JSON.stringify(this.$router.options))
    this.$router.options.routes.forEach(element => {
      if (element.meta) {
        console.log(element);
        this.menuList.push(element);
      }
    });
  }
};
</script>
<style  scoped>
</style>