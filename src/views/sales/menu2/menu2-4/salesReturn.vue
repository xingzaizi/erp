<template>
<div v-loading="loading">
<el-breadcrumb separator="/">
<el-breadcrumb-item>首页</el-breadcrumb-item>
<el-breadcrumb-item>销售管理</el-breadcrumb-item>
<el-breadcrumb-item>销售退货单</el-breadcrumb-item>
</el-breadcrumb>
<!-- <el-container v-for="(temp, index) in info" :key="index"> -->
<el-container>
<el-container>
<el-header height="">
<div class="pagination">
<el-row>
<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageConf.pageCode" :page-sizes="pageConf.pageOption" :page-size="pageConf.pageSize" layout="total, prev, pager, next" :total="pageConf.totalPage">
</el-pagination>
</el-row>
<el-row>
<el-button type="primary" @click="add">添加</el-button>
<el-button type="success" v-show="forbidden!=true">保存</el-button>
<el-button type="warning" @click="upd">修改</el-button>
<el-button type="danger" @click="del">删除</el-button>
<el-button type="danger" v-show="forbidden!=true">放弃</el-button>
<el-button type="primary" v-show="forbidden==true">审核</el-button>
</el-row>
</div>
<el-row :gutter="20">
<el-col :span="4">
<div class="grid-content bg-purple">
客户
</div>
</el-col>
<el-col :span="8">
<div class="grid-content bg-purple">
<el-input placeholder="请输入内容" :readonly="forbidden" v-model="temp.customerId" @dblclick.native="dialogCustomerVisible = true">
</el-input>
<el-dialog width="990px" title="单选-客户主文件设定" :visible.sync="dialogCustomerVisible">
<Customer></Customer>
</el-dialog>
</div>
</el-col>
<el-col :span="4">
<div class="grid-content bg-purple-light">
单据日期
</div>
</el-col>
<el-col :span="8">
<div class="grid-content bg-purple-light">
<el-date-picker type="date" :readonly="forbidden" v-model="temp.operTime" placeholder="选择日期" style="width: 100%;"></el-date-picker>

