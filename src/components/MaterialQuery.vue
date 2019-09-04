<template>
<div>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
   >
   
      <el-table-column
      label="选择"
      width="120">
        <template slot-scope="scope">
          <el-checkbox :checked=false  @change="bg(this,scope.row)"></el-checkbox>
        </template>
      </el-table-column>
  
    <el-table-column prop="Matid" label="物料编号"  width="120"></el-table-column>
    <el-table-column prop="Matname" label="物料名称"  width="120"></el-table-column>
    <el-table-column prop="Matspec" label="物料型号"  width="120"></el-table-column>
    <el-table-column prop="Matunit" label="单位"  width="120"></el-table-column>
    <el-table-column prop="Matstandardprice" label="单价"  width="120"></el-table-column>
    
  </el-table>
  <el-button @click="determine">确定</el-button>
</div>
</template>

<script>
import { constants } from 'crypto';
  export default {
    data() {
      return {
        show:false,  
        tableData: [
          {
            Matid:"1001",
            Matname:"电脑cpu",
            Matspec:"accp1.0",
            Matunit:"个",
            Matstandardprice:1500,
          },
          {
            Matid:"1002",
            Matname:"苹果",
            MatSpec:"富士山",
            Matunit:"箱",
            Matstandardprice:150
          },
          {
            Matid:"1003",
            Matname:"飞机",
            MatSpec:"ax.10",
            Matunit:"个",
            Matstandardprice:188888888
          }
        ],
        multipleSelection: []
      }
    },

    methods: {
        determine(){
            this.$emit('getMaterials', this.multipleSelection);
        },
        bg(value,row){
          this.multipleSelection.push(row)
        }
    }
    
  }
</script>