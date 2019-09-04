<template>
  <div>
    <el-col :span="24">
      <el-header height="6vh" style="text-align:center;font-size:22px">采购入库单</el-header>
    </el-col>

    <el-form label-width="100px" size="mini">
      <el-col :span="24">
        <el-col :span="12">
          <el-form-item label="订单号查询">
            <el-input v-model="querytjinfo.danhao"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="日期查询">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="querytjinfo.riqi"
              style="width: 100%;"
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-col>

      <el-col :span="24">
        <el-col :span="12">
          <el-form-item label="审核状态">
            <el-select v-model="querytjinfo.danjustate" placeholder="请选择" style="width:100%">
              <el-option label="已审核" :value="1"></el-option>
              <el-option label="未审核" :value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-row style="margin:0px 100px">
            <el-button icon="el-icon-search" circle size="mini" @click="querylike"></el-button>
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
      <el-table :data="rukumaininfo.list" style="width: 100%" border size="mini">
        <el-table-column prop="stockstorageno" label="单号" sortable width></el-table-column>
        <el-table-column prop="storagedate" label="日期" sortable width></el-table-column>
        <el-table-column prop="purveyname" label="供货商名称" sortable width></el-table-column>
        <el-table-column prop="pricerevenue" label="单价是否含税" sortable width></el-table-column>
        <el-table-column label="操作" sortable width>
          <template slot-scope="temp">
            <el-button type="primary" plain size="mini" @click="get(temp.row.stockstorageno)">详细</el-button>
            <el-button
              type="danger"
              plain
              size="mini"
              @click="deldanhao(temp.row.stockstorageno)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>

    <el-col :span="24" style="text-align:center">
      <el-pagination
        v-if="rukumaininfo.total!=0"
        :pager-count="4"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="rukumaininfo.pageNum"
        :page-sizes="[2,4]"
        :page-size="rukumaininfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="rukumaininfo.total"
      ></el-pagination>
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
        resource: "",
        danhao: ""
      },
      rukumaininfo: {},
      querytjinfo: {
        danjustate: "",
        riqi: "",
        danhao: ""
      }
    };
  },
  methods: {
    //查询所有
    loadpage(num, size) {
      let _temp1 = this;
      _temp1.$ajax
        .get(`api/rukumain/querymaintable/${num}/${size}`)
        .then(resp => {
          _temp1.rukumaininfo = resp.data;
        })
        .catch(e => {
          alert(e);
        });
    },
    //上一页
    goToPrePage() {
      this.loadpage(this.rukumaininfo.prePage, this.rukumaininfo.pageSize);
    },
    //下一页
    goToNextPage() {
      this.loadpage(this.rukumaininfo.nextPage, this.rukumaininfo.pageSize);
    },
    handleSizeChange(val) {
      this.loading = true;
      this.loadpage(this.rukumaininfo.pageNum, val);
    },
    handleCurrentChange(val) {
      this.loading = true;
      this.loadpage(val, this.rukumaininfo.pageSize);
    },
    //模糊搜索
    querylike() {
      let _temp2 = this;
      // alert(_temp2.querytjinfo.danhao)
      // alert(_temp2.querytjinfo.riqi)
      //alert(_temp2.querytjinfo.danjustate)
      if (_temp2.querytjinfo.danhao == "") {
        _temp2.querytjinfo.danhao = " ";
      }
      if (_temp2.querytjinfo.riqi == "") {
        _temp2.querytjinfo.riqi = " ";
      }
      if (_temp2.querytjinfo.danjustate == "") {
        _temp2.querytjinfo.danjustate = " ";
      }
      _temp2.$ajax
        .get(
          `api/rukumain/querymainlike/${_temp2.querytjinfo.danhao}/${_temp2.querytjinfo.riqi}/${_temp2.querytjinfo.danjustate}/1/2`
        )
        .then(resp => {
          _temp2.rukumaininfo = resp.data;
        })
        .catch(e => {
          alert(e);
        });
    },
    //主表进详表
    get(danhao) {
      this.$store.commit("addTab", {
        title: "入库详细",
        name: "purchaseReceiptDetail"
      });
      this.$router.replace(`/procurement/menu2/menu2-4/detail/${danhao}`);
    },
    //主详删除
    deldanhao(danhao) {
      if (confirm("是否删除此条入库单？") == true) {
        alert(danhao);
        this.$ajax
          .delete(`api/rukumain/delmain/${danhao}`)
          .then(resp => {
            if (resp.data.code == "200") {
              alert("删除成功！");
            }
          })
          .catch(e => {
            alert(e);
          });
      }
    }
  },
  mounted() {
    this.loadpage(1, 2);
  },
  watch: {
    $route(to, from) {
      this.loadpage(1, 2);
    }
  }
};
</script>
<style  scoped>
</style>
