<template>
  <!--销售发票 -->
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span class="el-icon-search">销售发票</span>
    </div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="客户" style="margin-left: 40px">
        <el-input v-model="formInline.user" placeholder="客户" style="width: 500px;"></el-input>
      </el-form-item>
      <el-form-item label="销售核对状态">
        <el-select v-model="formInline.region" placeholder="销售核对状态" style="width: 500px;">
          <el-option label="未核对" value="shanghai"></el-option>
          <el-option label="已核对" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="单价是否含税">
        <el-select v-model="formInline.region" placeholder="单价是否含税" style="width: 500px;">
          <el-option label="未税" value="shanghai"></el-option>
          <el-option label="含税" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间筛选" style="margin-left: 25px">
        <div class="block">
          <el-date-picker
            v-model="value2"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-button type="success">添加采购发票</el-button>
    </el-form>

    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <el-table-column prop="name" label="客户" sortable width="180"></el-table-column>
      <el-table-column prop="date" label="单据日期" sortable width="180"></el-table-column>
      <el-table-column prop="name" label="单据类型" sortable width="180"></el-table-column>
      <el-table-column prop="name" label="单据号码" sortable width="180"></el-table-column>
      <el-table-column prop="name" label="单价是否含税" sortable width="180"></el-table-column>
      <el-table-column prop="date" label="采购核对状态" sortable width="180"></el-table-column>
      <el-table-column prop="name" label="凭证编号" sortable width="180"></el-table-column>
      <el-table-column prop="address" label="操作" :formatter="formatter">
        <el-button class="el-icon-search" size="mini" @click="detail">查询详情</el-button>
        <el-button class="el-icon-delete" type="danger" size="mini">删除</el-button>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000" style="text-align:center"></el-pagination>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
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
      ],
      formInline: {
        user: "",
        region: "",
        data: ""
      },
      pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''
    };
  },
  methods: {
    formatter(row) {
      return row.address;
    },
    detail() {
      this.$store.commit("addTab", {
        title: "销售发票详细",
        name: "salesSlipDetail"
      });
      this.$router.replace("/salesManagement/menu2/menu2-6/detail");
    }
  }
};
</script>
<style scoped>
</style>