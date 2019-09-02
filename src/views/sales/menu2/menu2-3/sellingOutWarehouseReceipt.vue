<template>
<div v-loading="loading">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>销售管理</el-breadcrumb-item>
        <el-breadcrumb-item>销售出库单<span>{{st}}</span></el-breadcrumb-item>
    </el-breadcrumb>
    <!-- v-for="(temp, index) in info" :key="index" -->
    <el-container>
        <el-container>
            <el-header height="">
                <div class="pagination">
                    <el-row>
                        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageConf.pageCode" :page-sizes="pageConf.pageOption" :page-size="pageConf.pageSize" layout="total, prev, pager, next" :total="pageConf.totalPage">
                        </el-pagination>
                    </el-row>
                    <el-row>
                        <el-button type="primary" @click="add" v-show="this.forbidden==true">添加</el-button>
                        <el-button type="success" @click="preservation" v-show="this.forbidden!=true">保存</el-button>
                        <el-button type="warning" @click="upd" v-show="this.forbidden==true">修改</el-button>
                        <el-button type="danger" @click="del" v-show="this.forbidden==true">删除</el-button>
                        <el-button type="primary" @click="reload" v-show="this.forbidden==true">刷新</el-button>
                        <el-button type="danger" @click="giveUp" v-show="this.forbidden!=true">放弃</el-button>
                        <el-button type="primary" @click="toExamine" v-show="this.forbidden==true">审核</el-button>
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
                                <People></People>
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
                            销售出库类型
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">
                            <el-input placeholder="请输入内容" :readonly="forbidden" v-model="temp.subType">
                            </el-input>
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
                            <el-dialog width="990px" title="单选-币别设定" :visible.sync="dialogCurrencyVisible">
                                <People></People>
                            </el-dialog>
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
                            <el-select v-model="temp.tax" :disabled="forbidden" placeholder="请选择活动区域">
                                <el-option label="未税" value="0"></el-option>
                                <el-option label="含税" value="1"></el-option>
                            </el-select>
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
                            仓库
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">
                            <el-input placeholder="请输入内容" :readonly="forbidden" v-model="temp.warehouse" @dblclick.native="dialogWarehouseVisible = true">
                            </el-input>
                            <el-dialog width="990px" title="单选-仓库设定" :visible.sync="dialogWarehouseVisible">
                                <People></People>
                            </el-dialog>
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
                        <div class="grid-content bg-purple-light">
                            <el-checkbox v-model="invoice" value="1">复核后自动生成发票</el-checkbox>
                            <!-- <el-checkbox v-model="temp">复核后自动生成发票</el-checkbox> -->
                        </div>
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
                            <el-table-column label="(赠品)">
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
                            <el-table-column label="客户订单">
                                <template slot-scope="scope">{{ scope.row.customerOrders}}</template>
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
                                            <el-select :disabled="forbidden" v-model="temp.paymentConditions" placeholder="请选择活动区域">
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
                                    <el-date-picker :readonly="forbidden" v-model="temp.accountMonth" type="month" placeholder="选择月">
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
                                    <el-input placeholder="请输入内容" :readonly="forbidden" v-model="temp.customColumn1">
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
                                    <el-input placeholder="请输入内容" :readonly="forbidden" v-model="temp.customColumn2">
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
                                    <el-input type="textarea" :readonly="forbidden" v-model="temp.remark"></el-input>
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
                        <el-input placeholder="请输入内容" :readonly="forbidden" v-model="temp.projectId">
                        </el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <el-dropdown>
                            <el-button type="primary">
                                查询<i class="el-icon-arrow-down el-icon--right"></i>
                            </el-button>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item @click.native="dialogHistoricalVisible = true">历史交易查询</el-dropdown-item>
                                <el-dropdown-item disabled>单据状态查询</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <el-dialog width="990px" title="历史交易查询" :visible.sync="dialogHistoricalVisible">
                            <Historical></Historical>
                        </el-dialog>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <div class="grid-content bg-purple">
                            <el-dropdown>
                                <el-button type="primary">
                                    转单<i class="el-icon-arrow-down el-icon--right"></i>
                                </el-button>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item @click.native="dialogOfferVisible = true">销售报价转入</el-dropdown-item>
                                    <el-dropdown-item @click.native="dialogOrderVisible = true">销售订单转入</el-dropdown-item>
                                    <el-dropdown-item @click.native="dialogInvoiceVisible = true">商业发票转入</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                            <el-dialog width="990px" title="销售报价转入" :visible.sync="dialogOfferVisible">
                                <Offer></Offer>
                            </el-dialog>
                            <el-dialog width="990px" title="销售订单转入" :visible.sync="dialogOrderVisible">
                                <Order></Order>
                            </el-dialog>
                            <el-dialog width="990px" title="商业发票转入" :visible.sync="dialogInvoiceVisible">
                                <Invoice></Invoice>
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
                                    <el-dropdown-item @click.native="dialogMaterielVisible = true">物料组合设定</el-dropdown-item>
                                    <el-dropdown-item @click.native="dialogBatchNumberVisible = true">批号设定</el-dropdown-item>
                                    <el-dropdown-item disabled>条码打印</el-dropdown-item>
                                    <el-dropdown-item @click.native="dialogBatchChangeVisible = true">批次变更单价</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                            <el-dialog width="990px" title="物料组合设定" :visible.sync="dialogMaterielVisible">
                                <Materiel></Materiel>
                            </el-dialog>
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
import Historical from '@/components/dhy/Historical.vue'
import Offer from '@/components/dhy/Offer.vue'
import Order from '@/components/dhy/Order.vue'
import Invoice from '@/components/dhy/Invoice.vue'
import Materiel from '@/components/dhy/Materiel.vue'
import BatchNumber from '@/components/dhy/BatchNumber.vue'
import BatchChange from '@/components/dhy/BatchChange.vue'
import {
    stringify
} from 'querystring';
export default {
    components: {
        Customer,
        Warehouse,
        Currency,
        People,
        Department,
        Historical,
        Offer,
        Order,
        Invoice,
        Materiel,
        BatchNumber,
        BatchChange
    },
    data() {
        return {
            st: "",
            forbidden: true,
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
            dialogHistoricalVisible: false,
            dialogOfferVisible: false,
            dialogOrderVisible: false,
            dialogInvoiceVisible: false,
            dialogMaterielVisible: false,
            dialogBatchNumberVisible: false,
            dialogBatchChangeVisible: false
        }
    },
    computed: {
        strNumber1(num) {
            return num.toFixed(2)
        }
    },
    methods: {
        findByPage: function (pageCode, pageSize) {
            const that = this;
            that.$axios.get(`http://localhost:8080/depothead/obj/1/${pageCode}/${pageSize}`).then(resp => {
                console.log(resp);
                that.pageConf.totalPage = resp.data.total;
                that.temp = resp.data.list[0];
                console.log(stringify(resp.data.list))
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
            this.st = "(新增中...)";
            this.temp = {};
        },
        preservation(){

        },
        giveUp() {
            this.$confirm('是否确定放弃?', '销售出库单', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.st = "(正在取消..)";
                 this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    this.forbidden = true;
                    this.st = "";
                    this.findByPage(1, 1);
                }, 2000);
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消放弃'
                });
            });
        },
        upd() {
            this.forbidden = false;
            this.st = "(修改中...)";
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
        },
        reload(){

        },
        toExamine(){

        }
    },
    mounted() {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
            this.forbidden = true;
            this.st = "";
            this.findByPage(1, 1);
        }, 2000);
    },
    filters: {
        number(value) {
            var toFixedNum = Number(value).toFixed(3);
            var realVal = toFixedNum.substring(0, toFixedNum.toString().length - 1);
            return realVal;
        }
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
