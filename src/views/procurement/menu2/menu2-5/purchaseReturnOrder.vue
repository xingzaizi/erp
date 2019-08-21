<template>
  <div>
    <el-col :span="24">
      <el-header height="6vh" style="text-align:center;font-size:22px">采购退货单</el-header>
    </el-col>

    <el-form label-width="100px" size="mini">
      <el-col :span="24">
        <el-col :span="12">
          <el-form-item label="订单号查询">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="日期查询">
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
          <el-form-item label="审核状态">
            <el-select v-model="sizeForm.region" placeholder="请选择" style="width:100%">
              <el-option label="已审核" value="6"></el-option>
              <el-option label="未审核" value="7"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-row style="margin:0px 100px">
            <el-button icon="el-icon-search" circle size="mini"></el-button>
          </el-row>
        </el-col>
        <el-col :span="6">
          <el-row>
            <el-button plain size="mini">采购入库单</el-button>
          </el-row>
        </el-col>
      </el-col>
    </el-form>

    <template>
      <el-table :data="tableData" style="width: 100%" border size="mini">
        <el-table-column prop="test" label="序号" sortable width></el-table-column>
        <el-table-column prop="test" label="订单号" sortable width></el-table-column>
        <el-table-column prop="test" label="订单号" sortable width></el-table-column>
        <el-table-column prop="test" label="订单号" sortable width></el-table-column>
        <el-table-column prop="test" label="操作" sortable width>
          <el-button type="primary" plain size="mini">详细</el-button>
          <el-button type="danger" plain size="mini">删除</el-button>
        </el-table-column>
      </el-table>
    </template>

    <el-col :span="24" style="text-align:center">
      <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000"></el-pagination>
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
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>
<style  scoped>
</style>