<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="el-icon-star-on">销售发票明细</span>
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
          <el-form-item label="客户"  prop="name" >
            <el-input v-model="ruleForm.name" style="width:600px"></el-input>
          </el-form-item>
          <el-form-item label="单据日期" required>
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width:600px"
              ></el-date-picker>
            </el-form-item>
          </el-form-item>

          <el-form-item label="单据类型" prop="">
            <el-select v-model="ruleForm.region" style="width:600px" placeholder="请选择单据类型">
              <el-option label="采购发票" value="shanghai"></el-option>
              <el-option label="退货及折让证明" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="单据号码" prop="resource">
            <el-input v-model="ruleForm.resource" style="width:600px"></el-input>
          </el-form-item>

          <el-form-item label="单价是否含税" prop="delivery">
            <el-select v-model="ruleForm.region" style="width:600px" placeholder="请选择是否含税">
              <el-option label="未税" value="shanghai"></el-option>
              <el-option label="含税" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="发票号码" prop="delivery">
            <el-input v-model="ruleForm.resource" style="width:600px"></el-input>
          </el-form-item>

          <el-form-item label="销售核对状态" prop="delivery">
            <el-select v-model="ruleForm.region" style="width:600px" placeholder="请选择销售核对状态">
              <el-option label="未核对" value="shanghai"></el-option>
              <el-option label="已核对" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="发票类型" prop="delivery">
            <el-input v-model="ruleForm.resource" style="width:600px"></el-input>
          </el-form-item>

          <el-form-item label="凭证编号" prop="delivery">
            <el-input v-model="ruleForm.resource" style="width:600px" placeholder="0.00"></el-input>
          </el-form-item>

          <el-form-item label="币别" prop="region">
            <el-input v-model="ruleForm.resource" style="width:600px"></el-input>
          </el-form-item>

          <el-form-item label="差价凭证编号" >
            <el-input v-model="ruleForm.resource" style="width:600px"></el-input>
          </el-form-item>
          <el-form-item label="汇率" prop="delivery">
            <el-input v-model="ruleForm.resource" style="width:600px"></el-input>
          </el-form-item>

          <!-- 中间table表格 -->
          <el-card class="box-card">
            <div>
              <template>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                  <el-tab-pane label="内容" name="second">
                    <el-table :data="tableData" border style="width: 100%">
                      <el-table-column prop="date" label="(栏号)" width="80"></el-table-column>
                      <el-table-column prop="name" label="物料编号"  sortable  width="140" ></el-table-column>
                      <el-table-column prop="address" label="物料名称" width="140"></el-table-column>
                      <el-table-column prop="address" label="规格型号" width="140"></el-table-column>
                      <el-table-column prop="address" label="(单位名称)" width="140"></el-table-column>
                      <el-table-column prop="address" label="数量" width="140"></el-table-column>
                      <el-table-column prop="address" label="单价" width="140"></el-table-column>
                      <el-table-column prop="address" label="金额" width="140"></el-table-column>
                      <el-table-column prop="address" label="税率%" width="140"></el-table-column>
                      <el-table-column prop="address" label="税额" width="140"></el-table-column>
                      <el-table-column prop="address" label="含税金额" width="140"></el-table-column>
                      <el-table-column prop="address" label="(未出数量)" width="140"></el-table-column>
                      <el-table-column prop="address" label="(销售订单号)" width="140"></el-table-column>
                      <el-table-column prop="address" label="分录备注" width="200"></el-table-column>
                    </el-table>
                  </el-tab-pane>
                  <el-tab-pane label="清单" name="first">
                        <el-table :data="tableData" border style="width: 100%">
                      <el-table-column prop="date" label="(栏号)" width="80"></el-table-column>
                      <el-table-column prop="name" label="(物料编号)" width="140"></el-table-column>
                      <el-table-column prop="address" label="(物料名称)" width="140"></el-table-column>
                      <el-table-column prop="address" label="(规格型号)" width="140"></el-table-column>
                      <el-table-column prop="address" label="(单位)" width="140"></el-table-column>
                      <el-table-column prop="address" label="(单价)" width="140"></el-table-column>
                      <el-table-column prop="address" label="(金额)" width="140"></el-table-column>
                      <el-table-column prop="address" label="数量" width="140"></el-table-column>

                       <el-table-column prop="address" label="单价" width="140"></el-table-column>
                      <el-table-column prop="address" label="金额" width="140"></el-table-column>
                      <el-table-column prop="address" label="税率%" width="140"></el-table-column>
                      <el-table-column prop="address" label="税额" width="140"></el-table-column>
                      <el-table-column prop="address" label="含税金额" width="140"></el-table-column>


                      <el-table-column prop="address" label="(汇差)" width="140"></el-table-column>
                      <el-table-column prop="address" label="(价差)" width="140"></el-table-column>
                      <el-table-column prop="address" label="(价差本位币)" width="200"></el-table-column>
                       <el-table-column prop="address" label="(差额合计)" width="140"></el-table-column>
                      <el-table-column prop="address" label="(来源别单)" width="140"></el-table-column>
                      <el-table-column prop="address" label="(来源单号)" width="200"></el-table-column>
                      <el-table-column prop="address" label="分录备注" width="200"></el-table-column>
                    </el-table>
                  </el-tab-pane>

                   <el-tab-pane label="账款" name="third">
                       <el-form-item label="账款归属"  prop="name" >
                    <el-input v-model="ruleForm.name" style="width:500px"></el-input>
          </el-form-item>
          &nbsp;&nbsp;<el-form-item label="结算方式一" >
            <el-input v-model="ruleForm.resource" style="width:350px">01    转账</el-input>
            <el-input v-model="ruleForm.resource" style="width:230px"></el-input>
          </el-form-item>
          <el-form-item label="付款条件" prop="">
               <el-select v-model="ruleForm.region" style="width:150px" placeholder="请选择付款条件">
              <el-option label="货到" value="shanghai"></el-option>
              <el-option label="次月" value="beijing"></el-option>
                  <el-option label="月结" value="shanghai"></el-option>
              <el-option label="其他" value="beijing"></el-option>
            </el-select>
            <el-input v-model="ruleForm.resource" style="width:330px"></el-input> 天
          </el-form-item>

        &nbsp;&nbsp; <el-form-item label="结算方式二" prop="">
            <el-input v-model="ruleForm.resource" style="width:350px"></el-input>
            <el-input v-model="ruleForm.resource" style="width:230px"></el-input>
          </el-form-item>

          <el-form-item label="付款日期" >
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width:500px"
              ></el-date-picker>
            </el-form-item>
          </el-form-item>
            <el-form-item label="结算方式三" prop="">
            <el-input v-model="ruleForm.resource" style="width:350px"></el-input>
            <el-input v-model="ruleForm.resource" style="width:230px"></el-input>
          </el-form-item>
                       <el-form-item label="账款月份" >
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width:500px"
              ></el-date-picker>
            </el-form-item>
          </el-form-item>
                   </el-tab-pane>

                    <el-tab-pane label="备注" name="fourth"></el-tab-pane>
                </el-tabs>
              </template>
            </div>
          </el-card>
          <br />

        <!--底部  -->
          <div>
            <el-form-item label="采购人员" prop="delivery">
              <el-input v-model="ruleForm.resource" style="width:600px"></el-input>
            </el-form-item>
            <el-form-item label="所属部门" prop="delivery">
              <el-input v-model="ruleForm.resource" style="width:600px"></el-input>
            </el-form-item>

            <el-form-item label="制单人员" prop="delivery">
              <el-input v-model="ruleForm.resource" style="width:600px"></el-input>
            </el-form-item>

            <el-form-item label="所属项目" prop="delivery">
              <el-input v-model="ruleForm.resource" style="width:600px"></el-input>
            </el-form-item>

            <el-form-item label="复刻人员" prop="delivery">
              <el-input v-model="ruleForm.resource" style="width:600px"></el-input>
            </el-form-item>
          </div>
        </el-form>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-grid"></i>查询
            </template>
            <el-menu-item index="1-1">单据状况查询</el-menu-item>
            <el-menu-item index="1-2">历史交易查询</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-grid"></i>转单
            </template>
            
            <el-menu-item index="2-1"><el-button type="text" @click="dialogVisible = true">销售订单转入</el-button></el-menu-item>
            <el-menu-item index="2-2">转销售出库</el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-grid"></i>功能
            </template>
            <el-menu-item index="3-1">批次变更单价</el-menu-item>
            
            <el-menu-item index="3-2"><el-button type="text" @click="qingVisible = true">发票清单维护</el-button></el-menu-item>
            <el-menu-item index="3-3" @click="GenerateInvoiceContent">生成发票内容</el-menu-item>
            <el-menu-item index="3-4">核对状态切换</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
        <!-- 发票清单维护小窗口 -->
