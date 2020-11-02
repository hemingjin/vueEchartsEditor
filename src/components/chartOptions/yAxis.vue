<template>
  <el-collapse-item title="yAxis-y轴配置" name="5">
    <el-form-item label="轴线显隐">
      <el-switch v-model="yAxis.axisLine.show"></el-switch>
    </el-form-item>
    <el-form-item label="轴线颜色">
      <el-color-picker :disabled="!yAxis.axisLine.show" v-model="yAxis.axisLine.lineStyle.color"></el-color-picker>
    </el-form-item>
    <el-form-item label="轴线宽度">
      <el-input-number :disabled="!yAxis.axisLine.show" v-model="yAxis.axisLine.lineStyle.width"></el-input-number>
    </el-form-item>
    <el-form-item label="轴线风格">
      <el-select :disabled="!yAxis.axisLine.show" v-model="yAxis.axisLine.lineStyle.type">
        <el-option label="solid" value="solid"></el-option>
        <el-option label="dashed" value="dashed"></el-option>
        <el-option label="dotted" value="dotted"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="分割线颜色">
      <el-color-picker v-model="yAxis.splitLine.lineStyle.color"></el-color-picker>
    </el-form-item>
    <el-form-item label="分割线宽度">
      <el-input-number v-model="yAxis.splitLine.lineStyle.width"></el-input-number>
    </el-form-item>
  </el-collapse-item>
</template>
<script>
export default {
  data() {
    return {
      yAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: "#2a3b70",
            width: 1,
            type: "solid"
          }
        },

        axisLabel: {
          margin: 10,
          color: "#7393ff"
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: "#2a3b70",
            width: 1
          }
        }
      }
    };
  },
  watch: {
    yAxis: {
      handler(to) {
        this.$emit("change", to);
      },
      deep: true,
      immediate: true
    }
  }
};
</script>