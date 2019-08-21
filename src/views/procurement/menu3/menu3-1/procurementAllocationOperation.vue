<template>
  <div>
    <el-col :span="24">
      <el-header height="6vh" style="text-align:center;font-size:22px">费用分摊作业</el-header>
    </el-col>

    <el-col :span="24">
      <el-form label-width="100px" size="mini">
        <el-col :span="24">
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
          <el-col :span="12">
            <el-form-item label="单据号码">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-col>

        <el-col :span="24">
          <el-col :span="12">
            <el-form-item label="分摊方式">
              <el-radio-group v-model="sizeForm.resource">
                <el-radio border label="按金额"></el-radio>
                <el-radio border label="按数量"></el-radio>
                <el-radio border label="按材积"></el-radio>
                <el-radio border label="按重量"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="凭据编号">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-col>

        <el-col :span="24">
          <el-col :span="12">
            <el-form-item label="待金额本位币">
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
            <el-tab-pane label="费用明细" name="first">
              <template>
                <el-table :data="tableData" style="width: 100%" border size="mini">
                  <el-table-column prop="test" label="栏号" sortable width></el-table-column>
                  <el-table-column prop="test" label="费用编号" sortable width></el-table-column>
                  <el-table-column prop="test" label="费用名称" sortable width></el-table-column>
                  <el-table-column prop="test" label="币别" sortable width></el-table-column>
                  <el-table-column prop="test" label="汇率" sortable width></el-table-column>
                  <el-table-column prop="test" label="金额" sortable width></el-table-column>
                  <el-table-column prop="test" label="金额本位币" sortable width></el-table-column>
                </el-table>
              </template>
            </el-tab-pane>
            <el-tab-pane label="分摊结果" name="second">
              <template>
                <el-table :data="tableData" style="width: 100%" border size="mini">
                  <el-table-column prop="test" label="栏号" sortable width></el-table-column>
                  <el-table-column prop="test" label="采购入库单号" sortable width></el-table-column>
                  <el-table-column prop="test" label="物料编号" sortable width></el-table-column>
                  <el-table-column prop="test" label="规格型号" sortable width></el-table-column>
                  <el-table-column prop="test" label="采购金额" sortable width></el-table-column>
                  <el-table-column prop="test" label="数量" sortable width></el-table-column>
                  <el-table-column prop="test" label="单位" sortable width></el-table-column>
                  <el-table-column prop="test" label="重量" sortable width></el-table-column>
                  <el-table-column prop="test" label="材积" sortable width></el-table-column>
                  <el-table-column prop="test" label="分摊金额" sortable width></el-table-column>
                </el-table>
              </template>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </template>
    </el-col>

    <!-- 尾 -->
    <el-col :span="24">
      <el-form label-width="100px" size="mini" style="margin:20px 0px">
        <el-col :span="24">
          <el-col :span="8">
            <el-form-item label="制单人员">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="复合人员">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label>
              <el-select v-model="sizeForm.region" placeholder="功能" style="width: 100%">
                <el-option label="批号设定" value="6"></el-option>
                <el-option label="条码打印" value="7"></el-option>
                <el-option label="批次变更单价" value="8"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-col>
      </el-form>
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