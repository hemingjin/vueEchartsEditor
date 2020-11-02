<template>
  <el-container>
    <el-header class="header">
      <div class="title">eCharts可视化图表编辑器</div>
    </el-header>
    <el-container> 
      <el-aside width="auto">
        <ul class="menu"> 
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
      <el-main style="padding: 0">
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
      
    }
  }
}
</script>
<style lang="less" scoped>
@import './index.less';
</style>