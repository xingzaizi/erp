/**销售报价单 */
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>
          <h3>添加报价单</h3>
        </span>
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
                    <el-select placeholder="请选择活动区域">
                      <el-option label="客户一" value="1"></el-option>
                      <el-option label="客户二" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="单据日期" style="display: inline-block;">
                    <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item label="送货地址">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="单据号码">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item label="有效日期">
                    <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="币别">
                    <el-select placeholder="请选择币别">
                      <el-option label="人民币" value="1"></el-option>
                      <el-option label="美元" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item label="单价是否含税">
                    <el-select placeholder="请选择">
                      <el-option label="未税" value="1"></el-option>
                      <el-option label="含税" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="汇率">
                    <el-input></el-input>
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
                  <el-table border style="width: 100%">
                    <el-table-column prop="date" label="(栏号)"></el-table-column>
                    <el-table-column prop="date" label="物料编号"></el-table-column>
                    <el-table-column prop="date" label="(物料名称)"></el-table-column>
                    <el-table-column prop="date" label="(规格型号)"></el-table-column>
                    <el-table-column prop="date" label="单位名称"></el-table-column>
                    <el-table-column prop="date" label="数量"></el-table-column>
                    <el-table-column prop="date" label="折扣单位"></el-table-column>
                    <el-table-column prop="date" label="折数(%)"></el-table-column>
                    <el-table-column prop="date" label="单价"></el-table-column>
                    <el-table-column prop="date" label="金额"></el-table-column>
                    <el-table-column prop="date" label="税率"></el-table-column>
                    <el-table-column prop="date" label="(税额)"></el-table-column>
                    <el-table-column prop="date" label="(含税金额)"></el-table-column>
                    <el-table-column prop="date" label="赠品"></el-table-column>
                    <el-table-column prop="date" label="分录备注"></el-table-column>
                  </el-table>
                </template>
              </el-tab-pane>
              <el-tab-pane label="备注">
                <el-input
                            type="textarea"
                            :rows="5"
                            placeholder="请输入内容"
                            >
                            </el-input>
              </el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
        <el-row>
            <el-form :inline="true" class="demo-form-inline" :label-position="leaf">
              <div class="row">
                <el-form-item label="业务人员">
                  <el-input />
                </el-form-item>
                <el-form-item label="制单人员">
                  <el-input />
                </el-form-item>
              </div>
           
              <div class="row">
                <el-form-item label="所属部门">
                  <el-input />
                </el-form-item>
                <el-form-item label="复核人员">
                  <el-input />
                </el-form-item>
              </div>
            </el-form>
        </el-row>
        <el-row >
          <el-col :push="18">
            <el-button type="success" @click="dialogVisible1 = true" >利润预估查询</el-button>
            <el-button type="warning"  @click="dialogVisible = true">历史交易查询</el-button>
          </el-col>
        </el-row>
      </div>

      
      <el-dialog
          title="利润预估查询"
          :visible.sync="dialogVisible1"
          width="60%"
          >
          
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
          <el-col >
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
                <el-table-column prop="date" label=""></el-table-column>
              </el-table>
            </template>
          </el-col>
           
        </el-row>
          <span slot="footer" class="dialog-footer">
            <el-button type="danger" @click="dialogVisible1 = false">退 出</el-button>
          </span>
        </el-dialog>


      <el-dialog
          title="历史交易查询"
          :visible.sync="dialogVisible"
          width="60%"
          >
          
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
          <el-col >
               <template>
              <el-table border style="width: 100%">
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
export default {
  data(){
      return{
         dialogVisible: false,
         dialogVisible1: false
      }
  },
  methods:{
    
  }
}
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
.el-input,
.el-select,
.el-date-picker {
  width: 220px;
}
</style>  