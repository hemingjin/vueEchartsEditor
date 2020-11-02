<template>
  <el-container>
    <el-header class="header" style="height: 40px" ref="header">
      <div class="title">eCharts可视化图表编辑器</div>
    </el-header>
    <el-container> 
      <el-aside width="auto">
        <ul class="menu" :style="{'height': editorMainHeight + 'px'}"> 
          <router-link tag="li" class="menu_item" to="/chart/line" active-class="active"> 
            <chart-menu-icon :icon-index="1"></chart-menu-icon>
          </router-link>
          <router-link tag="li" class="menu_item" to="/chart/bar" active-class="active">
            <chart-menu-icon :icon-index="2"></chart-menu-icon>
          </router-link>
          <router-link tag="li" class="menu_item" to="/chart/pie" active-class="active">
            <chart-menu-icon :icon-index="5"></chart-menu-icon>
          </router-link>
        </ul>
      </el-aside>
      <el-main class="editor_main" :style="{'height': editorMainHeight + 'px'}">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import chartMenuIcon from '@/components/chartMenuIcon'
export default {
  components: {
    chartMenuIcon
  },
  data() {
    return {
      editorMainHeight: 0
    }
  }, 
  mounted() { 
    this.editorMainHeight = window.innerHeight - this.$refs.header.$el.offsetHeight
  }
}
</script>
<style lang="less" scoped>
@import './index.less';
</style>