</div>
</el-col>
</el-row>
<el-row :gutter="20">
<el-col :span="4">
<div class="grid-content bg-purple">
收货地址
</div>
</el-col>
<el-col :span="8">
<div class="grid-content bg-purple">
<el-input placeholder="请输入内容" :readonly="forbidden" v-model="temp.address">
</el-input>
</div>
</el-col>
<el-col :span="4">
<div class="grid-content bg-purple-light">
单据号码
</div>
</el-col>
<el-col :span="8">
<div class="grid-content bg-purple-light">
<el-input placeholder="请输入内容" :readonly="forbidden" v-model="temp.defaultNumber">
</el-input>
</div>
</el-col>
</el-row>
<el-row :gutter="20">
<el-col :span="4">
<div class="grid-content bg-purple">
单价是否含税
</div>
</el-col>
<el-col :span="8">
<div class="grid-content bg-purple">
<el-select v-model="temp.tax" placeholder="请选择活动区域" :disabled="forbidden">
<el-option label="未税" value="0"></el-option>
<el-option label="含税" value="1"></el-option>
</el-select>
</div>
</el-col>
<el-col :span="4">
<div class="grid-content bg-purple-light">
币别
</div>
</el-col>
<el-col :span="8">
<div class="grid-content bg-purple-light">
<el-input placeholder="请输入内容" :readonly="forbidden" v-model="temp.currency" @dblclick.native="dialogCurrencyVisible = true">
</el-input>
<el-dialog title="单选-币别设定" :visible.sync="dialogCurrencyVisible">
<currency></currency>
</el-dialog>
</div>
</el-col>
</el-row>
<el-row :gutter="20">
<el-col :span="4">
<div class="grid-content bg-purple">
仓库
</div>
</el-col>
<el-col :span="8">
<div class="grid-content bg-purple">
<!-- <el-input placeholder="请输入内容">
</el-input> -->
<el-input placeholder="请输入内容" :readonly="forbidden" v-model="temp.warehouse" @dblclick.native="dialogWarehouseVisible = true">
</el-input>
<el-dialog width="990px" title="单选-仓库设定" :visible.sync="dialogWarehouseVisible">
<Warehouse></Warehouse>
</el-dialog>
</div>
</el-col>
<el-col :span="4">
<div class="grid-content bg-purple-light">
汇率
</div>
</el-col>
<el-col :span="8">
<div class="grid-content bg-purple-light">
<el-input placeholder="请输入内容" :readonly="forbidden" v-model="temp.exchangeRate">
</el-input>
</div>
</el-col>
</el-row>
<el-row :gutter="20">
<el-col :span="4">
<div class="grid-content bg-purple">
重新出库
</div>
</el-col>
<el-col :span="8">
<div class="grid-content bg-purple">
<el-select v-model="temp.reRelease" :disabled="forbidden" placeholder="请选择活动区域">
<el-option label="否" value="0"></el-option>
<el-option label="是" value="1"></el-option>
</el-select>
</div>
</el-col>
<el-col :span="4">
<div class="grid-content bg-purple-light">
国外贸易
</div>
</el-col>
<el-col :span="8">
<div class="grid-content bg-purple-light">
<el-select v-model="temp.foreignTrade" :disabled="forbidden" placeholder="请选择活动区域">
<el-option label="否" value="0"></el-option>
<el-option label="是" value="1"></el-option>
</el-select>
</div>
</el-col>
</el-row>
<el-row :gutter="20">
<el-col :span="4">
<div class="grid-content bg-purple">
凭证编码
</div>
</el-col>
<el-col :span="8">
<div class="grid-content bg-purple">
<el-input placeholder="请输入内容" :readonly="forbidden" v-model="temp.voucheId">
</el-input>
</div>
</el-col>
<el-col :span="12">
</el-col>
</el-row>
</el-header>
<el-main height="">
<el-tabs type="border-card">
<el-tab-pane label="内容">
<el-table :data="temp.dlist" border show-summary style="width: 100%" height="250">
<el-table-column prop="no" label="(拦号)">
</el-table-column>
<el-table-column prop="materialNumber" label="物料编号">
</el-table-column>
<el-table-column prop="materialName" label="(物料名称)">
</el-table-column>
<el-table-column prop="specificationType" label="(规格型号)">
</el-table-column>
<el-table-column prop="companyName" label="(单价名称)">
</el-table-column>
<el-table-column prop="number" sortable label="数量">
</el-table-column>
<el-table-column prop="discounPric" label="折扣前单价">
</el-table-column>
<el-table-column label="折数(%)">
<template slot-scope="scope">{{ scope.row.foldingNumber}}</template>
</el-table-column>
<el-table-column label="单价">
<template slot-scope="scope">{{ scope.row.price}}</template>
</el-table-column>
<el-table-column prop="money" label="(金额)">
</el-table-column>
<el-table-column label="税率(%)">
<template slot-scope="scope">{{ scope.row.taxRate}}</template>
</el-table-column>
<el-table-column prop="taxAmount" label="(税额)">
</el-table-column>
<el-table-column prop="taxableAmount" label="含税金额">
</el-table-column>
<el-table-column label="(批号)">
<el-checkbox></el-checkbox>
</el-table-column>
<el-table-column label="(物料组合)">
<el-checkbox></el-checkbox>
</el-table-column>
<el-table-column label="(发票明细)">
<el-checkbox></el-checkbox>
</el-table-column>
<el-table-column label="(未开票数量)">
<template slot-scope="scope">{{ scope.row.uninvoicedQuantity}}</template>
</el-table-column>
<el-table-column label="分录备注">
<template slot-scope="scope">{{ scope.row.notesToEntries}}</template>
</el-table-column>
<el-table-column label="(来源单别)">
<template slot-scope="scope">{{ scope.row.sourceList}}</template>
</el-table-column>
<el-table-column label="(来源单号)">
<template slot-scope="scope">{{ scope.row.sourceNo}}</template>
</el-table-column>
</el-table>
</el-tab-pane>
<el-tab-pane label="账款">
<el-row :gutter="20">
<el-col :span="4">
<div class="grid-content bg-purple">
账款归属
</div>
</el-col>
<el-col :span="8">
<div class="grid-content bg-purple">
<el-input placeholder="请输入内容" :readonly="forbidden" v-model="temp.attributionAccounts" @dblclick.native="dialogCustomerVisible2 = true">
</el-input>
<el-dialog width="990px" title="单选-客户主文件设定" :visible.sync="dialogCustomerVisible2">
<People></People>
</el-dialog>
</div>
</el-col>
<el-col :span="4">
<div class="grid-content bg-purple-light">
收款日期
</div>
</el-col>
<el-col :span="8">
<div class="grid-content bg-purple-light">
<el-date-picker type="date" :readonly="forbidden" v-model="temp.collectionDate" placeholder="选择日期" style="width: 100%;"></el-date-picker>
</div>
</el-col>
</el-row>
<el-row :gutter="20">
<el-col :span="4">
<div class="grid-content bg-purple">
收款条件
</div>
</el-col>
<el-col :span="8">
<div class="grid-content bg-purple">
<el-row>
<el-col :span="16">
<el-select :readonly="forbidden" v-model="temp.paymentConditions" placeholder="请选择活动区域">
<el-option label="货到" value="1"></el-option>
<el-option label="次月" value="2"></el-option>
<el-option label="月结" value="3"></el-option>
<el-option label="其他" value="4"></el-option>
</el-select>
</el-col>
<el-col :span="8">
<el-input value="0" placeholder="请输入内容" :readonly="forbidden" v-model="temp.accountDay">
<template slot="append">天</template>
</el-input>
</el-col>
</el-row>
</div>
</el-col>
<el-col :span="4">
<div class="grid-content bg-purple-light">
账款月份
</div>
</el-col>
<el-col :span="8">
<div class="grid-content bg-purple-light">
<el-date-picker v-model="temp.accountMonth" :readonly="forbidden" type="month" placeholder="选择月">
</el-date-picker>
</div>
</el-col>
</el-row>
</el-tab-pane>
<el-tab-pane label="备注">
<el-row :gutter="20">
<el-col :span="4">
<div class="grid-content bg-purple">
自定义栏一
</div>
</el-col>
<el-col :span="8">
<div class="grid-content bg-purple">
<el-input placeholder="请输入内容" v-model="temp.customColumn1" :readonly="forbidden">
</el-input>
</div>
</el-col>
<el-col :span="4">
<div class="grid-content bg-purple-light">
自定义栏二
</div>
</el-col>
<el-col :span="8">
<div class="grid-content bg-purple-light">
<el-input placeholder="请输入内容" v-model="temp.customColumn2" :readonly="forbidden">
</el-input>
</div>
</el-col>
</el-row>
<el-row :gutter="20">
<el-col :span="4">
<div class="grid-content bg-purple">
备注
</div>
</el-col>
<el-col :span="20">
<div class="grid-content bg-purple">
<el-input type="textarea" v-model="temp.remark" :readonly="forbidden"></el-input>
</div>
</el-col>
</el-row>
</el-tab-pane>
</el-tabs>
</el-main>
</el-container>
<el-footer height="">
<el-row :gutter="20">
<el-col :span="4">
<div class="grid-content bg-purple">
业务人员：
</div>
</el-col>
<el-col :span="8">
<div class="grid-content bg-purple">
<el-input placeholder="请输入内容" :readonly="forbidden" v-model="temp.operationalPersonnel" @dblclick.native="dialogPeopleVisible = true">
</el-input>
<el-dialog width="990px" title="单选-人员主文件设定" :visible.sync="dialogPeopleVisible">
<People></People>
</el-dialog>
</div>
</el-col>
<el-col :span="4">
<div class="grid-content bg-purple-light">
制单人员：
</div>
</el-col>
<el-col :span="8">
<div class="grid-content bg-purple-light">
<el-input placeholder="请输入内容" :readonly="forbidden" v-model="temp.operPersonName">
</el-input>
</div>
</el-col>
</el-row>
<el-row :gutter="20">
<el-col :span="4">
<div class="grid-content bg-purple">
所属部门：
</div>
</el-col>
<el-col :span="8">
<div class="grid-content bg-purple">
<el-input placeholder="请输入内容" :readonly="forbidden" v-model="temp.subordinateDepartments" @dblclick.native="dialogDepartmentVisible = true">
</el-input>
<el-dialog width="990px" title="单选-部门设定" :visible.sync="dialogDepartmentVisible">
<Department></Department>
</el-dialog>
</div>
</el-col>
<el-col :span="4">
<div class="grid-content bg-purple-light">
复核人员：
</div>
</el-col>
<el-col :span="8">
<div class="grid-content bg-purple-light">
<el-input placeholder="请输入内容" :readonly="forbidden" v-model="temp.reviewPersonnel">
</el-input>
</div>
</el-col>
</el-row>
<el-row :gutter="20">
<el-col :span="4">
<div class="grid-content bg-purple">
所属项目：
</div>
</el-col>
<el-col :span="8">
<div class="grid-content bg-purple">
<el-input type="number" placeholder="请输入内容" :readonly="forbidden" v-model="temp.projectId">
</el-input>
</div>
</el-col>
</el-row>
<el-row :gutter="20">
<el-col :span="4">
<div class="grid-content bg-purple">
<el-dropdown>
<el-button type="primary">
转单<i class="el-icon-arrow-down el-icon--right"></i>
</el-button>
<el-dropdown-menu slot="dropdown">
<el-dropdown-item @click.native="dialogOutOfStockVisible = true" v-show="forbidden!=true">销售出库转入</el-dropdown-item>
</el-dropdown-menu>
</el-dropdown>
<el-dialog width="990px" title="销售出库转入" :visible.sync="dialogOutOfStockVisible">
<OutOfStock></OutOfStock>
</el-dialog>
</div>
</el-col>
<el-col :span="4">
<div class="grid-content bg-purple">
<div class="grid-content bg-purple">
<el-dropdown>
<el-button type="primary">
查询<i class="el-icon-arrow-down el-icon--right"></i>
</el-button>
<el-dropdown-menu slot="dropdown">
<el-dropdown-item @click.native="dialogBillVisible = true" v-show="forbidden==true">单据状态查询</el-dropdown-item>
</el-dropdown-menu>
</el-dropdown>
<el-dialog width="990px" title="单据状态查询" :visible.sync="dialogBillVisible">
<Bill></Bill>
</el-dialog>
</div>
</div>
</el-col>
<el-col :span="4">
<div class="grid-content bg-purple">
<div class="grid-content bg-purple">
<el-dropdown>
<el-button type="primary">
功能<i class="el-icon-arrow-down el-icon--right"></i>
</el-button>
<el-dropdown-menu slot="dropdown">
<el-dropdown-item @click.native="dialogBatchNumberVisible = true">批号设定</el-dropdown-item>
<el-dropdown-item disabled>条码打印</el-dropdown-item>
<el-dropdown-item @click.native="dialogBatchChangeVisible = true">批次变更单价</el-dropdown-item>
</el-dropdown-menu>
</el-dropdown>
<el-dialog width="990px" title="批号设定" :visible.sync="dialogBatchNumberVisible">
<BatchNumber></BatchNumber>
</el-dialog>
<el-dialog width="990px" title="批次变更单价" :visible.sync="dialogBatchChangeVisible">
<BatchChange></BatchChange>
</el-dialog>
</div>
</div>
</el-col>
</el-row>
</el-footer>

