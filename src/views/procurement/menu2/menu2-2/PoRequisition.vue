<template>
  <el-container style="height:100vh">
    <el-header height>
      <!-- Header content -->
      <el-row :gutter="20">
        <el-col :span="8" :offset="11">
          <div>
            <h1>采购订单</h1>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-main>
        <!-- Main content -->

        <el-row :gutter="20">
          <el-col :span="16" :offset="5">
            <div>
              <el-form :inline="true" class="demo-form-inline" label-width="80px">
                <el-form-item label="搜索类型:" prop="name">
                  <el-select v-model="name" placeholder="请选择搜索类型">
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="搜索信息:">
                  <el-input v-model="admin" placeholder="请输入搜索信息"></el-input>
                </el-form-item>
                <el-form-item label="选择日期:">
                  <el-date-picker
                  v-model="value2"
                  type="daterange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions"
                ></el-date-picker>
                </el-form-item>
                <br>
                <el-form-item label="审核类型:" prop="name">
                  <el-select v-model="name" placeholder="请选择搜索类型">
                    <el-option label="全部" value="1"></el-option>
                    <el-option label="未审核" value="2"></el-option>
                    <el-option label="已审核" value="2"></el-option>
                    <el-option label="失效" value="2"></el-option>
                  </el-select>
                </el-form-item>

                
                <!-- <el-form-item label="开始日期:">
                  <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
                </el-form-item>
                <el-form-item label="结束日期:">
                  <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
                </el-form-item> -->
                
                <el-form-item>
                  <el-button type="primary">查询</el-button>
                  <el-button style="background:#67C23A;color:white">新增</el-button>
                  <el-button>重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="18" :offset="4">
            <div>
              <el-table
                border
                :data="tableData"
                style="width: 100%"
                :row-class-name="tableRowClassName"
              >
                <el-table-column prop="date" label="序号" width="180"></el-table-column>
                <el-table-column prop="name" label="供应商名称" width="180"></el-table-column>
                <el-table-column prop="address" label="日期"></el-table-column>
                <el-table-column prop="address" label="单况"></el-table-column>
                <el-table-column prop="id" label="操作">
                  <template>
                    <el-button size="mini">编辑</el-button>
                    <el-button size="mini" type="danger">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :offset="8">
            <div>
              <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>
<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      name: "",
      admin: "",
      value1: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    tableRowClassName({ row, rowIndex }) {
      row;
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style  scoped>
/*@import url(); 引入公共css类*/
</style>











