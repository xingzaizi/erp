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
            <el-button type="primary" @click="pageHandler(pageInfo.pageNum,pageInfo.pageSize)">查询</el-button>
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
            <template slot-scope="scope">
              <el-button type="success" @click="showProduct(scope.row)">查看</el-button>
              <el-button type="primary" @click="updateProduct(scope.row)">修改</el-button>
              <el-button type="danger" @click="removeProduct(scope.row.pId)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageInfo.current"
          :page-sizes="pageSizes"
          :page-size="pageInfo.size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pageInfo.total"
        ></el-pagination>
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
    sortNumber(a, b) {
      return a - b;
    },
    //根据总条数计算 每页显示条数的数组
    //总条数,需要计算几个pageSize
    CalculateSizes(total, sizeCount) {
      let sizes = [];
      //通过总条数 推荐出 每页显示的条数
      for (let i = 0; i < sizeCount; i++) {
        sizes.push(total);
        total = parseInt(total / 2) == 0 ? 1 : parseInt(total / 2);
      }
      sizes.sort(this.sortNumber); //调用自定义排序函数(方法) 对数组进行升序排序
      var unique = sizes => [...new Set(sizes)]; //ES6去重的方法
      sizes = unique(sizes); //调用去重的方法
      this.pageSizes = sizes; //初始化每页显示条数的数组
      this.pageInfo.pageSize = sizes[0]; //将算出来的每页显示页数的第一个页数数量赋值给当前的PageInfo的PageSize 简单来说就是使用默认使用第一个的每页显示条数
    },
    //分页查询函数
    pageHandler(current, size) {
      let _this = this;
      this.selectType = this.selectType == "" ? "empName" : this.selectType;
      this.result = this.result == "" ? "" : this.result;
      let obj = {};
      obj[this.selectType] = this.result;
      //ajax
      _this.$ajax
        .get(
          `employee/emps?current=${current}&size=${size}`,
          {
            obj
          }
        )
        .then(resp => {
          _this.pageInfo = resp.data;
          _this.CalculateSizes(_this.pageInfo.total, 4); //调用函数 根据total(总条数)计算出每页显示的条数数组
          console.log(_this.pageInfo);
        })
        .catch(e => {
          alert(e);
        });
    },
    //每页显示条数值改变 回调函数
    handleSizeChange(size) {
      this.pageHandler(this.pageInfo.current, size);
    },
    //当前页数值改变 回调函数
    handleCurrentChange(current) {
      this.pageHandler(current, this.pageInfo.size);
    },
    showProduct(productObj) {
      let _this = this;
      //将单个商品信息存入缓存中 并跳转到查询单个商品信息页面
      _this.$store.dispatch("asynSaveProduct", {
        product: productObj,
        callback: function() {
          _this.$router.replace("/product");
        }
      });
    },
    updateProduct(productObj) {
      let _this = this;
      //将单个商品信息存入缓存中 并跳转到查询单个商品信息页面
      _this.$store.dispatch("asynSaveProduct", {
        product: productObj,
        callback: function() {
          _this.$router.replace("/updateProduct");
        }
      });
    },
    removeProduct(pId) {
      this.$axios
        .delete("http://127.0.0.1:8080/product/" + pId)
        .then(resp => {
          if (resp.data.code == "200") {
            alert("删除成功");
            this.$router.replace(`/listProduct/${Math.random()}`);
          }
        })
        .catch(e => {
          alert(e);
        });
    }
  },
  //挂载完成（可以访问DOM元素）
  mounted() {
    this.pageHandler(1, 3);
  },
  //监控data中的数据变化
  watch: {
    $route(to, from) {
      this.pageHandler(1, 3);
    }
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