<template>
  <div>
    <el-col :span="24">
      <el-header height="6vh" style="text-align:center;font-size:22px">采购入库单详情</el-header>
    </el-col>

    <el-col :span="24">
      <el-form label-width="100px" size="mini">
        <el-col :span="24">
          <el-col :span="12">
            <el-form-item label="供应商">
              <el-input v-model="rukumain.supplier"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="单据日期">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="rukumain.date1"
                style="width: 100%;"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-col>

        <el-col :span="24">
          <el-col :span="12">
            <el-form-item label="供应商地址">
              <el-input v-model="rukumain.supplieradd"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="单据号码">
              <el-input v-model="rukumain.billno"></el-input>
            </el-form-item>
          </el-col>
        </el-col>

        <el-col :span="24">
          <el-col :span="12">
            <el-form-item label="采购入库类型">
              <el-input v-model="rukumain.warehousingtype"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="币别">
              <el-input v-model="rukumain.currency"></el-input>
            </el-form-item>
          </el-col>
        </el-col>

        <el-col :span="24">
          <el-col :span="12">
            <el-form-item label="单价是否含税">
              <el-radio-group v-model="rukumain.resource">
                <el-radio border label="含税" v-model="rukumain.onewhetherprice"></el-radio>
                <el-radio border label="未税" v-model="rukumain.onewhetherprice"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="汇率">
              <el-input v-model="rukumain.exchangerate"></el-input>
            </el-form-item>
          </el-col>
        </el-col>

        <el-col :span="24">
          <el-col :span="12">
            <el-form-item label="仓库">
              <el-input v-model="rukumain.warehouse"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="国外贸易">
              <el-input v-model="rukumain.foreigntrade"></el-input>
            </el-form-item>
          </el-col>
        </el-col>

        <el-col :span="24">
          <el-col :span="12">
            <el-form-item label="凭证编号">
              <el-input v-model="rukumain.voucherno"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label>
              <el-checkbox-group v-model="rukumain.type">
                <el-checkbox-button label="复合后自动生成发票" name="type"></el-checkbox-button>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-col>
      </el-form>
    </el-col>

    <el-col :span="24">
      <template>
        <el-card class="box-card">
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="内容" name="first">
              <template>
                <el-table :data="loadconginfo" style="width: 100%" border size="mini">
                  <el-table-column prop="storagedetailno" label="栏号" sortable width="180"></el-table-column>
                  <el-table-column prop="materielid" label="物料编号" sortable width="180"></el-table-column>
                  <el-table-column prop="materielname" label="物料名称" sortable width="180"></el-table-column>
                  <el-table-column prop="types" label="规格型号" sortable width="180"></el-table-column>
                  <el-table-column prop="units" label="单位名称" sortable width="180"></el-table-column>
                  <el-table-column prop="amount" label="数量" sortable width="180"></el-table-column>
                  <el-table-column prop="rebateprice" label="折扣前单价" sortable width="180"></el-table-column>
                  <el-table-column prop="rebate" label="折数（%）" sortable width="180"></el-table-column>
                  <el-table-column prop="unitprice" label="单价" sortable width="180"></el-table-column>
                  <el-table-column prop="moneys" label="金额" sortable width="180"></el-table-column>
                  <el-table-column prop="cess" label="税率（%）" sortable width="180"></el-table-column>
                  <el-table-column prop="tax" label="税额" sortable width="180"></el-table-column>
                  <el-table-column prop="taxmoneys" label="含税金额" sortable width="180"></el-table-column>
                  <el-table-column prop="safetyone" label="批号" sortable width="180"></el-table-column>
                  <el-table-column prop="present" label="赠品" sortable width="180"></el-table-column>
                  <el-table-column prop="safetytwo" label="发票明细" sortable width="180"></el-table-column>
                  <el-table-column prop="extend0" label="未开票数量" sortable width="180"></el-table-column>
                  <el-table-column prop="extend1" label="分录备注" sortable width="180"></el-table-column>
                  <el-table-column prop="origintype" label="来源单别" sortable width="180"></el-table-column>
                  <el-table-column prop="originno" label="来源单号" sortable width="180"></el-table-column>
                  <el-table-column prop="apportionmoney" label="分摊费用" sortable width="180"></el-table-column>
                </el-table>
              </template>
            </el-tab-pane>
            <el-tab-pane label="账款" name="second">
              <el-form label-width="100px" size="mini">
                <el-col :span="24">
                  <el-col :span="12">
                    <el-form-item label="账款归属">
                      <el-input></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="付款日期">
                      <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="sizeForm.date1"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-col>

                <el-col :span="24">
                  <el-col :span="6">
                    <el-form-item label>
                      <el-select v-model="sizeForm.region" placeholder="付款条件" style="width: 100%">
                        <el-option label="货到" value="6"></el-option>
                        <el-option label="次月" value="7"></el-option>
                        <el-option label="月结" value="8"></el-option>
                        <el-option label="其他" value="8"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item label>
                      <el-input placeholder="几天"></el-input>
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
                    <el-form-item label="账款月份">
                      <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="sizeForm.date1"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-col>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </template>
    </el-col>

    <el-col :span="24">
      <el-form label-width="100px" size="mini" style="margin:20px 0px">
        <el-col :span="24">
          <el-col :span="12">
            <el-form-item label="采购人员">
              <el-input v-model="rukumain.caigouperson"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="制单人员">
              <el-input v-model="rukumain.shenheperson"></el-input>
            </el-form-item>
          </el-col>
        </el-col>
        <el-col :span="24">
          <el-col :span="12">
            <el-form-item label="所属部门">
              <el-input v-model="rukumain.department"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="复合人员">
              <el-input v-model="rukumain.fuheperson"></el-input>
            </el-form-item>
          </el-col>
        </el-col>

        <!-- 查询（模态） -->
        <el-col :span="24">
          <el-col :span="12">
            <el-form-item label="所属项目">
              <el-input v-model="rukumain.suoshuproject"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="查询">
              <el-button round size="mini" @click="lsjy = true">历史交易查询</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label>
              <el-button round size="mini" @click="fyft = true">分摊费用明细</el-button>
            </el-form-item>
          </el-col>
        </el-col>
        <!-- 查询（转单） -->
        <el-col :span="24">
          <el-col :span="12">
            <el-form-item label="转单">
              <el-button round size="mini" @click="cgxj = true">采购询价转入</el-button>
              <el-button round size="mini" @click="dialogTableVisible = true">采购订单转入</el-button>
              <el-button round size="mini" @click="dialogTableVisible = true">进口商业发票转入</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="功能">
              <el-button round size="mini" @click="dialogTableVisible = true">批号设定</el-button>
              <el-button round size="mini" @click="dialogTableVisible = true">条码打印</el-button>
              <el-button round size="mini" @click="dialogTableVisible = true">批次变更单价</el-button>
            </el-form-item>
          </el-col>
        </el-col>
      </el-form>
    </el-col>

    <el-col :span="24" style="text-align:center">
      <el-footer>
        <el-button round icon="el-icon-circle-plus-outline" size="mini" @click="addconginfo">新增</el-button>
        <el-button round icon="el-icon-edit" size="mini">修改</el-button>
        <el-button round icon="el-icon-arrow-left" size="mini">返回</el-button>
      </el-footer>
    </el-col>

    <!-- 模态(历史交易查询) -->
    <el-dialog title :visible.sync="lsjy" width="70%">
      <el-col :span="24">
        <el-header height="6vh" style="text-align:center;font-size:22px">历史交易查询</el-header>
      </el-col>
      <el-col :span="24">
        <el-col :span="12">
          <el-form label-width="100px" size="mini">
            <el-form-item label="供应商">
              <el-input></el-input>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="6">
          <el-button round size="mini">输出资料</el-button>
        </el-col>
        <el-col :span="6">
          <el-button round size="mini">取回</el-button>
        </el-col>
      </el-col>
      <el-table :data="loadconginfo.list" border size="mini">
        <el-table-column property="storagedetailno" label="单别"></el-table-column>
        <el-table-column property="storagedetailno" label="日期"></el-table-column>
        <el-table-column property="storagedetailno" label="单号"></el-table-column>
        <el-table-column property="storagedetailno" label="币别"></el-table-column>
        <el-table-column property="cess" label="汇率"></el-table-column>
        <el-table-column property="address" label="物料编号"></el-table-column>
        <el-table-column property="address" label="物料名称"></el-table-column>
        <el-table-column property="address" label="规格型号"></el-table-column>
        <el-table-column property="address" label="单位"></el-table-column>
        <el-table-column property="address" label="数量"></el-table-column>
        <el-table-column property="address" label="折扣前单价"></el-table-column>
        <el-table-column property="address" label="折数（%）"></el-table-column>
        <el-table-column property="address" label="单价"></el-table-column>
        <el-table-column property="date" label="单价是否含税"></el-table-column>
        <el-table-column property="address" label="金额"></el-table-column>
        <el-table-column property="address" label="备注"></el-table-column>
      </el-table>
    </el-dialog>

    <!-- 模态(分摊费用明细) -->
    <el-dialog title :visible.sync="fyft">
      <el-col :span="24">
        <el-header height="6vh" style="text-align:center;font-size:22px">分摊费用明细</el-header>
      </el-col>
      <el-col :span="12">
        <el-form label-width="100px" size="mini">
          <el-form-item label="物料编号">
            <el-input></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-table :data="gridData" border size="mini">
        <el-table-column property="date" label="采购分摊单号"></el-table-column>
        <el-table-column property="name" label="分摊方式"></el-table-column>
        <el-table-column property="address" label="分摊金额"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
