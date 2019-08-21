<template>
  <div class="jiliangtianjia" width:600px>
      <h4>客户资料添加</h4>
   <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="客户编号" prop="name">
    <el-input v-model="kehubianhao" placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item label="客户全称" prop="name">
    <el-input v-model="kehuquancheng" placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item label="帐款归属" prop="name">
    <el-input v-model="zhangkuanguishu" placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item label="业务人员" prop="name">
    <el-input v-model="业务人员" placeholder="请输入内容"></el-input>
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
        danweibianhao: '',
         danweimingcheng: '',
        yingwenming: '',
        beizhu: '',
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
