<template>
<div>
    <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="母件">
            <el-input v-model="form.name" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="数量">
            <el-input v-model="form.name" placeholder=""></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">子件展开</el-button>
        </el-form-item>
    </el-form>
    <el-table :data="gridData">
        <el-table-column property="No" label="(栏号)" width="200"></el-table-column>
        <el-table-column property="name" label="物料编号" width="200"></el-table-column>
        <el-table-column property="No" label="(物料名称)" width="200"></el-table-column>
        <el-table-column property="No" label="(规格型号)" width="200"></el-table-column>
        <el-table-column property="No" label="(仓库编号)" width="200"></el-table-column>
        <el-table-column property="No" label="(仓库编号)" width="200"></el-table-column>
        <el-table-column property="No" label="数量" width="200"></el-table-column>
        <el-table-column property="No" label="(基本单位)" width="200"></el-table-column>
        <el-table-column property="No" label="(批号)" width="200"></el-table-column>
        <el-table-column property="No" label="批号" width="200"></el-table-column>
        <el-table-column property="No" label="(出厂日期)" width="200"></el-table-column>
        <el-table-column property="No" label="(有效日期)" width="200"></el-table-column>
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
