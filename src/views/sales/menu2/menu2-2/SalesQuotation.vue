/**销售报价单 */
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>
          <h3>销售报价单</h3>
        </span>
        <el-tag
          v-if="sellQuote.orderStatus==1"
          style="float: right;"
          type="danger"
          effect="dark"
        >已审核</el-tag>
      </div>
      <div class="text item">
        <el-row>
          <el-col>
            <el-form
              :inline="true"
              label-position="left"
              label-width="100px"
              class="demo-form-inline"
            >
              <el-row>
                <el-col :span="12">
                  <el-form-item>
                    <el-checkbox label="正式客户" name="type" style="width:100px"></el-checkbox>
                    <el-select placeholder="请选择客户" v-model="sellQuote.client">
                      <el-option label="客户一" value="1"></el-option>
                      <el-option label="客户二" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="单据日期" style="display: inline-block;">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      type="date"
                      placeholder="选择日期"
                      v-model="sellQuote.billDate"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item label="送货地址">
                    <el-input v-model="sellQuote.cliPlace"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="单据号码">
                    <el-input v-model="sellQuote.billId" :disabled="true"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item label="有效日期">
                    <el-date-picker
                      type="date"
                      value-format="yyyy-MM-dd"
                      placeholder="选择日期"
                      v-model="sellQuote.effectiveData"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="币别">
                    <el-select placeholder="请选择币别" v-model="sellQuote.currency">
                      <el-option label="人民币" :value="1"></el-option>
                      <el-option label="美元" :value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item label="单价是否含税">
                    <el-select placeholder="请选择" v-model="sellQuote.priceWhetherTax">
                      <el-option label="未税" :value="false"></el-option>
                      <el-option label="含税" :value="true"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="汇率">
                    <el-input value="1.0"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-tabs type="border-card">
              <el-tab-pane label="内容">
                <template>
                  <el-table
                    border
                    style="width: 100%"
                    show-summary
                    :summary-method="getSummaries"
                    :data="sellQuote.sellQuoteItems"
                  >
                    <el-table-column type="index" width="100" :index="indexMethod" label="(栏号)"></el-table-column>
                    <el-table-column prop="matId" label="物料编号"></el-table-column>
                    <el-table-column prop="matName" label="(物料名称)"></el-table-column>
                    <el-table-column prop="matSpec" label="(规格型号)"></el-table-column>
                    <el-table-column prop="matUnit" label="单位名称"></el-table-column>
                    <el-table-column width="200" label="数量">
                      <template slot-scope="scope">
                        <el-input-number
                          v-model="scope.row.number"
                          @change="calculate(scope.row)"
                          :min="1"
                          :max="100"
                          label="描述文字"
                        ></el-input-number>
                      </template>
                    </el-table-column>
                    <el-table-column prop="agioAgoPrice" label="折扣单价"></el-table-column>
                    <el-table-column prop="agio" label="折数(%)"></el-table-column>
                    <el-table-column prop="price" label="单价"></el-table-column>
                    <el-table-column prop="money" label="金额"></el-table-column>
                    <el-table-column prop="cess" label="税率"></el-table-column>
                    <el-table-column prop="taxmoney" label="(税额)"></el-table-column>
                    <el-table-column prop="intaxmoney" label="(含税金额)"></el-table-column>
                    <el-table-column label="赠品">
                      <template slot-scope="scope">
                        <el-switch
                          v-model="scope.row.present"
                          active-color="#13ce66"
                          inactive-color="#ff4949"
                        ></el-switch>
                      </template>
                    </el-table-column>
                    <el-table-column prop="remark" label="分录备注"></el-table-column>
                  </el-table>
                  <el-row>
                    <el-col :span="8">
                   
                      <el-input v-model="sellQuote.totalMoney" type="hidden" width="100"></el-input>
                    </el-col>
                    <el-col :span="8">
                   
                      <el-input v-model="sellQuote.tatalTax" type="hidden"></el-input>
                    </el-col>
                    <el-col :span="8">
                   
                      <el-input v-model="sellQuote.totalTaxMoney" type="hidden"></el-input>
                    </el-col>
                  </el-row>

                  <el-button type="danger" @click="show()">选择物料</el-button>
                </template>
              </el-tab-pane>
              <el-tab-pane label="备注">
                <el-input v-model="sellQuote.remark" type="textarea" :rows="5" placeholder="请输入内容"></el-input>
              </el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
        <el-row>
          <el-form :inline="true" class="demo-form-inline">
            <div class="row">
              <el-form-item label="业务人员">
                <el-input v-model="sellQuote.empName " />
              </el-form-item>
              <el-form-item label="制单人员">
                <el-input v-model="sellQuote.makeEmpName" />
              </el-form-item>
            </div>

            <div class="row">
              <el-form-item label="所属部门">
                <el-input v-model="sellQuote.depName" />
              </el-form-item>
              <el-form-item label="复核人员">
                <el-input v-model="sellQuote.auditingEmpName" />
              </el-form-item>
            </div>
          </el-form>
        </el-row>
        <el-row>
          <el-col :push="15">
            <el-button type="success" @click="dialogVisible1 = true">利润预估查询</el-button>
            <el-button type="warning" @click="dialogVisible = true">历史交易查询</el-button>
            <el-button type="primary" @click="addOrUpd()">保存</el-button>
          </el-col>
        </el-row>
      </div>

      <el-dialog title="利润预估查询" :visible.sync="dialogVisible1" width="60%">
        <el-row>
          <el-col>
            <el-form :inline="true" class="demo-form-inline" style="margin-left:0px;">
              <el-form-item label="单据别" style="margin-right: 10px;">
                <el-input width="200" :disabled="true" placeholder="销售报价单  180013213535"></el-input>
              </el-form-item>
              <el-form-item label="客户" style="margin-right: 10px;">
                <el-input width="200" :disabled="true" placeholder="001   三国公司"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <template>
              <el-table border style="width: 100%">
                <el-table-column prop="date" label="(栏号)"></el-table-column>
                <el-table-column prop="date" label="物料编号"></el-table-column>
                <el-table-column prop="date" label="物料名称"></el-table-column>
                <el-table-column prop="date" label="规格型号"></el-table-column>
                <el-table-column prop="date" label="本币金额"></el-table-column>
                <el-table-column prop="date" label="实际成本"></el-table-column>
                <el-table-column prop="date" label="实际毛利"></el-table-column>
                <el-table-column prop="date" label="实际毛利率(%)"></el-table-column>
                <el-table-column prop="date" label="(标准成本)"></el-table-column>
                <el-table-column prop="date" label="(标准毛利)"></el-table-column>
                <el-table-column prop="date" label="标准毛利率(%)"></el-table-column>
                <el-table-column prop="date" label></el-table-column>
              </el-table>
            </template>
          </el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button type="danger" @click="dialogVisible1 = false">退 出</el-button>
        </span>
      </el-dialog>

      <el-dialog title="物料选择" :visible.sync="matShow" width="60%">
        <materia-query @getMaterials="getMaterials"></materia-query>
      </el-dialog>

      <el-dialog title="历史交易查询" :visible.sync="dialogVisible" width="60%">
        <el-row>
          <el-col>
            <el-form :inline="true" class="demo-form-inline" style="margin-left:0px;">
              <el-form-item label="客户" style="margin-right: 10px;">
                <el-input width="200" :disabled="true" placeholder="客户" style="width:300px;"></el-input>
              </el-form-item>
              <el-form-item style="margin-right: 0px;">
                <el-button type="success">资料输出</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <template>
              <el-table border style="width: 100%" :data="sellQuote.sellQuoteItems">
                <el-table-column prop="date" label="(单别)"></el-table-column>
                <el-table-column prop="date" label="日期"></el-table-column>
                <el-table-column prop="date" label="(单号)"></el-table-column>
                <el-table-column prop="date" label="(币别)"></el-table-column>
                <el-table-column prop="date" label="物料编号"></el-table-column>
                <el-table-column prop="date" label="物料名称"></el-table-column>
                <el-table-column prop="date" label="规格型号"></el-table-column>
                <el-table-column prop="date" label="单位"></el-table-column>
                <el-table-column prop="date" label="数量"></el-table-column>
                <el-table-column prop="date" label="折扣前单价"></el-table-column>
                <el-table-column prop="date" label="折数(%)"></el-table-column>
                <el-table-column prop="date" label="(单价)"></el-table-column>
                <el-table-column prop="date" label="(是否含税)"></el-table-column>
                <el-table-column prop="date" label="金额"></el-table-column>
                <el-table-column prop="date" label="备注"></el-table-column>
              </el-table>
            </template>
          </el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button type="danger" @click="dialogVisible = false">退 出</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import MateriaQuery from '../../../../components/MaterialQuery.vue'
