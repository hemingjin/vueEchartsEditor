<template>
  <el-collapse-item title="xAxis-x轴配置" name="4">
    <el-form-item label="数据"> 
      {{xAxisData}}
    </el-form-item>
    <el-form-item label="轴线显隐">
      <el-switch v-model="xAxis.axisLine.show"></el-switch>
    </el-form-item>
    <el-form-item label="轴线颜色">
      <el-color-picker :disabled="!xAxis.axisLine.show" v-model="xAxis.axisLine.lineStyle.color"></el-color-picker>
    </el-form-item>
    <el-form-item label="轴线宽度">
      <el-input-number :disabled="!xAxis.axisLine.show" v-model="xAxis.axisLine.lineStyle.width"></el-input-number>
    </el-form-item>
    <el-form-item label="轴线风格">
      <el-select :disabled="!xAxis.axisLine.show" v-model="xAxis.axisLine.lineStyle.type">
        <el-option label="solid" value="solid"></el-option>
        <el-option label="dashed" value="dashed"></el-option>
        <el-option label="dotted" value="dotted"></el-option>
      </el-select>
    </el-form-item>
  </el-collapse-item>
</template>
<script>
export default {
  name: 'xAxisOption',
  props: {
    xAxisData: Array
  },
  data() {
    return {
      xAxis: {
        data: [],
        show: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#333',
            width: 1,
            type: 'solid',
          },
          axisLabel: {
            show: true,
            inside: false,
            margin: 8,
            fontStyle: 'normal',
            fontWeight: 'normal', 
            fontSize: 12,
          }
        }
      },
    };
  },
  watch: {
    xAxis: {
      handler(to) {
        this.$emit("change", to);
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
    this.xAxis.data = this.xAxisData
  }
};
</script>