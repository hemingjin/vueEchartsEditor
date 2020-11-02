<template>
  <el-collapse-item title="tooltip-提示框配置" name="6">
    <el-form-item label="显示隐藏">
      <el-switch v-model="tooltip.show"></el-switch>
    </el-form-item>
    <el-form-item label="类型">
      <el-select v-model="tooltip.trigger">
        <el-option label="axis" value="axis"></el-option>
        <el-option label="item" value="item"></el-option>
        <el-option label="none" value="none"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="内边距"> 
      <el-input-number v-for="(item, index) in tooltip.padding" :key="index" v-model="tooltip.padding[index]"></el-input-number>
    </el-form-item>
    <el-form-item label="背景色">
      <el-color-picker v-model="tooltip.backgroundColor" show-alpha></el-color-picker>
    </el-form-item>
    <el-form-item label="边框颜色">
      <el-color-picker v-model="tooltip.borderColor"></el-color-picker>
    </el-form-item>
    <el-form-item label="边框宽度">
      <el-input-number v-model="tooltip.borderWidth"></el-input-number>
    </el-form-item> 
  </el-collapse-item>
</template>
<script>
export default {
  data() {
    return {
      tooltip: {
        show: true,
        trigger: 'axis',  //axis, item, none
        padding: [5, 10, 5, 10], // 上右下左
        backgroundColor: "rgba(50,50,50,0.7)",
        borderColor: "#333",
        borderWidth: 0
      }
    };
  },
  watch: {
    tooltip: {
      handler(to) {
        this.$emit("change", to);
      },
      deep: true,
      immediate: true
    }
  },
};
</script>