<template>
<div>
    <el-row>
        <el-col :span="20">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="日期区间">
                    <el-col :span="20">
                        <el-date-picker align="center" v-model="form.date2" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                        </el-date-picker>
                    </el-col>
                    <el-col class="line" :span="4">
                        <el-button type="primary">载入资料</el-button>
                    </el-col>
                </el-form-item>
                <el-form-item label="单据区间">
                    <el-col :span="9">
                        <el-input @click.native="dialogDocumentIntervalVisible1 = true" placeholder=""></el-input>
                    </el-col>
                    <el-col class="line" :span="2">To</el-col>
                    <el-col :span="9">
                        <el-input @click.native="dialogDocumentIntervalVisible2 = true" placeholder=""></el-input>
                    </el-col>
                    <el-col class="line" :span="4">
                        <el-button @click="dialogDocumentIntervalVisible2 = true">
                            <el-checkbox></el-checkbox>多选
                        </el-button>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">光标行以下全转</el-button>
                    <el-button type="primary">光标行以下清零</el-button>
                    <!-- <el-button type="primary">显示字段设置</el-button> -->
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="4">
            <el-button type="primary">取回</el-button><br><br>
            <el-button>取消</el-button>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <el-table :data="gridData">
                <el-table-column property="No" label="转单数量" width="200"></el-table-column>
                <el-table-column property="No" label="(单据号码)" width="200"></el-table-column>
                <el-table-column property="No" label="(单据日期)" width="200"></el-table-column>
                <el-table-column property="No" label="(物料编号)" width="200"></el-table-column>
                <el-table-column property="No" label="(物料名称)" width="200"></el-table-column>
                <el-table-column property="No" label="(基本单位)" width="200"></el-table-column>
                <el-table-column property="No" label="(数量)" width="200"></el-table-column>
                <el-table-column property="No" label="(外转数量)" width="200"></el-table-column>
            </el-table>
        </el-col>
    </el-row>
    <el-dialog title="单选-销售报价单" append-to-body :visible.sync="dialogDocumentIntervalVisible1">
        <DocumentInterval></DocumentInterval>
    </el-dialog>
    <el-dialog title="单选-销售报价单" append-to-body :visible.sync="dialogDocumentIntervalVisible2">
        <DocumentInterval></DocumentInterval>
    </el-dialog>
    <el-dialog title="多选-销售报价单" append-to-body :visible.sync="dialogDocumentIntervalVisible2">
        <DocumentInterval></DocumentInterval>
    </el-dialog>
</div>
</template>

<script>
import DocumentInterval from '@/components/dhy/DocumentInterval.vue'
export default {
    components: {
        DocumentInterval,
    },
    data() {
        return {
            dialogDocumentIntervalVisible1: false,
            dialogDocumentIntervalVisible2: false,
            dialogDocumentIntervalVisible3: false,
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
