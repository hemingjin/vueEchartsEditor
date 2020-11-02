<template>
  <div class="chart_icon" :style="iconStyle"></div>
</template>
<script>
export default {
  props: {
    iconIndex: [Number, String]
  },
  computed: {
    iconStyle() {
      let y = 1 + (this.iconIndex - 1) * 32; 
      return { 'background-position': `-1px -${y}px` }
    }
  }
}
</script>
<style lang="less" scoped>
.chart_icon { 
  width: 32px;
  height: 32px;
  background-image: url(../../assets/images/chart-icon.png);
  background-size: 32px;
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 1px solid #fff; 
}
</style>