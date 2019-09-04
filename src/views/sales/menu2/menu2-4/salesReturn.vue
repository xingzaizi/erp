<template>
<div v-loading="loading">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>销售管理</el-breadcrumb-item>
        <el-breadcrumb-item>销售退货单</el-breadcrumb-item>
    </el-breadcrumb>
    <el-container>
        <el-container>
            <el-header height="">
                <div class="pagination">
                    <el-row>
                        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageConf.pageCode" :page-sizes="pageConf.pageOption" :page-size="pageConf.pageSize" layout="total, prev, pager, next" :total="pageConf.totalPage">
                        </el-pagination>
                    </el-row>
                    <el-row>
                        <el-button type="primary">添加</el-button>
                        <el-button type="warning">修改</el-button>
                        <el-button type="success">保存</el-button>
                        <el-button type="danger">删除</el-button>
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
                            <el-input placeholder="请输入内容" @dblclick.native="dialogCustomerVisible = true">
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
                            <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>

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
                            <el-input placeholder="请输入内容">
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
                            <el-input placeholder="请输入内容">
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
                            <el-select v-model="data1" placeholder="请选择活动区域">
                                <el-option v-for="item in [{value:1,text:'含税'},{value:0,text:'未税'}]" :label="item.text" :key="item.value" :value="item.value">
                                </el-option>
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
                            <el-input placeholder="请输入内容" @dblclick.native="dialogCurrencyVisible = true">
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
                            <el-input placeholder="请输入内容" @dblclick.native="dialogWarehouseVisible = true">
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
                            <el-input placeholder="请输入内容">
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
                            <el-input placeholder="请输入内容">
                            </el-input>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content bg-purple-light">
                            国外贸易
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">
                            <el-input placeholder="请输入内容">
                            </el-input>
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
                            <el-input placeholder="请输入内容">
                            </el-input>
                        </div>
                    </el-col>
                    <el-col :span="12">
                    </el-col>
                    <!-- <el-col :span="8">
                            <div class="grid-content bg-purple-light">
                                <el-input placeholder="请输入内容">
                                </el-input>
                            </div>
                        </el-col> -->
                </el-row>
            </el-header>
            <el-main height="">
                <el-tabs type="border-card">
                    <el-tab-pane label="内容">
                        <el-table :data="tableData" border show-summary style="width: 100%" height="250">
                            <el-table-column type="index" label="(拦号)">
                            </el-table-column>
                            <el-table-column prop="name" label="(物料编号)">
                            </el-table-column>
                            <el-table-column prop="amount1" label="(物料名称)">
                            </el-table-column>
                            <el-table-column prop="amount2" label="(规格型号)">
                            </el-table-column>
                            <el-table-column prop="amount3" label="(单位名称)">
                            </el-table-column>
                            <el-table-column prop="amount1" label="数量">
                            </el-table-column>
                            <el-table-column prop="amount1" label="折扣前单价">
                            </el-table-column>
                            <el-table-column label="折数(%)">
                                100.00
                            </el-table-column>
                            <el-table-column prop="amount1" label="单价">
                            </el-table-column>
                            <el-table-column prop="amount1" label="(金额)">
                            </el-table-column>
                            <el-table-column prop="amount1" label="税率(%)">
                            </el-table-column>
                            <el-table-column prop="amount1" label="(税额)">
                            </el-table-column>
                            <el-table-column prop="amount1" label="(含税金额)">
                            </el-table-column>
                            <el-table-column label="(批号)">
                                <el-checkbox></el-checkbox>
                            </el-table-column>
                            <el-table-column label="(赠品)">
                                <el-checkbox></el-checkbox>
                            </el-table-column>
                            <el-table-column label="(发票明细)">
                                <el-checkbox></el-checkbox>
                            </el-table-column>
                            <el-table-column label="(未开票数量)">
                                0
                            </el-table-column>
                            <el-table-column label="分录备注">
                            </el-table-column>
                            <el-table-column label="(来源单别)">
                            </el-table-column>
                            <el-table-column label="(来源单号)">
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
                                    <el-input placeholder="请输入内容" @dblclick.native="dialogCustomerVisible = true">
                                    </el-input>
                                    <el-dialog width="990px" title="单选-客户主文件设定" :visible.sync="dialogCustomerVisible">
                                        <Customer></Customer>
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
                                    <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>

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
                                    <el-select v-model="data1" placeholder="请选择活动区域">
                                        <el-option v-for="item in [{value:1,text:'货到'},{value:2,text:'次月'},{value:3,text:'月结'},{value:4,text:'其他'}]" :label="item.text" :key="item.value" :value="item.value">
                                        </el-option>
                                    </el-select>
                                    <el-input value="0" placeholder="请输入内容">
                                    </el-input>
                                    天
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="grid-content bg-purple-light">
                                    账款月份
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="grid-content bg-purple-light">
                                    <el-input placeholder="请输入内容">
                                    </el-input>
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
                                    <el-input placeholder="请输入内容">
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
                                    <el-input placeholder="请输入内容">
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
                                    <el-input type="textarea"></el-input>
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
                        业务人员
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <el-input placeholder="请输入内容" @dblclick.native="dialogPeopleVisible = true">
                        </el-input>
                        <el-dialog width="990px" title="单选-人员主文件设定" :visible.sync="dialogPeopleVisible">
                            <People></People>
                        </el-dialog>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple-light">
                        制单人员
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple-light">
                        <el-input placeholder="请输入内容">
                        </el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        所属部门
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <el-input placeholder="请输入内容" @dblclick.native="dialogDepartmentVisible = true">
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
                        <el-input placeholder="请输入内容">
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
                        <el-input placeholder="请输入内容">
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
                                <el-dropdown-item @click.native="dialogOutOfStockVisible = true">销售出库转入</el-dropdown-item>
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
                                    <el-dropdown-item @click.native="dialogBillVisible = true">单据状态查询</el-dropdown-item>
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
            data1: 0,
            activeName: 'first',
            loading: true,
            tableData: [],
            pageConf: {
                //设置一些初始值(会被覆盖)
                pageCode: 1, //当前页
                pageSize: 4, //每页显示的记录数
                totalPage: 12, //总记录数
                pageOption: [4, 10, 20], //分页选项
                handleCurrentChange: function () {
                    console.log("页码改变了");
                }
            },
            dialogCustomerVisible: false,
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
        del(id) {
            var bl = confirm("确定删除吗？");
            if (bl) {
                alert("删除成功")
            }
        },
        findByPage: function (pageCode, pageSize) {
            const that = this;
            if (this.formInline.type == '') {
                this.formInline.type = null;
            }
            if (this.formInline.val == '') {
                this.formInline.val = null;
            }
            console.log("当前页--->" + pageCode + "====页码------>" + pageSize)
            that.$axios.get(`http://localhost:8080/api/info/page/${pageCode}/${pageSize}/${this.formInline.type}/${this.formInline.val}`).then(resp => {
                // that.pageInfo = resp.data;
                console.log(resp);
                that.pageConf.totalPage = resp.data.total;
                that.info = resp.data.list;
            }).catch(e => {
                alert(e);
            });
        },
        handleSizeChange: function (val) {
            this.findByPage(this.pageConf.pageCode, val);
        },
        handleCurrentChange: function (val) {
            this.findByPage(val, this.pageConf.pageSize);
        },
        handleClick(row) {
            console.log(row);
            this.$router.push(`info/${row.pid}`);
        }
    },
    mounted() {
        setTimeout(() => {
            this.loading = false;
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
