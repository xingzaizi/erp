<template>
<div class='cangkuchaxun'>
 <template>
   <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="仓库名称">
    <el-input v-model="form.Stoname"></el-input>
  </el-form-item>
  <el-form-item label="仓库简称">
    <el-input v-model="form.Stosimplename"></el-input>
  </el-form-item>
  <el-form-item label="联系人">
    <el-input v-model="form.Stoconnectper"></el-input>
  </el-form-item>
  <el-form-item label="联系人id">
    <el-input v-model="form.Stoempid"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="xinzeng()">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-button type="success">查询</el-button>

      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="stoid" label="仓库编号" width="130"></el-table-column>
        <el-table-column prop="stoname" label="仓库名称" width="120"></el-table-column>
        <el-table-column prop="stosimplename" label="仓库简称" width="120"></el-table-column>
        <el-table-column prop="stoconnectper" label="联系人" width="120"></el-table-column>
        <el-table-column prop="stoempid" label="联系人ID" width="120"></el-table-column>
        <el-table-column prop="stophone" label="联系电话" width="120"></el-table-column>
        <el-table-column prop="stoaddress" label="仓库地址" width="120"></el-table-column>
        <el-table-column prop="storemark" label="备注" width="120"></el-table-column>
        <el-table-column prop="safetyone" label="保留字段" width="120"></el-table-column>
        <el-table-column prop="safetytwo" label="保留字段" width="120"></el-table-column>
        <el-table-column prop="enables" label="是否删除" width="120"></el-table-column>
        <el-table-column prop="caozuo" label="操作" width="300">
          <template slot-scope="scope">

          <el-button type="danger" @click="shanchu(scope.row.stoid)">删除</el-button>
          <el-button type="warning" @click="xiugai(scope.row.tableData)">修改</el-button>
          </template>
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
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
tableData: [

      ],
      //   下拉框数据
      options: [
        
      ],
        form: {
          Stoname:'',
          Stosimplename:'',
          Stoconnectper:'',
          Stoempid:'',
        },
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  xinzeng(){
  let _this=this;
              _this.$axios.post('http://127.0.0.1:8080/storage/addStorage',JSON.stringify(_this.form),{
               headers:{ 
                 "Content-Type":"application/json;charset=utf-8"
              }
              }).then(resp =>{
                   if(resp.data.code=="200"){
                     alert("新增成功");
                     this.jiazai();
                   }else{
                     alert("新增失败");
                   }
              }).catch(e=>{
                   alert(e);
              });    
            },
jiazai:function(){
    let _this=this;
              _this.$axios.get('http://127.0.0.1:8080/storage/findStorage').then(resp =>{
                   _this.tableData=resp.data;
              }).catch(e=>{
                   alert(e);
              });    
            },
            xiugai(a){
               let _this=this;
              _this.$axios.put('http://127.0.0.1:8080/storage/modifyStorage',JSON.stringify(a),{
               headers:{ 
                 "Content-Type":"application/json;charset=utf-8"
              }
              }).then(resp =>{
                   if(resp.data.code=="200"){
                     alert("修改成功");
                     this.jiazai();
                   }else{
                     alert("修改失败");
                   }
              }).catch(e=>{
                   alert(e);
              });
            },
            shanchu(a){
               let _this=this;
              _this.$axios.get(`http://127.0.0.1:8080/storage/removeStorage/${a}`).then(resp =>{
                   if(resp.data.code=="200"){
                     alert("删除成功");
                     this.jiazai();
                   }else{
                     alert("删除失败");
                   }
              }).catch(e=>{
                   alert(e);
              });
            },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
this.jiazai();
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>
/*@import url(); 引入公共css类*/

</style>