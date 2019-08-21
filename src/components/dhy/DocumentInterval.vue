<template>
<div>
    <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="单价号码">
            <el-input v-model="form.name" placeholder=""></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">查询</el-button>
            <el-button type="primary">取回</el-button>
        </el-form-item>
    </el-form>
    <el-table :data="gridData">
        <el-table-column property="No" label="单价号码" width="200"></el-table-column>
        <el-table-column property="name" label="单价日期" width="200"></el-table-column>
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