//获取当前时间
let i = 0;
if (i == i) {
  i++;
}
let myDate = new Date();
let datestr =
  myDate.getFullYear() +
  "" +
  (myDate.getMonth() + 1) +
  "" +
  myDate.getDate() +
  "0" +
  i;

export default {
  data() {
    return {
      sizeForm: {
        region: "",
        date1: "",
        type: [],
        resource: ""
      },
      rukumain: {
        supplier: "",
        date1: "",
        supplieradd: "",
        billno: datestr,
        warehousingtype: "",
        currency: "人民币",
        onewhetherprice: "未税",
        exchangerate: "1.0000",
        warehouse: "",
        foreigntrade: "否",
        voucherno: "",
        whetherinvoice: "",
        resource: "",
        type: "",
        caigouperson: "",
        shenheperson: "",
        fuheperson: "",
        department: "",
        suoshuproject: ""
      },
      activeName: "first",
      loadconginfo: {},
      lsjy: false,
      fyft: false,
      cgxj: false
    };
  },
  watch: {
    $route(to, from) {
      this.loadpage(to.params.danhao);
    }
  },
  methods: {
    loadpage(danhao) {
      let _temp1 = this;
      _temp1.$ajax
        .get(`api/rukucong/querybydanhao/${danhao}`)
        .then(resp => {
          _temp1.loadconginfo = resp.data;
        })
        .catch(e => {
          alert(e);
        });
    },
    addconginfo() {
      if (confirm("确定入库此条订单？") == true) {
        this.$ajax
          .post("api/rukumain/addmain", this.rukumain)
          .then(resp => {
            if (resp.data.code == "200") {
              alert("新增成功！");
            }
          })
          .catch(e => {
            alert(e);
          });
      }
    }
  },
  //挂载完成（可以访问DOM元素）
  mounted() {
    this.loadpage(this.$route.params.danhao);
  }
};
</script>
<style  scoped>
</style>
