
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>销售订单列表</h3>
      </div>
      <div class="text item">
        <el-row>
          <el-col :span="20" :push="3">
            <el-form :inline="true" label-width="150px" class="demo-form-inline">
              <el-form-item label="客户">
                <el-input v-model="sellQuoteConditionDTO.cliShortName"></el-input>
              </el-form-item>

              <el-form-item label="销售单号">
                <el-input v-model="sellQuoteConditionDTO.billId"></el-input>
              </el-form-item>

              <el-form-item label="是否审核">
                <el-select placeholder="请选择" style="width: 250px;" v-model="sellQuoteConditionDTO.orderStatus">
                  <el-option label="全部" value="-1"></el-option>
                  <el-option label="已审核" value="1"></el-option>
                  <el-option label="未审核" value="2"></el-option>
                  <el-option label="以失效" value="3"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="有效日期">
                <el-date-picker type="date"  placeholder="选择日期" style="width: 250px;"></el-date-picker>
              </el-form-item>

              <el-form-item label style="margin-left:180px;">
                <el-button type="success" @click="loadData(1)">查询</el-button>
                <el-button type="primary" @click="lookSellQuote('add','添加销售报价',-1)">添加销售报销单</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row>
          <template>
            <el-table border :data="tableData" style="width: 100%">
              <el-table-column prop="billId" label="单据号码"></el-table-column>
              <el-table-column prop="billDate" label="单据日期"></el-table-column>
              <el-table-column prop="cliPlace" label="送货地址"></el-table-column>
              <el-table-column prop="effectiveData" label="有效日期"></el-table-column>
              <el-table-column prop="checkState" label="单据状态"></el-table-column>
              <el-table-column prop="totalMoney" label="合计金额"></el-table-column>
              <el-table-column prop="makeEmpName" label="制单人"></el-table-column>
              <el-table-column prop="auditingEmpName" label="复核人"></el-table-column>
              <el-table-column prop="remark" label="备注"></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button size="mini" @click="lookSellQuote('upd','销售报价详细',scope.row.billId)">查看详细</el-button>
                  <el-button size="mini" type="danger" @click="delSellQuote(scope.row.billId,scope.$index)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-row>
        <el-row>
          <el-col :push="7">
            <el-pagination background layout="prev, pager, next" :total="total"></el-pagination>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      total: 0,
      sellQuoteConditionDTO:{
        page:"1",
        cliShortName:"",
        billId:"",
        orderStatus:"-1",
        effectiveData:""
      }
    };
  },
  methods: {
    loadData(page) {
      this.sellQuoteConditionDTO.page=page
      let _this = this;
      console.log(this.sellQuoteConditionDTO)
      this.$axios
        .post("http://localhost:8080/sellQuote/findSellQuote/",this.sellQuoteConditionDTO)
        .then(resp => {
          _this.tableData = resp.data.records;
          _this.total = resp.data.current;
        })
        .catch(e => {
          _this.$message.error("服务器已关闭");
        });
    },
    lookSellQuote(cz,title,billId){
      sessionStorage.setItem('billId',billId)
      sessionStorage.setItem("cz",cz)
      this.$store.commit("addTab", {
        title: title,
        name: "salesQuotation"
      });
      this.$router.replace("/sales/menu2/menu2-2/SalesQuotation");
      this.$router.replace('/salesManagement/menu2');
    },
    delSellQuote(billId,index){
      
      let _this = this
      this.$axios
        .post(`http://localhost:8080/sellQuote/delSellQuoteById?billId=${billId}`,)
        .then(resp => {
         if( resp.data.code==200){
            _this.$message("删除成功");
            _this.tableData.splice(index,1)
         }else{
           _this.$message.error("删除失败");
         }
        })
        .catch(e => {
          _this.$message.error("服务器已关闭");
        });
    }
  },
  mounted() {
    this.loadData(1);
  }
};
</script>
<style scoped>
.el-input,
el-select {
  width: 250px;
}
.el-row {
  margin-bottom: 30px;
}
</style>