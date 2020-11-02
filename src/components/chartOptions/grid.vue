<template>
  <el-collapse-item title="grid-坐标系网格配置" name="3">
    <el-form-item label="是否显示">
      <el-switch v-model="grid.show"></el-switch>
    </el-form-item>
    <el-form-item label="背景颜色">
      <el-color-picker :disabled="!grid.show" v-model="grid.backgroundColor"></el-color-picker>
    </el-form-item>
    <el-form-item label="边框颜色">
      <el-color-picker :disabled="!grid.show" v-model="grid.borderColor"></el-color-picker>
    </el-form-item>
    <el-form-item label="边框宽度">
      <el-input-number :disabled="!grid.show" v-model="grid.borderWidth"></el-input-number>
    </el-form-item>
    <el-form-item label="top"> 
      <el-radio-group v-model="topType">
        <el-radio-button label="1" value="1">绝对值</el-radio-button>
        <el-radio-button label="2" value="2">百分比</el-radio-button>
      </el-radio-group>
      <el-slider v-if="topType == 2" v-model="grid.top" @change="handleChangePosition(grid.top, 'top')"></el-slider>
      <el-input-number v-model="grid.top" controls-position="right" @change="handleChangePosition(grid.top, 'top')" :min="0" :max="topType == 1 ? 1000 : 100"></el-input-number>
    </el-form-item>  
    <el-form-item label="right"> 
      <el-radio-group v-model="rightType">
        <el-radio-button label="1" value="1">绝对值</el-radio-button>
        <el-radio-button label="2" value="2">百分比</el-radio-button>
      </el-radio-group>
      <el-slider v-if="rightType == 2" v-model="grid.right" @change="handleChangePosition(grid.right, 'right')"></el-slider>
      <el-input-number v-model="grid.right" controls-position="right" @change="handleChangePosition(grid.right, 'right')" :min="0" :max="rightType == 1 ? 1000 : 100"></el-input-number>
    </el-form-item>  
    <el-form-item label="bottom"> 
      <el-radio-group v-model="bottomType">
        <el-radio-button label="1" value="1">绝对值</el-radio-button>
        <el-radio-button label="2" value="2">百分比</el-radio-button>
      </el-radio-group>
      <el-slider v-if="bottomType == 2" v-model="grid.bottom" @change="handleChangePosition(grid.bottom, 'bottom')"></el-slider>
      <el-input-number v-model="grid.bottom" controls-position="right" @change="handleChangePosition(grid.bottom, 'bottom')" :min="0" :max="bottomType == 1 ? 1000 : 100"></el-input-number>
    </el-form-item>  
    <el-form-item label="left"> 
      <el-radio-group v-model="leftType">
        <el-radio-button label="1" value="1">绝对值</el-radio-button>
        <el-radio-button label="2" value="2">百分比</el-radio-button>
      </el-radio-group>
      <el-slider v-if="leftType == 2" v-model="grid.left" @change="handleChangePosition(grid.left, 'left')"></el-slider>
      <el-input-number v-model="grid.left" controls-position="right" @change="handleChangePosition(grid.left, 'left')" :min="0" :max="leftType == 1 ? 1000 : 100"></el-input-number>
    </el-form-item>  
  </el-collapse-item>
</template>
<script>
export default {
  data() {
    return {
      topType: '1',
      leftType: '1',
      rightType: '1',
      bottomType: '1',
      grid: {
        show: false,
        zlevel: 0,
        z: 2,
        left: 100,
        right: 100,
        bottom: 50,
        top: 150,
        width: 'auto',
        height: 'auto',
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: 'transparent'
      }
    }
  },
  watch: {
    grid: {
      handler(to) {
        this.$emit('change', to)
      },
      immediate: true,
       deep: true
    }
  },
  methods: {  
    handleChangePosition(data, type) { 
      let key = `${type}Type`
      this.grid[type] = this[key] == 1 ? data : data + '%'
    }
  }
}
</script>