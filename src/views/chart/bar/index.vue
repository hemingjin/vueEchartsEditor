<template>
  <el-main class="editor_main">
    <el-row :gutter="20">
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

              <el-collapse-item title="tooltip-提示框配置" name="6"></el-collapse-item>
              <el-collapse-item title="数据项配置" name="7">
                <el-button type="primary" size="mini" @click="addSeriesItem">添加数据项</el-button>
                <div class="series_data_item" v-for="(item, index) in series" :key="index"> 
                  <el-form-item label="动画时间">
                    <el-input-number v-model="item.animationDuration" :step="100"></el-input-number>
                  </el-form-item> 
                  <el-form-item label="柱条背景显示"> 
                    <el-switch v-model="item.showBackground"></el-switch>
                  </el-form-item>
                  <el-form-item label="柱条宽度">
                    <el-input-number v-model="item.barWidth" :min="0"></el-input-number>
                  </el-form-item> 
                  <el-form-item label="是否渐变"> 
                    <el-switch v-model="item.isLinear" @change="changeLinearStatus(item.isLinear, index)"></el-switch>
                  </el-form-item>
                  <el-form-item label="柱条颜色" v-if="item.isLinear">   
                    <div v-for="(color, index) in linearColors" :key="index">
                      <el-color-picker v-model="linearColors[index]"></el-color-picker>
                      <i class="el-icon-error" v-if="index > 0" @click="linearColors.splice(index, 1)"></i>
                    </div> 
                    <el-button type="primary" size="mini" icon="el-icon-plus" @click="linearColors.push('#333')">添加渐变色</el-button>
                  </el-form-item>
                  <el-form-item label="柱条颜色" v-else-if="!item.isLinear"> 
                    <el-color-picker v-model="item.itemStyle.color"></el-color-picker>
                  </el-form-item>
                  <el-form-item label="柱条边框颜色"> 
                    <el-color-picker v-model="item.itemStyle.borderColor"></el-color-picker>
                  </el-form-item>
                  <el-form-item label="柱条边框宽度"> 
                    <el-input-number v-model="item.itemStyle.borderWidth" :step="0.5"></el-input-number>
                  </el-form-item> 
                  <el-form-item label="柱条边框类型">  
                    <el-select  v-model="item.itemStyle.borderType">
                      <el-option label="solid" value="solid"></el-option>
                      <el-option label="dashed" value="dashed"></el-option>
                      <el-option label="dotted" value="dotted"></el-option>
                    </el-select>
                  </el-form-item> 
                  <el-form-item label="柱条圆角"> 
                    <el-input-number v-model="item.itemStyle.barBorderRadius" :step="1"></el-input-number>
                  </el-form-item> 
                  <el-form-item label="柱条阴影"> 
                    <el-input-number v-model="item.itemStyle.shadowBlur" :step="1"></el-input-number>
                  </el-form-item> 
                  <el-form-item label="柱条阴影颜色"> 
                    <el-color-picker v-model="item.itemStyle.shadowColor"></el-color-picker> 
                  </el-form-item> 
                  <el-form-item label="柱条阴影偏移X">  
                    <el-input-number v-model="item.itemStyle.shadowOffsetX" :step="1"></el-input-number>
                  </el-form-item> 
                  <el-form-item label="柱条阴影偏移Y">  
                    <el-input-number v-model="item.itemStyle.shadowOffsetY" :step="1"></el-input-number>
                  </el-form-item> 
                </div>
              </el-collapse-item>
            </el-collapse>
            
          </el-form>
        </div>
      </el-col>
      <el-col :xl="14" :lg="14" :md="14">
        <div class="chart_wrap">
          <div id="chart2" style="width: 100%; height: 100%"></div>
        </div>
      </el-col>
      <el-col :xl="5" :lg="5" :md="5">
        <div class="option_wrap"> 
          <code> 
            <vue-json-pretty 
              :data="chartOptions" >
            </vue-json-pretty>
          </code>
        </div>
      </el-col>
    </el-row>
  </el-main>
</template>
<script>
import index from "./index";
export default index;
</script> 