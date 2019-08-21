<template>
<div>
    <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="客户编号">
            <el-input v-model="form.name" placeholder="客户编号"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">查询</el-button>
            <el-button type="primary">取回</el-button>
        </el-form-item>
    </el-form>
    <el-table :data="gridData">
        <el-table-column property="No" label="客户编号"></el-table-column>
        <el-table-column property="name" label="客户全称"></el-table-column>
        <el-table-column property="address" label="账款归属"></el-table-column>
        <el-table-column property="address" label="类别"></el-table-column>
        <el-table-column property="address" label="(类别名称)"></el-table-column>
        <el-table-column property="address" label="地区"></el-table-column>
        <el-table-column property="address" label="(地区名称)"></el-table-column>
        <el-table-column property="address" label="币码"></el-table-column>
        <el-table-column property="address" label="(币别名称)"></el-table-column>
        <el-table-column property="address" label="(规定汇率)"></el-table-column>
        <el-table-column property="address" label="(币别简称)"></el-table-column>
        <el-table-column property="address" label="外商"></el-table-column>
        <el-table-column property="address" label="客户简称"></el-table-column>
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