<el-dialog title="销售发票清单维护" :visible.sync="qingVisible">
   <!-- 销售入库单内嵌套窗口 -->
     <el-dialog
      width="30%"
      title="单选--销售入库单"
      :visible.sync="innerVisible1"
      append-to-body>
      <el-button>取回</el-button>
       <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
    ><el-table-column prop="name" label="" sortable width="130" type="selection"></el-table-column>
      <el-table-column prop="date" label="(单据号码)" sortable width="130"></el-table-column>
      <el-table-column prop="name" label="(单据日期)" sortable width="130"></el-table-column>
    </el-table>
    </el-dialog>
    <!-- 销售退货单内嵌套窗口 -->
     <el-dialog
      width="30%"
      title="单选--销售退货单"
      :visible.sync="innerVisible2"
      append-to-body>
      <el-button>取回</el-button>
       <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
    ><el-table-column prop="name" label="" sortable width="130" type="selection"></el-table-column>
      <el-table-column prop="date" label="(单据号码)" sortable width="130"></el-table-column>
      <el-table-column prop="name" label="(单据日期)" sortable width="130"></el-table-column>
    </el-table>
    </el-dialog>
    <!-- 销售折让确认单内嵌套窗口 -->
     <el-dialog
      width="30%"
      title="单选--销售折让确认单"
      :visible.sync="innerVisible3"
      append-to-body>
      <el-button>取回</el-button>
       <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
    ><el-table-column prop="name" label="" sortable width="130" type="selection"></el-table-column>
      <el-table-column prop="date" label="(单据号码)" sortable width="130"></el-table-column>
      <el-table-column prop="name" label="(单据日期)" sortable width="130"></el-table-column>
    </el-table>
    </el-dialog>
   <el-card class="box-card">
      销售入库单<el-input v-model="input" placeholder="请输入内容" style="width:150px"></el-input>-
        <el-input v-model="input" placeholder="请输入内容" style="width:150px"></el-input>
        <el-button class="el-icon-view" style="width:60px"></el-button>
          <el-button type="primary" @click="innerVisible = true" class="el-icon-zoom-in" style="width:60px"></el-button> <br><br>
         销售退货单<el-input v-model="input" placeholder="请输入内容" style="width:150px"></el-input>-
        <el-input v-model="input" placeholder="请输入内容" style="width:150px"></el-input>
        <el-button class="el-icon-view" style="width:60px"></el-button>
          <el-button type="primary" @click="innerVisible = true" class="el-icon-zoom-in" style="width:60px"></el-button><br><br>
          折让确认单<el-input v-model="input" placeholder="请输入内容" style="width:150px"></el-input>-
        <el-input v-model="input" placeholder="请输入内容" style="width:150px"></el-input>
        <el-button class="el-icon-view" style="width:60px"></el-button>
          <el-button type="primary" @click="innerVisible = true" class="el-icon-zoom-in" style="width:60px"></el-button>
        </el-card>
 <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
    >
    
    <el-table-column prop="name" label="" sortable width="130" type="selection"></el-table-column>
      <el-table-column prop="name" label="栏号" sortable width="130"></el-table-column>
      <el-table-column prop="date" label="(来源单别)" sortable width="130"></el-table-column>
      <el-table-column prop="name" label="来源单号" sortable width="130"></el-table-column>
      <el-table-column prop="name" label="物料编码" sortable width="130"></el-table-column>
      <el-table-column prop="name" label="(物料名称)" sortable width="130"></el-table-column>

    <el-table-column prop="name" label="(规格型号)" sortable width="130"></el-table-column>
 <el-table-column prop="date" label="(单位)" sortable width="130"></el-table-column>
 <el-table-column prop="date" label="数量" sortable width="130"></el-table-column>
      <el-table-column prop="date" label="单价" sortable width="130"></el-table-column>
        <el-table-column prop="date" label="金额" sortable width="130"></el-table-column>
        <el-table-column prop="date" label="税率%" sortable width="130"></el-table-column>
        <el-table-column prop="date" label="税额" sortable width="130"></el-table-column>
        <el-table-column prop="date" label="(含税金额)" sortable width="130"></el-table-column>
      <el-table-column prop="name" label="分录备注" sortable width="130"></el-table-column>
      
    </el-table>

           <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">载 入</el-button>
          <el-button type="primary" @click="dialogVisible = false">取 回</el-button>
        </span>
  </el-dialog>


      <!-- 销售订单小窗口 -->
      <el-dialog title="销售订单转采购发票" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
         <el-dialog
      width="30%"
      title="多选--销售订单"
      :visible.sync="innerVisible"
      append-to-body>
      <el-button>取回</el-button>
       <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
    >
    <el-table-column prop="name" label="" sortable width="130" type="selection"></el-table-column>
      <el-table-column prop="date" label="(单据号码)" sortable width="130"></el-table-column>
      <el-table-column prop="name" label="(单据日期)" sortable width="130"></el-table-column>
    </el-table>
    </el-dialog>

        <el-card class="box-card">
  <div class="block" >    
    <span class="demonstration">日期区间</span>
    <el-date-picker
    style="width:500px"
      v-model="value6"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
     <el-button>载入资料</el-button>
  </div>

  单据区间<el-input v-model="input" placeholder="请输入内容" style="width:245px"></el-input>-
        <el-input v-model="input" placeholder="请输入内容" style="width:245px"></el-input>
         <el-button class="el-icon-view" style="width:60px"></el-button>
          <el-button type="primary" @click="innerVisible = true" class="el-icon-zoom-in" style="width:60px"></el-button>

        </el-card>
  <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
    > 
    <el-table-column prop="name"   width="130" type="selection"></el-table-column>
      <el-table-column prop="name" label="转单数量"  width="130"></el-table-column>
      <el-table-column prop="date" label="(单据号码)"  width="130"></el-table-column>
      <el-table-column prop="name" label="(单据日期)"  width="130"></el-table-column>
      <el-table-column prop="name" label="(物料编码)"  width="130"></el-table-column>
      <el-table-column prop="name" label="(物料名称)"  width="130"></el-table-column>
      <el-table-column prop="date" label="(单价)"  width="130"></el-table-column>
        <el-table-column prop="date" label="(数量)"  width="130"></el-table-column>
      <el-table-column prop="name" label="(预入库日)"  width="130"></el-table-column>
      
    </el-table>
 
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">取 回</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>


<script>
export default {
  data() {
    return {
        dialogVisible: false,
       outerVisible: false,
         innerVisible1: false,
        innerVisible2: false,
        innerVisible3: false,
        innerVisible: false,
        qingVisible: false,
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
    },
    GenerateInvoiceContent(){
      alert("生成发票内容")
    }
  }
};
</script>
<style scoped>
</style>