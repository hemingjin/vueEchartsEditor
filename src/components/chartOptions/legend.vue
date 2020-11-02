<template>
  <el-collapse-item title="legend-图例配置" name="2">
    <el-form-item label="图例显隐">
      <el-switch v-model="legend.show"></el-switch>
    </el-form-item>
    <el-form-item label="图例类型">
      <el-select v-model="legend.icon" :disabled="!legend.show">
        <el-option v-for="(item, index) in legendIcons" :key="index" :label="item" :value="item"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="标记宽度">
      <el-input-number :disabled="!legend.show" v-model="legend.itemWidth"></el-input-number>
    </el-form-item>
    <el-form-item label="标记高度">
      <el-input-number :disabled="!legend.show" v-model="legend.itemHeight"></el-input-number>
    </el-form-item>
  </el-collapse-item>
</template>
<script>
export default {
  data() {
    return {
      legendIcons: ['circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'],
      legend: {
        show: true,
        icon: 'circle',
        itemWidth: 20,
        itemHeight: 5,
      }, 
    };
  },
  watch: {
    legend: {
      handler(to) {
        this.$emit("change", to);
      },
      deep: true,
      immediate: true
    }
  }
};
</script>