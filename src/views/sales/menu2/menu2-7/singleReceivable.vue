<template>
  <!-- 应收冲款  -->
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span class="el-icon-search">应收款查询</span>
    </div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="客户">
        <el-input v-model="formInline.user" placeholder="客户" style="width: 350px;"></el-input>
      </el-form-item>
      <el-form-item label="应收冲款类型">
        <el-select v-model="formInline.region" placeholder="应收冲款类型" style="width: 350px;">
          <el-option label="预收款" value="shanghai"></el-option>
          <el-option label="收款冲款" value="beijing"></el-option>
          <el-option label="预收冲应收" value="beijing"></el-option>
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
      <el-button type="success" @click="advanceCharge">添加预收款</el-button>
      <el-button type="warning" @click="prepaidatMoney">添加收款冲款</el-button>
      <el-button type="info" @click="advancePayment">添加预收冲应收</el-button>
    </el-form>

    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <el-table-column prop="name" label="客户" sortable width="180"></el-table-column>
      <el-table-column prop="date" label="单据日期" sortable width="180"></el-table-column>
      <el-table-column prop="name" label="应收冲款类型" sortable width="180"></el-table-column>
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
        title: "应收冲款单(预收款)",
        name: "singleReceivableReceivable"
      });
      this.$router.replace("/salesManagement/menu2/menu2-7/receivable");
    },
    advancePayment() {
      this.$store.commit("addTab", {
        title: "应收冲款单(预收冲应收)",
        name: "singleReceivableCollectInAdvance"
      });
      this.$router.replace("/salesManagement/menu2/menu2-7/advance");
    },
    prepaidatMoney() {
      this.$store.commit("addTab", {
        title: "应收冲款单(收款冲款)",
        name: "singleReceivableFlush"
      });
      this.$router.replace("/salesManagement/menu2/menu2-7/flush");
    }
  }
};
</script>