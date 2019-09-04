<template>
  <div class="listProduct" style="width:100%">
    <el-card class="box-card" shadow="never">
      <div slot="header" class="clearfix">
        <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>员工管理</span>
      </div>
      <div>
        <el-form
          ref="form"
          label-width="80px"
          style="text-align: left;"
          :inline="true"
          class="demo-form-inline"
        >
          <el-form-item>
            <el-select v-model="selectType" placeholder="请选择类型">
              <el-option label="员工工号" value="employeeId"></el-option>
              <el-option label="员工姓名" value="empName"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="支持模糊查询" v-model="result"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" >查询</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="pageInfo.records" border>
          <el-table-column prop="employeeId" label="员工工号"></el-table-column>
          <el-table-column prop="empName" label="员工姓名"></el-table-column>
          <el-table-column prop="password" label="密码"></el-table-column>
          <el-table-column prop="sex" label="性别">
            <template slot-scope="scope">
              <!-- scope.row 遍历的当前对象 -->
              <!-- scope.row.id 获取当前对象的属性值 -->
              <span>{{scope.row.sex==0?'男':'女'}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="phone" label="手机号码"></el-table-column>
          <el-table-column prop="birth" label="出生日期"></el-table-column>
          <el-table-column prop="cardId" label="身份证" width="180"></el-table-column>
          <el-table-column prop="rId" label="角色"></el-table-column>
          <el-table-column prop="depId" label="部门"></el-table-column>
          <el-table-column label="操作" width="280">
            <!-- <template slot-scope="scope"> -->
              <el-button type="success" >查看</el-button>
              <el-button type="primary">修改</el-button>
              <el-button type="danger">删除</el-button>
            <!-- </template> -->
          </el-table-column>
        </el-table>
      </div>
    </el-card>
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
      selectType: "",
      result: "",
      pageInfo: {}, //分页查询到的商品信息
      pageSizes: [] //每页显示条数 数组
    };
  },
  //方法集合
  methods: {
  },
  //挂载完成（可以访问DOM元素）
  mounted() {
  },
  //监控data中的数据变化
  watch: {
    
  }
};
</script>
<style >
/*@import url(); 引入公共css类*/
.demo-form-inline {
  padding-top: 10px;
}
.el-pagination{
  margin-top: 15px;
}
</style>