<template>
<div>
    <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="客户">
            <el-input v-model="form.name" placeholder="客户"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">资料输出</el-button>
            <el-button type="primary">取回</el-button>
        </el-form-item>
    </el-form>
    <el-table :data="gridData">
        <el-table-column property="No" label="(单别)" width="200"></el-table-column>
        <el-table-column property="No" label="(日期)" width="200"></el-table-column>
        <el-table-column property="No" label="(单号)" width="200"></el-table-column>
        <el-table-column property="No" label="(汇率)" width="200"></el-table-column>
        <el-table-column property="No" label="(物料编号)" width="200"></el-table-column>
        <el-table-column property="No" label="(规格型号)" width="200"></el-table-column>
        <el-table-column property="No" label="(型号)" width="200"></el-table-column>
        <el-table-column property="No" label="(单位)" width="200"></el-table-column>
        <el-table-column property="No" label="(数量)" width="200"></el-table-column>
        <el-table-column property="No" label="(折扣前单价)" width="200"></el-table-column>
        <el-table-column property="No" label="(折数(%))" width="200"></el-table-column>
        <el-table-column property="No" label="(单价)" width="200"></el-table-column>
        <el-table-column property="No" label="(单价是否含税)" width="200"></el-table-column>
        <el-table-column property="No" label="(金额)" width="200"></el-table-column>
        <el-table-column property="No" label="(备注)" width="200"></el-table-column>
    </el-table>
</div>
</template>

<script>
export default {
    data() {
        return {
            gridData: [],
            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '120px'
        };
    }
};
</script>

<style lang="">

</style>
