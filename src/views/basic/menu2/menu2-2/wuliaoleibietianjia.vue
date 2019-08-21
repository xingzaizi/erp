<template>
  <div class="wuliaoleibietianjia" width:600px>
      <h4>物料类别添加</h4>
   <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="类别编号" prop="name">
    <el-input v-model="leibiebianhao" placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item label="类别名称" prop="name">
    <el-input v-model="leibiemingcheng" placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item label="英文名" prop="name">
    <el-input v-model="yingwenming" placeholder="请输入内容"></el-input>
  </el-form-item>
<el-form-item label="存活科目" prop="name">
    <el-input v-model="cunhuokemu" placeholder="请输入内容"></el-input>
  </el-form-item>
<el-form-item label="销售收入科目" prop="name">
    <el-input v-model="xiaoshoushourukemu" placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item label="赠品费用科目" prop="name">
    <el-input v-model="zengpinfeiyongkemu" placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item label="其他收入科目" prop="name">
    <el-input v-model="qitashourukemu" placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item label="其他费用科目" prop="name">
    <el-input v-model="qitafeiyongkemu" placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item label="其他成本科目" prop="name">
    <el-input v-model="qitachengbenkemu" placeholder="请输入内容"></el-input>
  </el-form-item>

  <el-form-item label="备注" prop="name">
    <el-input v-model="beizhu" placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
  </el-form-item>
</el-form>

  </div>

</template>
<script>
  export default {
    data() {
      return {
        yingwenming: '',
        beizhu: '',
        qitachengbenkemu:'',
        qitafeiyongkemu:'',
        qitashourukemu:'',
        zengpinfeiyongkemu:'',
        xiaoshoushourukemu:'',
        cunhuokemu:'',
        leibiemingcheng:'',
        leibiebianhao:'',
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
  </script>
