<template>
  <!-- 预付款 -->
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="el-icon-star-on">应付冲款单(预付款)</span>
        <div style="margin-left: 1100px">
          <el-button type="info" plain>返回</el-button>
          <el-button type="success" plain>保存</el-button>
          <el-button type="warning" plain disabled>修改</el-button>
        
        </div>
      </div>

      <!-- 头部表单 -->
      <div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="110px"
          class="demo-ruleForm"
          :inline="true"
        >
          <el-form-item label="供应商" prop="name" style>
            <el-input v-model="ruleForm.name" style="width:400px"></el-input>
          </el-form-item>
          <el-form-item label="单据日期" required>
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width:400px"
              ></el-date-picker>
            </el-form-item>
          </el-form-item>

          <el-form-item label="结算方式一" prop="resource">
            <el-input v-model="ruleForm.resource" style="width:250px"></el-input>
            <el-input v-model="ruleForm.resource" style="width:150px"></el-input>
          </el-form-item>

          <el-form-item label="单据号码" prop="resource">
            <el-input v-model="ruleForm.resource" style="width:400px"></el-input>
          </el-form-item>

          <el-form-item label="结算方式二" prop="delivery">
            <el-input v-model="ruleForm.resource" style="width:250px"></el-input>
            <el-input v-model="ruleForm.resource" style="width:150px"></el-input>
          </el-form-item>

          <el-form-item label="币别" prop="delivery">
            <el-input v-model="ruleForm.resource" style="width:400px"></el-input>
          </el-form-item>

          <el-form-item label="结算方式三" prop="delivery">
            <el-input v-model="ruleForm.resource" style="width:250px"></el-input>
            <el-input v-model="ruleForm.resource" style="width:150px"></el-input>
          </el-form-item>

          <el-form-item label="汇率" prop="delivery">
            <el-input v-model="ruleForm.resource" style="width:400px"></el-input>
          </el-form-item>

          <el-form-item label="折扣率(%)" prop="delivery">
            <el-input v-model="ruleForm.resource" style="width:400px" placeholder="0.00"></el-input>
          </el-form-item>

          <el-form-item label="应付冲款类型" prop="region">
            <el-input v-model="ruleForm.resource" style="width:400px" placeholder="预付款" disabled></el-input>
          </el-form-item>

          <el-form-item label="终止帐月" required>
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width:400px"
              ></el-date-picker>
            </el-form-item>
          </el-form-item>
          <el-form-item label="凭证编号" prop="delivery">
            <el-input v-model="ruleForm.resource" style="width:400px" disabled></el-input>
          </el-form-item>

          <!-- 中间table表格 -->
          <el-card class="box-card">
            <div>
              <template>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                  <el-tab-pane label="预付" name="second">
                    <el-table :data="tableData" border style="width: 100%">
                      <el-table-column prop="date" label="预付金额" width="350"></el-table-column>
                      <el-table-column prop="name" label="来源别" width="350"></el-table-column>
                      <el-table-column prop="address" label="来源单号" width="350"></el-table-column>
                      <el-table-column prop="address" label="摘要" width="350"></el-table-column>
                    </el-table>
                  </el-tab-pane>
                  <el-tab-pane label="备注" name="first">配置管理</el-tab-pane>
                </el-tabs>
              </template>
            </div>
          </el-card>
          <br />

          <div>
            <el-form-item label="所属部门" prop="delivery">
              <el-input v-model="ruleForm.resource" style="width:400px"></el-input>
            </el-form-item>

            <el-form-item label="制单人员" prop="delivery">
              <el-input v-model="ruleForm.resource" style="width:400px"></el-input>
            </el-form-item>

            <el-form-item label="所属项目" prop="delivery">
              <el-input v-model="ruleForm.resource" style="width:400px"></el-input>
            </el-form-item>

            <el-form-item label="复刻人员" prop="delivery">
              <el-input v-model="ruleForm.resource" style="width:400px"></el-input>
            </el-form-item>
          </div>
        </el-form>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-submenu index="1" disabled>
            <template slot="title">
              <i class="el-icon-s-grid"></i>功能
            </template>
            <el-menu-item index="1-1">载入单币别账款</el-menu-item>
            <el-menu-item index="1-2">载入多币别账款</el-menu-item>
          </el-submenu>

          <el-submenu index="2" disabled>
            <template slot="title">
              <i class="el-icon-s-grid"></i>自动计算
            </template>
            <el-menu-item index="2-1">以下冲款</el-menu-item>
            <el-menu-item index="2-2">以下折让</el-menu-item>
            <el-menu-item index="2-3">以下空白</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </el-card>
  </div>
</template>


<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      activeName: "second",
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
</style>