</el-container>

</div>
</template>

<script>
import Customer from '@/components/dhy/Customer.vue'
import Warehouse from '@/components/dhy/Warehouse.vue'
import Currency from '@/components/dhy/Currency.vue'
import People from '@/components/dhy/People.vue'
import Department from '@/components/dhy/Department.vue'
import OutOfStock from '@/components/dhy/OutOfStock.vue'
import Bill from '@/components/dhy/Bill.vue'
import BatchNumber from '@/components/dhy/BatchNumber.vue'
import BatchChange from '@/components/dhy/BatchChange.vue'
export default {
components: {
Customer,
Warehouse,
Currency,
People,
Department,
OutOfStock,
Bill,
BatchNumber,
BatchChange
},
data() {
return {
invoice: false,
forbidden: true,
data1: 0,
activeName: 'first',
loading: true,
temp: {},
pageConf: {
//设置一些初始值(会被覆盖)
pageCode: 1, //当前页
pageSize: 1, //每页显示的记录数
totalPage: 12, //总记录数
// pageOption: [4, 10, 20], //分页选项
handleCurrentChange: function () {
console.log("页码改变了");
}
},
dialogCustomerVisible: false,
dialogCustomerVisible2: false,
dialogWarehouseVisible: false,
dialogCurrencyVisible: false,
dialogPeopleVisible: false,
dialogDepartmentVisible: false,
dialogOutOfStockVisible: false,
dialogBillVisible: false,
dialogBatchNumberVisible: false,
dialogBatchChangeVisible: false
}
},
methods: {
findByPage: function (pageCode, pageSize) {
const that = this;
that.$axios.get(`http://localhost:8080/depothead/obj/2/${pageCode}/${pageSize}`).then(resp => {
console.log(resp);
that.pageConf.totalPage = resp.data.total;
that.temp = resp.data.list[0];
// console.log(stringify(resp.data.list))
}).catch(e => {
alert(e);
})
},
handleSizeChange: function (val) {
this.forbidden = true;
this.findByPage(this.pageConf.pageCode, val);
},
handleCurrentChange: function (val) {
this.forbidden = true;
this.findByPage(val, this.pageConf.pageSize);
},
handleClick(row) {
this.forbidden = true;
console.log(row);
this.$router.push(`info/${row.pid}`);
},
add() {
this.forbidden = false;
// this.$jquery("input").val("")
this.temp = {};
},
upd() {
this.forbidden = false;
},
del() {
this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
confirmButtonText: '确定',
cancelButtonText: '取消',
type: 'warning'
}).then(() => {
this.$message({
type: 'success',
message: '删除成功!'
});
}).catch(() => {
this.$message({
type: 'info',
message: '已取消删除'
});
});
}
},
mounted() {
setTimeout(() => {
this.loading = false;
this.findByPage(1, 1);
}, 2000);
}
}
</script>

<style>
.pagination {
text-align: center
}

.el-row {
margin-bottom: 20px;
}

:last-child {
margin-bottom: 0;
}

.el-col {
border-radius: 4px;
}

.bg-purple-dark {
background: #99a9bf;
}

.bg-purple {
background: #d3dce6;
}

.bg-purple-light {
background: #e5e9f2;
}

.grid-content {
border-radius: 4px;
min-height: 36px;
}

.row-bg {
padding: 10px 0;
background-color: #f9fafc;
}
</style>
	