<template>
  <div>
    <el-col :span="24">
      <el-header height="6vh" style="text-align:center;font-size:22px">采购退货单详情</el-header>
    </el-col>

    <el-col :span="24">
      <el-form label-width="100px" size="mini">
        <el-col :span="24">
          <el-col :span="12">
            <el-form-item label="供应商">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="单据日期">
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
          <el-col :span="12">
            <el-form-item label="供应商地址">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="单据号码">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-col>

        <!-- <el-col :span="24">
          <el-col :span="12">
            <el-form-item label="采购入库类型">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="币别">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-col>-->

        <el-col :span="24">
          <el-col :span="12">
            <el-form-item label="单价是否含税">
              <el-radio-group v-model="sizeForm.resource">
                <el-radio border label="含税"></el-radio>
                <el-radio border label="未税"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="币别">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-col>

        <el-col :span="24">
          <el-col :span="12">
            <el-form-item label="仓库">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="汇率">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-col>

        <el-col :span="24">
          <el-col :span="12">
            <el-form-item label="重新入库">
              <el-radio-group v-model="sizeForm.resource">
                <el-radio border label="是"></el-radio>
                <el-radio border label="否"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="国外贸易">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-col>

        <el-col :span="24">
          <el-col :span="12">
            <el-form-item label="凭证编号">
              <el-input></el-input>
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
                <el-table :data="tableData" style="width: 100%" border size="mini">
                  <el-table-column prop="date" label="栏号" sortable width="180"></el-table-column>
                  <el-table-column prop="name" label="物料编号" sortable width="180"></el-table-column>
                  <el-table-column prop="address" label="物料名称" sortable width="180"></el-table-column>
                  <el-table-column prop="address" label="规格型号" sortable width="180"></el-table-column>
                  <el-table-column prop="address" label="单位名称" sortable width="180"></el-table-column>
                  <el-table-column prop="address" label="数量" sortable width="180"></el-table-column>
                  <el-table-column prop="address" label="折扣前单价" sortable width="180"></el-table-column>
                  <el-table-column prop="address" label="折数（%）" sortable width="180"></el-table-column>
                  <el-table-column prop="address" label="单价" sortable width="180"></el-table-column>
                  <el-table-column prop="address" label="金额" sortable width="180"></el-table-column>
                  <el-table-column prop="address" label="税率（%）" sortable width="180"></el-table-column>
                  <el-table-column prop="address" label="税额" sortable width="180"></el-table-column>
                  <el-table-column prop="address" label="含税金额" sortable width="180"></el-table-column>
                  <el-table-column prop="address" label="批号" sortable width="180"></el-table-column>
                  <el-table-column prop="address" label="赠品" sortable width="180"></el-table-column>
                  <el-table-column prop="address" label="发票明细" sortable width="180"></el-table-column>
                  <el-table-column prop="address" label="未开票数量" sortable width="180"></el-table-column>
                  <el-table-column prop="address" label="分录备注" sortable width="180"></el-table-column>
                  <el-table-column prop="address" label="来源单别" sortable width="180"></el-table-column>
                  <el-table-column prop="address" label="来源单号" sortable width="180"></el-table-column>
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
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="制单人员">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-col>
        <el-col :span="24">
          <el-col :span="12">
            <el-form-item label="所属部门">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="复合人员">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-col>
        <el-col :span="24">
          <el-col :span="12">
            <el-form-item label="所属项目">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label>
              <el-select v-model="sizeForm.region" placeholder="转单">
                <el-option label="采购入库转入" value="1"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label>
              <el-select v-model="sizeForm.region" placeholder="功能">
                <el-option label="批号设定" value="6"></el-option>
                <el-option label="条码打印" value="7"></el-option>
                <el-option label="批次变更单价" value="8"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-col>
      </el-form>
    </el-col>

    <el-col :span="24" style="text-align:center">
      <el-footer>
        <el-button round icon="el-icon-circle-plus-outline" size="mini">新增</el-button>
        <el-button round icon="el-icon-edit" size="mini">修改</el-button>
        <el-button round icon="el-icon-arrow-left" size="mini">返回</el-button>
      </el-footer>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizeForm: {
        region: "",
        date1: "",
        type: [],
        resource: ""
      },
      activeName: "first"
    };
  }
};
</script>
<style  scoped>
</style>