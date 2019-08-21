<template>
  <div class="wuliaoleibiechaxun">
    <template>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-button type="success">查询</el-button>

      <el-button type="success" round @click="save">添加</el-button>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="leibiebianhao" label="部门编号" width="120"></el-table-column>
        <el-table-column prop="leibiemingcheng" label="部门名称" width="120"></el-table-column>
        <el-table-column prop="yingwenming" label="英文名称" width="120"></el-table-column>
        <el-table-column prop="cunhuokemu" label="备注" width="120"></el-table-column>
        <el-table-column prop="caozuo" label="操作" width="300">
          <el-button type="danger">删除</el-button>
          <el-button type="warning" @click="update">修改</el-button>
        </el-table-column>
      </el-table>

      <div class="block">
        <span class="demonstration"></span>
        <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 表格数据
      tableData: [
        {
          date: "1",
          name: "上海仓库",
          address: "50"
        },
        {
          date: "2",
          name: "北京仓库",
          address: "34"
        },
        {
          date: "3",
          name: "深圳仓库",
          address: "81"
        },
        {
          date: "4",
          name: "澳门仓库",
          address: "15"
        }
      ],
      //   下拉框数据
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  methods: {
    save() {
      //添加一个元素到标签页数组
      this.$store.commit("addTab", {title:"添加部门",name:"saveDepartment"});
      //跳页面
      this.$router.replace("/basic/menu1/menu1-1/save");
    },
    update(){
      this.$store.commit("addTab", {title:"修改部门",name:"updateDepartment"});
      this.$router.replace("/basic/menu2/menu2-2/update");
    }
  }
};
</script>

<style  scoped>
/*@import url(); 引入公共css类*/
</style>