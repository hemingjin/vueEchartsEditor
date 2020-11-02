<template>
  <el-row :gutter="10">
    <el-col :xl="5" :lg="5" :md="5">
      <div class="option_wrap">
        <div class="option_header">
          <el-button size="mini" type="primary" @click="resetChartOptions">重置</el-button>
        </div>
        <el-form size="mini" label-width="100px">
          <el-form-item label="背景色">
            <el-color-picker v-model="backgroundColor"></el-color-picker>
          </el-form-item>
          <el-collapse v-model="activeNames">
            <title-option @change="changeTitleOption"></title-option>

            <legend-option @change="changeLegendOption"></legend-option>

            <grid-option @change="changeGridOption"></grid-option>

            <x-axis-option @change="changeXAxisOption" :x-axis-data="xAxisData"></x-axis-option>

            <y-axis-option @change="changeYAxisOption"></y-axis-option>

            <tooltip-option @change="changeTooltipOption"></tooltip-option>

            <el-collapse-item title="数据项配置" name="7">
              <el-button type="primary" size="mini" @click="addSeriesItem">添加数据项</el-button>
              <div class="series_data_item" v-for="(item, index) in series" :key="index">
                <el-form-item label="数据">
                  <div>{{item.data}}</div>
                  <el-button-group>
                    <el-button
                      type="primary"
                      size="mini"
                      icon="el-icon-minus"
                      @click="updateDataItem(item.data)"
                    ></el-button>
                    <el-button
                      type="primary"
                      size="mini"
                      icon="el-icon-plus"
                      @click="updateDataItem(item.data, 1)"
                    ></el-button>
                  </el-button-group>
                </el-form-item>
                <el-form-item label="平滑曲线">
                  <el-switch v-model="item.smooth"></el-switch>
                </el-form-item>
                <el-form-item label="标记显隐">
                  <el-switch v-model="item.showSymbol"></el-switch>
                </el-form-item>
                <el-form-item label="动画时间">
                  <el-input-number v-model="item.animationDuration" :step="100"></el-input-number>
                </el-form-item>
                <el-form-item label="线条宽度">
                  <el-input-number v-model="item.lineStyle.width" :max="10" :min="1"></el-input-number>
                </el-form-item>
                <el-form-item label="是否渐变">
                  <el-switch
                    v-model="item.isLinear"
                    @change="changeLinearStatus(item.isLinear, index)"
                  ></el-switch>
                </el-form-item>
                <el-form-item label="线条颜色" v-if="item.isLinear">
                  <div v-for="(color, index) in linearColors" :key="index">
                    <el-color-picker v-model="linearColors[index]"></el-color-picker>
                    <i
                      class="el-icon-error"
                      v-if="index > 0"
                      @click="linearColors.splice(index, 1)"
                    ></i>
                  </div>
                  <el-button
                    type="primary"
                    size="mini"
                    icon="el-icon-plus"
                    @click="linearColors.push('#333')"
                  >添加渐变色</el-button>
                </el-form-item>
                <el-form-item label="线条颜色" v-else-if="!item.isLinear">
                  <el-color-picker v-model="item.lineStyle.color"></el-color-picker>
                </el-form-item>
                <el-form-item label="拐点颜色">
                  <el-color-picker v-model="item.itemStyle.color"></el-color-picker>
                </el-form-item>
                <el-form-item label="拐点边框颜色">
                  <el-color-picker v-model="item.itemStyle.borderColor"></el-color-picker>
                </el-form-item>
                <el-form-item label="拐点边框宽度">
                  <el-input-number v-model="item.itemStyle.borderWidth" :step="0.5"></el-input-number>
                </el-form-item>
                <el-form-item label="区域颜色">
                  <el-color-picker v-model="item.areaStyle.color"></el-color-picker>
                </el-form-item>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-form>
      </div>
    </el-col>
    <el-col :xl="14" :lg="14" :md="14">
      <div class="chart_wrap">
        <div id="chart1" style="width: 100%; height: 100%"></div>
      </div>
    </el-col>
    <el-col :xl="5" :lg="5" :md="5">
      <div class="option_wrap">
        <code>
          <vue-json-pretty :data="chartOptions"></vue-json-pretty>
        </code>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import index from "./index";
export default index;
</script> 