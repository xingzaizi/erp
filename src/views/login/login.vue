<template>
  <div class="login-container">
    <el-form
      :model="ruleForm2"
      :rules="rules2"
      status-icon
      ref="ruleForm2"
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-page"
    >
      <h3 class="title">ERP系统登录</h3>
      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="ruleForm2.username"
          auto-complete="off"
          placeholder="用户名"
          name="username"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="ruleForm2.password"
          auto-complete="off"
          placeholder="密码"
          name="password"
        ></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logining: false,
      ruleForm2: {
        username: "",
        password: ""
      },
      rules2: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      checked: false
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.ruleForm2.validate(valid => {
        //如果所有的规则都满足条件则跳转后台APi登录url
        if (valid) {
          this.logining = true;
          this.$ajax({
            url: "/login",
            method: "post",
            data: {
              username: this.ruleForm2.username,
              password: this.ruleForm2.password
            },
            //设置ajax提交的方式 按form表单提交
            transformRequest: [
              function(data) {
                // Do whatever you want to transform the data
                let ret = "";
                for (let it in data) {
                  ret +=
                    encodeURIComponent(it) +
                    "=" +
                    encodeURIComponent(data[it]) +
                    "&";
                }
                return ret;
              }
            ],
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          })
            .then(resp => {
              console.log("登录成功...");
              if (resp == undefined) {
                this.$message({
                  showClose: true,
                  message: "用户名或密码错误",
                  type: "error"
                });
              } else {
                // console.log(resp.data)//用户对象的所有信息 用户、角色、资源
                this.$store.commit('Syn_SET_USER',resp.data)//同步将用户信息存入vuex
                this.$message({
                  showClose: true,
                  message: "登录成功",
                  type: "success",
                });
                this.$router.push({ path: "/" });
                
              }
              this.logining = false;
            })
            .catch(e => {
              this.logining = false;
              console.log(e);
              alert(e.message);
            });
        } else {
          console.log("error submit!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100%;
}
.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
</style>