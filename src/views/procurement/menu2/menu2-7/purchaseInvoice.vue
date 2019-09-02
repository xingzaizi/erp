<template>
  <!-- 采购发票 -->
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span class="el-icon-search">采购发票查询</span>
    </div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="供应商" style="margin-left: 40px">
        <el-input v-model="formInline.clientsupply" placeholder="供应商" style="width: 500px;" id="name"></el-input>
      </el-form-item>
      <el-form-item label="采购核对状态">
        <el-select v-model="formInline.checkstatus" placeholder="采购核对状态" id="hdzt" style="width: 500px;">
          <el-option label="未核对" value=0></el-option>
          <el-option label="已核对" value=1></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="单价是否含税">
        <el-select v-model="formInline.taxincluded" placeholder="单价是否含税" id="sfhs" style="width: 500px;">
          <el-option label="未税" :value=0></el-option>
          <el-option label="含税" :value=1></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="单据日期" style="margin-left: 25px">
        <el-date-picker
          id="riqi"
          type="date"
            value-format="yyyy-MM-dd"
            format="yyyy-MM-dd"
          placeholder="选择日期"
          v-model="formInline.storagedate"
          style="width:500px;"
        ></el-date-picker>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-button type="success" @click="detail">添加采购发票</el-button>
    </el-form>

    <el-table
      :data="pageInfo.list"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <el-table-column prop="clientsupply" label="供应商" sortable width="180"></el-table-column>
      <el-table-column prop="storagedate" label="单据日期" sortable width="180"></el-table-column>
      <el-table-column prop="documenttype" label="单据类型" sortable width="180"></el-table-column>
      <el-table-column prop="documentint" label="单据号码" sortable width="180"></el-table-column>
      <el-table-column prop="taxincluded" label="单价是否含税" sortable width="180"><template slot-scope="temp">{{temp.row.taxincluded | filterSex}}
</template></el-table-column>
      <el-table-column  prop="checkstatus" label="采购核对状态" sortable width="180"><template slot-scope="temp">{{temp.row.checkstatus | filterSex1}}</template></el-table-column>
     
      <el-table-column prop="address" label="操作" :formatter="formatter" >
       <template slot-scope="temp"><el-button class="el-icon-search" size="mini" @click="detail(temp.row.storageid)">查询详情</el-button>
         <el-button class="el-icon-delete" type="danger" size="mini" @click="delMain(temp.row.storageid)">删除</el-button></template> 
      </el-table-column>
    </el-table>
   <el-row>
            <el-pagination v-if="pageInfo.total!=0" :background="true" :pager-count="4" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageInfo.pageNum" :page-sizes="[3,6]" :page-size="pageInfo.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pageInfo.total">
            </el-pagination>
    </el-row>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      pageInfo: {},
      formInline: {
        clientsupply:"",
        storagedate:"",
        taxincluded:"",
        checkstatus:"",
      }
    };
  },
  filters: {
    filterSex(val) {
    return val == 0 ? '未税' : '含税';
    },
     filterSex1(val) {
    return val == 0 ? '未核对' : '已核对';
    }
  },

  methods: {
    formatter(row) {
      return row.address;
    },
    onSubmit(){
        let _this=this;
        let clientsupply=_this.formInline.clientsupply;
        let storagedate=_this.formInline.storagedate;
        let taxincluded=_this.formInline.taxincluded;
        let checkstatus=_this.formInline.checkstatus;
        if(clientsupply==""){
            clientsupply=" ";
        }if(storagedate==""){
            storagedate=" ";
        }
        if(taxincluded==""){
            taxincluded=" ";
        }
        if(checkstatus==""){
            checkstatus=" ";
        }
          _this.$ajax.get(`mainlistofpurchaseinvoices/${clientsupply}/${storagedate}/${taxincluded}/${checkstatus}`).then(resp1 => {
        _this.pageInfo = resp1.data;
        alert(resp1.data)
            }).catch(e => {
                alert(e);
            });
    },
    
    //新增采购发票

    detail(storageid) {
      this.$store.commit("addTab", {
        title: "采购发票详细",
        name: "purchaseInvoiceDetail"
      });
      this.$router.replace(`/procurement/menu2/menu2-7/detail/${storageid}`);
    },
      delMain(storageid){
          let _this = this;
          if(confirm("确定要删除吗？"))
			  	{
          _this.$ajax.delete(`mainlistofpurchaseinvoices/maindel/${storageid}`).then(resp =>{
                   if(resp.data.code=="200"){
                      alert("删除成功")
                      _this.goToPage(1,2)
                  }else if(resp.data.code=="500"){
                      alert("订单状态已审核")
                  }else{
                    alert("删除失败")
                  }
              }).catch(e => {
                alert(e);
          })

        }
      },
    
      goToPrePage() {
            this.goToPage(this.pageInfo.prePage,this.pageInfo.pageSize);
        },
        goToNextPage() {
            this.goToPage(this.pageInfo.nextPage,this.pageInfo.pageSize);
        },
         handleSizeChange(val) {
            this.loading = true;
            this.goToPage(this.pageInfo.pageNum, val);

        },
        handleCurrentChange(val) {
            this.loading = true;
            this.goToPage(val, this.pageInfo.pageSize);
        },
        goToPage(p, s) {
            let _this = this;
            //ajax
            _this.$ajax.get(`mainlistofpurchaseinvoices/${p}/${s}`).then(resp => {
				_this.pageInfo = resp.data;
            }).catch(e => {
                alert(e);
            });
        }
     
  },
   //挂载完成（可以访问DOM元素）
    mounted() {
        this.goToPage(1, 2);
    },
    watch: {
        '$route'(to,from){
             this.goToPage(1, 2);
        }
    }
};
</script>
<style scoped>
</style>