export default {
  components:{
    MateriaQuery
  },
  data() {
    return {
      dialogVisible: false,
      dialogVisible1: false,
      matShow:false,
      materials:[],
      sellQuote: {
        billId:"",
        client: "",
        cliShortName: "",
        cliPlaceId: "",
        cliPlace: "",
        orderStatus: "",
        currency: "",
        priceWhetherTax: "",
        empId: "",
        empName: "",
        depId: "",
        depName: "",
        makeEmpName: "",
        auditingEmpName: "",
        checkState: "",
        remark: "",
        totalMoney: "",
        tatalTax: "",
        totalTaxMoney: "",
        isExist: "",
        effectiveData: "",
        sellQuoteItems: []
      },
      item:{
            agioAgoPrice:0.0,
            agio:100,
            money:0.0,
            cess:17,
            number:1,
            taxmoney:0.0,
            intaxmoney:0.0,

      }
    };
  },
  methods: {
    show(){
      this.matShow=true
    },
    indexMethod(index) {
        return index+1 * 1;
    },
    getSummaries(param){
     
        let money = 0.0;
        let taxmoney = 0.0;
        let intaxmoney = 0.0;

        const { columns, data} = param;
        const sums = [];
        data.forEach(i => {
          money += i.money;
          taxmoney += i.taxmoney;
          intaxmoney += i.intaxmoney;
        })
        columns.forEach((column, index) => {
        if(index === 0) {
          sums[index] = '合计';
          return;
        }
       
        switch(column.property) {
          case "money":
          sums[index] =  money+'元'; 
          break;
          case "taxmoney":
          sums[index] = taxmoney + '元'; 
          break;
          case "intaxmoney":
          sums[index] =intaxmoney+'元'; 
          break;
          default:
          break;
        }
        });
        this.sellQuote.totalMoney = money;//合计金额
        this.sellQuote.tatalTax = taxmoney;//合计税额
        this.sellQuote.totalTaxMoney = intaxmoney;//合计含税金额
        return sums;
    },
    loadData() {
      let _this = this;
      if (sessionStorage.getItem("cz") == "upd") {
        let billId = sessionStorage.getItem("billId");
        _this.$axios
          .post(
            `http://localhost:8080/sellQuote/getSellQuoteById?billId=${billId}`
          )
          .then(resp => {
            _this.sellQuote = resp.data;
            console.log(_this.sellQuote);
          })
          .catch(e => {
            _this.$message.error("服务器已关闭");
          });
      }
    },
    addOrUpd() {
      let _this = this;
      _this.$axios
        .post(
          "http://localhost:8080/sellQuote/addOrupdSellQuote/",
          this.sellQuote
        )
        .then(resp => {
          if (resp.data.code == 200) {
            
          } 
          _this.$message.error(resp.data.msg);
          
        })
        .catch(e => {
          _this.$message.error("服务器已关闭");
        });
    },
    calculate(dx){
      dx.money = dx.price * dx.number//计算总金额
      dx.taxmoney = dx.money * 0.17
    },
    getMaterials(material){
      /**
       * material:
       * [
       *  {
            Matid:"1001",
            Matname:"电脑cpu",
            Matspec:"accp1.0",
            Matunit:"个",
            Matstandardprice:1500,
          }
          ,...
          ]
       */
      
    var bbb= JSON.parse(JSON.stringify(material).replace(/Matid/g,"mid"));
    console.log(bbb)

      var sellQuoteItems = {}
        material.forEach(i => {

            sellQuoteItems = Object.assign(this.item,i);//合并对象
            this.sellQuote.sellQuoteItems.push(sellQuoteItems)
        })
        this.matShow=false
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>

<style scoped>
.row > * {
  display: inline-block;
  margin-right: 10px;
}
.row > .el-form-item * {
  display: inline-block;
}
.el-form .el-form-item {
  margin-right: 100px;
}
.el-form {
  margin-left: 80px;
  margin-top: 20px;
}
.el-form-item .el-input,
.el-select,
.el-date-picker {
  width: 220px;
}
</style>  