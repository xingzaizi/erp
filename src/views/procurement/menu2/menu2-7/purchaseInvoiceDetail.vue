<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="el-icon-star-on">采购发票</span>
      </div>

      <el-button type="info" plain>返回</el-button>
      <el-button type="success" plain>保存</el-button>
      <el-button type="primary" @click="shenheMain()">审核</el-button>
      <el-button type="primary" @click="shenheMain1()" plain>取消审核</el-button>
      <el-button type="warning" plain @click="updateMain()">修改</el-button>
      <template>
        <el-button type="danger" @click="delMain()">删除</el-button>
      </template>
      <!-- 头部表单 -->
      <div>
        <el-form
          :model="Maintable"
          ref="Maintable"
          label-width="110px"
          class="demo-Maintable"
          :inline="true"
        >
          <el-form-item label="供应商" prop="name">
            <el-input v-model="Maintable.clientsupply" style="width:600px"></el-input>
          </el-form-item>
          <el-form-item label="单据日期" required>
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="Maintable.storagedate"
                style="width:600px"
                 value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              ></el-date-picker>
            </el-form-item>
          </el-form-item>

          <el-form-item label="单据类型" prop>
            <el-select v-model="Maintable.documenttype" style="width:600px" placeholder="请选择单据类型">
              <el-option label="采购发票" value="发票"></el-option>
              <el-option label="退货及折让证明" value="退货"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="单据号码" prop="resource">
            <el-input v-model="Maintable.documentint" style="width:600px"></el-input>
          </el-form-item>

          <el-form-item label="单价是否含税" prop="delivery">
            <el-select v-model="Maintable.taxincluded" style="width:600px" placeholder="请选择是否含税">
              <el-option label="未税" :value="0"></el-option>
              <el-option label="含税" :value="1"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="发票号码" prop="delivery">
            <el-input v-model="Maintable.invoiceint" style="width:600px"></el-input>
          </el-form-item>

          <el-form-item label="采购核对状态" prop="checkstatus">
            <el-select v-model="Maintable.checkstatus" style="width:600px" placeholder="请选择采购核对状态">
              <el-option label="未核对" value="0"></el-option>
              <el-option label="已核对" value="1"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="发票类型" prop="delivery">
            <el-input v-model="Maintable.invoicetype" style="width:600px"></el-input>
          </el-form-item>

          <el-form-item label="凭证编号" prop="delivery">
            <el-input v-model="Maintable.voucherint" style="width:600px" placeholder="0.00"></el-input>
          </el-form-item>

          <el-form-item label="币别" prop="region">
            <el-input v-model="Maintable.currency" style="width:600px"></el-input>
          </el-form-item>

          <el-form-item label="差价凭证编号">
            <el-input v-model="Maintable.CertificateNo" style="width:600px"></el-input>
          </el-form-item>
          <el-form-item label="汇率" prop="delivery">
            <el-input v-model="Maintable.exchangerate" style="width:600px"></el-input>
          </el-form-item>

          <!-- 中间table表格 -->
          <el-card class="box-card">
            <div>
              <template>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                  <el-tab-pane label="内容" name="second">
                    <el-table
                      :data="Maintable.procurementinvoicebreakdownList"
                      border
                      style="width: 100%"
                    >
                      <el-table-column type="index" label="(栏号)" width="70"></el-table-column>

                      <!-- <el-table-column prop="invoiceddetailsid" width="80"></el-table-column> -->
                      <el-table-column prop="materialint" label="物料编号" sortable width="140"></el-table-column>
                      <el-table-column prop="namematerial" label="物料名称" width="140"></el-table-column>
                      <el-table-column prop="specificationtype" label="规格型号" width="140"></el-table-column>
                      <el-table-column prop="nameofunit" label="(单位名称)" width="140"></el-table-column>
                      <el-table-column prop="num" label="数量" width="140"></el-table-column>
                      <el-table-column prop="unitprice" label="单价" width="140"></el-table-column>
                      <el-table-column prop="amountofmoney" label="金额" width="140"></el-table-column>
                      <el-table-column prop="taxrate" label="税率%" width="140"></el-table-column>
                      <el-table-column prop="taxamount" label="税额" width="140"></el-table-column>
                      <el-table-column prop="taxableamount" label="含税金额" width="140"></el-table-column>
                      <el-table-column prop="unenteredquantity" label="(未进数量)" width="140"></el-table-column>
                      <el-table-column prop="purchasingorderint" label="(采购订单号)" width="140"></el-table-column>
                      <el-table-column prop="notestoentries" label="分录备注" width="200"></el-table-column>
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
                    <el-form-item label="账款归属" prop="name">
                      <el-input v-model="Maintable.attributionofaccounts" style="width:500px"></el-input>
                    </el-form-item>&nbsp;&nbsp;
                    <el-form-item label="结算方式一">
                      <el-input v-model="Maintable.paystrike1" style="width:350px">01 转账</el-input>
                      <el-input v-model="Maintable.paymoney1" style="width:230px"></el-input>
                    </el-form-item>
                    <el-form-item label="付款条件" prop>
                      <el-select
                        v-model="Maintable.termofpayment"
                        style="width:150px"
                        placeholder="请选择付款条件"
                      >
                        <el-option label="货到" value="货到"></el-option>
                        <el-option label="次月" value="次月"></el-option>
                        <el-option label="月结" value="月结"></el-option>
                        <el-option label="其他" value="其他"></el-option>
                      </el-select>
                      <el-input v-model="Maintable.daysofpaymentterms" style="width:330px"></el-input>天
                    </el-form-item>&nbsp;&nbsp;
                    <el-form-item label="结算方式二" prop>
                      <el-input v-model="Maintable.paystrike2" style="width:350px"></el-input>
                      <el-input v-model="Maintable.paymoney2" style="width:230px"></el-input>
                    </el-form-item>

                    <el-form-item label="付款日期">
                      <el-form-item prop="date1">
                        <el-date-picker
                          type="date"
                          placeholder="选择日期"
                          v-model="Maintable.dateofpayment"
                           value-format="yyyy-MM-dd"
                           format="yyyy-MM-dd"
                          style="width:500px"
                        ></el-date-picker>
                      </el-form-item>
                    </el-form-item>
                    <el-form-item label="结算方式三" prop>
                      <el-input v-model="Maintable.paystrike3" style="width:350px"></el-input>
                      <el-input v-model="Maintable.paymoney3" style="width:230px"></el-input>
                    </el-form-item>
                    <el-form-item label="账款月份">
                      <el-form-item prop="date1">
                        <el-date-picker
                          type="date"
                          placeholder="选择日期"
                          v-model="Maintable.accountmonth"
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
              <el-input v-model="Maintable.Purchaser" style="width:600px"></el-input>
            </el-form-item>
            <el-form-item label="所属部门" prop="delivery">
              <el-input v-model="Maintable.subordinatedepartments" style="width:600px"></el-input>
            </el-form-item>

            <el-form-item label="制单人员" prop="delivery">
              <el-input v-model="Maintable.systempersonnel" style="width:600px"></el-input>
            </el-form-item>

            <el-form-item label="所属项目" prop="delivery">
              <el-input v-model="Maintable.subordinateprojects" style="width:600px"></el-input>
            </el-form-item>

            <el-form-item label="复刻人员" prop="delivery">
              <el-input v-model="Maintable.reviewpersonne" style="width:600px"></el-input>
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
            <el-menu-item index="1-3">成本差额查询</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-grid"></i>转单
            </template>

            <el-menu-item index="2-1">
              <el-button type="text" @click="dialogVisible = true">采购订单转入</el-button>
            </el-menu-item>
            <el-menu-item index="2-2">转采购入库</el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-grid"></i>功能
            </template>
            <el-menu-item index="3-1">批次变更单价</el-menu-item>
            <el-menu-item index="3-2">
              <el-button type="text" @click="qingVisible = true">发票清单维护</el-button>
            </el-menu-item>
            <el-menu-item index="3-3" @click="GenerateInvoiceContent">生成发票内容</el-menu-item>
            <el-menu-item index="3-4">核对状态切换</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <!-- 发票清单维护小窗口 -->
      <el-dialog title="采购发票清单维护" :visible.sync="qingVisible">
        <!-- 采购入库单内嵌套窗口 -->
        <el-dialog width="30%" title="单选--采购入库单" :visible.sync="innerVisible1" append-to-body>
          <el-button>取回</el-button>
          <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort="{prop: 'date', order: 'descending'}"
          >
            <el-table-column prop="name" label sortable width="130" type="selection"></el-table-column>
            <el-table-column prop="date" label="(单据号码)" sortable width="130"></el-table-column>
            <el-table-column prop="name" label="(单据日期)" sortable width="130"></el-table-column>
          </el-table>
        </el-dialog>
        <!-- 采购退货单内嵌套窗口 -->
        <el-dialog width="30%" title="单选--采购退货单" :visible.sync="innerVisible2" append-to-body>
          <el-button>取回</el-button>
          <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort="{prop: 'date', order: 'descending'}"
          >
            <el-table-column prop="name" label sortable width="130" type="selection"></el-table-column>
            <el-table-column prop="date" label="(单据号码)" sortable width="130"></el-table-column>
            <el-table-column prop="name" label="(单据日期)" sortable width="130"></el-table-column>
          </el-table>
        </el-dialog>
        <!-- 采购折让确认单内嵌套窗口 -->
        <el-dialog width="30%" title="单选--采购折让确认单" :visible.sync="innerVisible3" append-to-body>
          <el-button>取回</el-button>
          <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort="{prop: 'date', order: 'descending'}"
          >
            <el-table-column prop="name" label sortable width="130" type="selection"></el-table-column>
            <el-table-column prop="date" label="(单据号码)" sortable width="130"></el-table-column>
            <el-table-column prop="name" label="(单据日期)" sortable width="130"></el-table-column>
          </el-table>
        </el-dialog>
        <el-card class="box-card">
          采购入库单
          <el-input v-model="input" placeholder="请输入内容" style="width:150px"></el-input>-
          <el-input v-model="input" placeholder="请输入内容" style="width:150px"></el-input>
          <el-button class="el-icon-view" style="width:60px"></el-button>
          <el-button
            type="primary"
            @click="innerVisible1 = true"
            class="el-icon-zoom-in"
            style="width:60px"
          ></el-button>
          <br />
          <br />采购退货单
          <el-input v-model="input" placeholder="请输入内容" style="width:150px"></el-input>-
          <el-input v-model="input" placeholder="请输入内容" style="width:150px"></el-input>
          <el-button class="el-icon-view" style="width:60px"></el-button>
          <el-button
            type="primary"
            @click="innerVisible2 = true"
            class="el-icon-zoom-in"
            style="width:60px"
          ></el-button>
          <br />
          <br />折让确认单
          <el-input v-model="input" placeholder="请输入内容" style="width:150px"></el-input>-
          <el-input v-model="input" placeholder="请输入内容" style="width:150px"></el-input>
          <el-button class="el-icon-view" style="width:60px"></el-button>
          <el-button
            type="primary"
            @click="innerVisible3 = true"
            class="el-icon-zoom-in"
            style="width:60px"
          ></el-button>
        </el-card>
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort="{prop: 'date', order: 'descending'}"
        >
          <el-table-column prop="name" label sortable width="130" type="selection"></el-table-column>
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

      <!-- 采购订单小窗口 -->
      <el-dialog
        title="采购订单转采购发票"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose"
      >
        <el-dialog width="30%" title="多选--采购订单" :visible.sync="innerVisible" append-to-body>
          <el-button>取回</el-button>
          <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort="{prop: 'date', order: 'descending'}"
          >
            <el-table-column prop="name" label sortable width="130" type="selection"></el-table-column>
            <el-table-column prop="date" label="(单据号码)" sortable width="130"></el-table-column>
            <el-table-column prop="name" label="(单据日期)" sortable width="130"></el-table-column>
          </el-table>
        </el-dialog>

        <el-card class="box-card">
          <div class="block">
            <span class="demonstration">日期区间</span>
            <el-date-picker
              style="width:500px"
              v-model="value6"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
            <el-button>载入资料</el-button>
          </div>单据区间
          <el-input v-model="input" placeholder="请输入内容" style="width:245px"></el-input>-
          <el-input v-model="input" placeholder="请输入内容" style="width:245px"></el-input>
          <el-button class="el-icon-view" style="width:60px"></el-button>
          <el-button
            type="primary"
            @click="innerVisible = true"
            class="el-icon-zoom-in"
            style="width:60px"
          ></el-button>
        </el-card>
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort="{prop: 'date', order: 'descending'}"
        >
          <el-table-column prop="name" width="130" type="selection"></el-table-column>
          <el-table-column prop="name" label="转单数量" width="130"></el-table-column>
          <el-table-column prop="date" label="(单据号码)" width="130"></el-table-column>
          <el-table-column prop="name" label="(单据日期)" width="130"></el-table-column>
          <el-table-column prop="name" label="(物料编码)" width="130"></el-table-column>
          <el-table-column prop="name" label="(物料名称)" width="130"></el-table-column>
          <el-table-column prop="date" label="(单价)" width="130"></el-table-column>
          <el-table-column prop="date" label="(数量)" width="130"></el-table-column>
          <el-table-column prop="name" label="(预入库日)" width="130"></el-table-column>
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
      innerVisible: false,
      innerVisible1: false,
      innerVisible2: false,
      innerVisible3: false,
      qingVisible: false,
      Maintable: {
        storageid: "",
        clientsupply: "",
        storagedate: "",
        documenttype: "",
        documentint: "",
        taxincluded: "",
        invoiceint: "",
        checkstatus: "",
        invoicetype: "",
        voucherint: "",
        currency: "",
        CertificateNo: "",
        exchangerate: "",
        Purchaser: "",
        subordinatedepartments: "",
        attributionofaccounts: "",
        termofpayment: "",
        daysofpaymentterms: "",
        dateofpayment: "",
        accountmonth: "",
        paystrike1: "",
        paystrike2: "",
        paystrike3: "",
        paymoney1: "",
        paymoney2: "",
        paymoney3: "",
        systempersonnel: "",
        reviewpersonne: "",
        subordinateprojects: "",
        isaditing: "",
        procurementinvoicebreakdownList: {}
      },
      ruleForm: {},
      activeName: "second"
    };
  },
  methods: {
    //  handleClose(done) {
    //     this.$confirm('确认关闭？')
    //       .then(_ => {
    //         done();
    //       })
    //       .catch(_ => {});
    //   },
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
    //查询采购发票
    goMain(storageid) {
      let _this = this;
      //ajax
      _this.$ajax
        .get(`mainlistofpurchaseinvoices/main/${storageid}`)
        .then(resp => {
          _this.Maintable = resp.data;
        })
        .catch(e => {
          alert(e);
        });
    },
    //审核发票
    shenheMain() {
      let _this = this;
      if (_this.Maintable.isaditing == 0) {
      _this.Maintable.isaditing = 1;
      _this.$ajax
        .put(`mainlistofpurchaseinvoices/mainupdate`, _this.Maintable)
        .then(resp => {
          if (resp.data.code == "200") {
            alert("审核成功");
            this.$router.replace("/procurement/menu2/menu2-7");
          } else {
            alert("审核失败");
          }
        })
        .catch(e => {
          alert(e);
        });
      }else{
        alert("已是审核状态")
      }
    },
    //取消审核发票
    shenheMain1() {
      let _this = this;
      if (_this.Maintable.isaditing == 1) {
        _this.Maintable.isaditing = 0;
        _this.$ajax
          .put(`mainlistofpurchaseinvoices/mainupdate`, _this.Maintable)
          .then(resp => {
            if (resp.data.code == "200") {
              alert("取消审核成功");
              this.$router.replace("/procurement/menu2/menu2-7");
            } else {
              alert("取消审核失败");
            }
          })
          .catch(e => {
            alert(e);
          });
      }else{
        alert("已是未审核状态")
      }
    },
    //修改发票
    updateMain() {
      let _this = this;
      _this.$ajax
        .put(`mainlistofpurchaseinvoices/mainupdate`, _this.Maintable)
        .then(resp => {
          if (resp.data.code == "200") {
            alert("修改成功");
            this.$router.replace("/procurement/menu2/menu2-7");
          } else {
            alert("修改失败");
          }
        })
        .catch(e => {
          alert(e);
        });
    },
    //删除发票
    delMain() {
      let _this = this;
      let id = _this.Maintable.storageid;
      if (confirm("确定要删除吗？")) {
        _this.$ajax
          .delete(`mainlistofpurchaseinvoices/maindel/${id}`)
          .then(resp => {
            if (resp.data.code == "200") {
              alert("删除成功");
              this.$router.replace("/procurement/menu2/menu2-7");
            } else if (resp.data.code == "500") {
              alert("订单状态已审核");
            } else {
              alert("删除失败");
            }
          })
          .catch(e => {
            alert(e);
          });
      }
    },

    GenerateInvoiceContent() {
      alert("生成发票内容");
    }
  },
  watch: {
    $route(to, from) {
      this.goMain(to.params.storageid);
    }
  },
  //挂载完成（可以访问DOM元素）
  mounted() {
    this.goMain(this.$route.params.storageid);
  }
};
</script>
<style scoped>
</style>