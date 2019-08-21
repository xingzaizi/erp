<template>
  <div class="jiliangtianjia" width:600px>
      <h4>供应商类别添加</h4>
   <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="供应商类别编号" prop="name">
    <el-input v-model="kehuleibiebianhao" placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item label="供应商类别名称" prop="name">
    <el-input v-model="kehuleibiemingcheng" placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item label="英文名" prop="name">
    <el-input v-model="yingwenming" placeholder="请输入内容"></el-input>
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
