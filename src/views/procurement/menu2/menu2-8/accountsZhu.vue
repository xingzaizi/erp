<template>
  <!-- 应付冲款  -->
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span class="el-icon-search">应付款查询</span>
    </div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="供应商">
        <el-input v-model="formInline.user" placeholder="供应商" style="width: 350px;"></el-input>
      </el-form-item>
      <el-form-item label="应付冲款类型">
        <el-select v-model="formInline.region" placeholder="应付冲款类型" style="width: 350px;">
          <el-option label="预付款" value="shanghai"></el-option>
          <el-option label="付款冲款" value="beijing"></el-option>
          <el-option label="预付冲应付" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="formInline.data"
          style="width: 350px;"
        ></el-date-picker>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-button type="success" @click="advanceCharge">添加预付款</el-button>
      <el-button type="warning" @click="prepaidatMoney">添加付款冲款</el-button>
      <el-button type="info" @click="advancePayment">添加预付冲应付</el-button>
    </el-form>

    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <el-table-column prop="name" label="供应商" sortable width="180"></el-table-column>
      <el-table-column prop="date" label="单据日期" sortable width="180"></el-table-column>
      <el-table-column prop="name" label="应付冲款类型" sortable width="180"></el-table-column>
      <el-table-column prop="name" label="单据号码" sortable width="180"></el-table-column>
      <el-table-column prop="name" label="币别" sortable width="180"></el-table-column>
      <el-table-column prop="date" label="终止帐月" sortable width="180"></el-table-column>
      <el-table-column prop="name" label="折扣率(%)" sortable width="180"></el-table-column>
      <el-table-column prop="address" label="操作" :formatter="formatter">
        <el-button class="el-icon-search" size="mini">查询详情</el-button>
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
      }
    };
  },
  methods: {
    formatter(row) {
      return row.address;
    },
    advanceCharge() {
      this.$store.commit("addTab", {
        title: "应付冲款单(预付款)",
        name: "advanceCharge"
      });
      this.$router.replace("/procurement/menu2/menu2-8/charge");
    },
    advancePayment() {
      this.$store.commit("addTab", {
        title: "应付冲款单(预付冲应付)",
        name: "advancePayment"
      });
      this.$router.replace("/procurement/menu2/menu2-8/payment");
    },
    prepaidatMoney() {
      this.$store.commit("addTab", {
        title: "应付冲款单(预付冲款)",
        name: "prepaidatMoney"
      });
      this.$router.replace("/procurement/menu2/menu2-8/prepaid");
    }
  }
};
</script>