<!--盘点单 -->
<template>
  <div>
    <el-row>
      <el-col :span="6" :offset="3">
        <div class="grid-content bg-purple-dark">
          <el-form label-width="80px">
            <el-form-item label="盘点仓库">
              <el-input></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>

      <el-col :span="6" :offset="2">
        <el-form>
          <el-form-item label="单据日期" style=" margin-left: 14px;">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" style="width: 186%;"></el-date-picker>
            </el-col>
          </el-form-item>
        </el-form>
      </el-col>

      <el-col :span="6" :offset="3">
        <div class="grid-content bg-purple-dark">
          <el-form label-width="80px">
            <el-form-item label="增值科目">
              <el-input></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>

      <el-col :span="6" :offset="2">
        <div class="grid-content bg-purple-dark">
          <el-form label-width="80px">
            <el-form-item label="单据号码">
              <el-input></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>

      <el-col :span="6" :offset="3">
        <div class="grid-content bg-purple-dark">
          <el-form label-width="80px">
            <el-form-item label="减值科目">
              <el-input></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>

      <el-col :span="6" :offset="2">
        <div class="grid-content bg-purple-dark">
          <el-form label-width="80px">
            <el-form-item label="凭证编号">
              <el-input></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="6" :offset="4">
        <el-form>
          <el-form-item>
            <el-checkbox label="帐面数量为零载入" name="type"></el-checkbox>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-col :span="14" :offset="3">
      <el-divider content-position="right"></el-divider>
    </el-col>

    <el-row>
      <el-col :span="14" :offset="3">
        <div class="grid-content bg-purple">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="内容" name="first">
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="栏号" width="180"></el-table-column>
                <el-table-column prop="name" label="物料编号" width="180"></el-table-column>
                <el-table-column prop="address" label="物料名称"></el-table-column>
                <el-table-column prop="address" label="规格型号"></el-table-column>
                <el-table-column prop="address" label="单位"></el-table-column>
                <el-table-column prop="address" label="账面数量"></el-table-column>
                <el-table-column prop="address" label="盘点数量"></el-table-column>
                <el-table-column prop="address" label="盈亏数量"></el-table-column>
                <el-table-column prop="address" label="单价"></el-table-column>
                <el-table-column prop="address" label="盈亏金额"></el-table-column>
                <el-table-column prop="address" label="批号"></el-table-column>
                <el-table-column prop="address" label="原因"></el-table-column>
              </el-table>
              <label>合计：</label>
            </el-tab-pane>
            <el-tab-pane label="备注" name="second">
              <el-col :span="10" :offset="2">
                <el-form>
                  <el-form-item label="自定义栏一">
                    <el-select placeholder="请选择活动区域">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </el-col>
              <el-col :span="10" :offset="2">
                <el-form>
                  <el-form-item label="自定义栏二">
                    <el-select placeholder="请选择活动区域">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </el-col>
              <el-col :span="22" :offset="2">
                <el-form>
                  <el-form-item label="备注">
                    <el-input type="textarea"></el-input>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>

    <el-col :span="14" :offset="3">
      <el-divider content-position="right"></el-divider>
    </el-col>

    <el-row>
      <el-col :span="6" :offset="3">
        <div class="grid-content bg-purple-dark">
          <el-form label-width="80px">
            <el-form-item label="盘点人员">
              <el-input></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>

      <el-col :span="6" :offset="3">
        <div class="grid-content bg-purple-dark">
          <el-form label-width="80px">
            <el-form-item label="制单人员">
              <el-input></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="6" :offset="3">
        <div class="grid-content bg-purple-dark">
          <el-form label-width="80px">
            <el-form-item label="所属部门">
              <el-input></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="6" :offset="3">
        <div class="grid-content bg-purple-dark">
          <el-form label-width="80px">
            <el-form-item label="复核人员">
              <el-input></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="6" :offset="3">
        <el-button type="primary">载入盘点物料</el-button>
        <el-button type="success">批号设定</el-button>
      </el-col>
    </el-row>
  </div>
</template>