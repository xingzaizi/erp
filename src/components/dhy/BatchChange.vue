<template>
<div>
    <el-form :model="form" class="demo-form-inline">
        <el-form-item label="特殊资源">
            <el-radio-group v-model="form.resource">
                <el-radio label="加"></el-radio>
                <el-radio label="减"></el-radio>
                <el-radio label="乘"></el-radio>
                <el-radio label="出"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="运算符">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">确定</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
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
