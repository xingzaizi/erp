<template>
<div>
    <el-row>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item>
                <el-col :span="4">
                    <span style="text-align:center">单据编号：</span>
                </el-col>
                <el-col :span="8">
                    <el-input placeholder=""></el-input>
                </el-col>
                <el-col :span="4">
                    <span style="text-align:center">币别：</span>
                </el-col>
                <el-col :span="8">
                    <el-input placeholder=""></el-input>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-col :span="4">
                    <span style="text-align:center">客户名称：</span>
                </el-col>
                <el-col :span="8">
                    <el-input placeholder=""></el-input>
                </el-col>
            </el-form-item>
        </el-form>
    </el-row>
    <el-row>
        <el-col :span="24">
            <el-table :data="gridData">
                <el-table-column property="No" label="栏号" width="200"></el-table-column>
                <el-table-column property="No" label="(物料编号)" width="200"></el-table-column>
                <el-table-column property="No" label="(物料名称)" width="200"></el-table-column>
                <el-table-column property="No" label="(规格型号)" width="200"></el-table-column>
                <el-table-column property="No" label="(仓库编号)" width="200"></el-table-column>
                <el-table-column property="No" label="(仓库简称)" width="200"></el-table-column>
                <el-table-column property="No" label="(金额)" width="200"></el-table-column>
                <el-table-column property="No" label="(实际成本)" width="200"></el-table-column>
                <el-table-column property="No" label="(实际毛利)" width="200"></el-table-column>
                <el-table-column property="No" label="实际成本率(%)" width="200"></el-table-column>
                <el-table-column property="No" label="(标准成本)" width="200"></el-table-column>
                <el-table-column property="No" label="标准成本率" width="200"></el-table-column>
            </el-table>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {
    data() {
        return {
            gridData: [],
            form: {
                date1: '',
                date2: ''
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>
