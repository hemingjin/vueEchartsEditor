import echarts from 'echarts'
import { getLinearGradientColor } from '@/utils/chart'
import titleOption from '@/components/chartOptions/title.vue'
import xAxisOption from '@/components/chartOptions/xAxis.vue'
import yAxisOption from '@/components/chartOptions/yAxis.vue'
import legendOption from '@/components/chartOptions/legend.vue'
import gridOption from '@/components/chartOptions/grid.vue'

export default {
  components: {
    titleOption,
    xAxisOption,
    yAxisOption,
    legendOption,
    gridOption
  },
  data() {
    return {
      chart: null,
      activeNames: [],
      // 以下为图表各配置项
      color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
      backgroundColor: '#fff',
      title: null,
      grid: null,
      xAxis: null,
      xAxisData: [1,2,3,4,5,6,7,8,9,10],
      legend: null,
      yAxis: null,
      tooltip: {

      },
      series: [{
        name: 1,
        type: 'bar',
        data: [222, 333, 444, 342, 456, 442, 556, 532, 325, 360],
        animationDuration: 2500,
        barWidth: 20,
        showBackground: false, 
        itemStyle: {
          color: '#e74c3c',
          borderColor: '#e74c3c',
          borderWidth: 0,
          borderType: 'solid',
          barBorderRadius: 0,
          shadowBlur: 0,
          shadowColor: '#333',
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      },],

      linearColors: ['#e74c3c', '#007fff']
    }
  },
  computed: {
    chartOptions() {
      return {
        color: this.color,
        backgroundColor: this.backgroundColor,
        title: this.title,
        grid: this.grid,
        legend: this.legend,
        xAxis: this.xAxis,
        yAxis: this.yAxis,
        tooltip: this.tooltip,
        series: this.series
      }
    }
  },
  watch: { 
    linearColors(to) {
      this.series.filter(item => {
        item.itemStyle.color = getLinearGradientColor(to)
      })
    },
    chartOptions: {
      handler(to) {
        this.renderChart(to)
      },
      deep: true, // 深度监听数据变化
    }
  },
  mounted() {
    this.series.filter(item => {
      this.$set(item, 'isLinear', false)
      // this.$set(item, 'linearColors', ['#e74c3c', '#007fff'])
    })
    this.renderChart(this.chartOptions)
  },
  methods: {
    renderChart(options) {
      this.chart = echarts.init(document.getElementById('chart2'));
      this.chart.setOption(options)
    },
    changeTitleOption(data) {
      this.title = data
    },
    changeGridOption(data) {
      this.grid = data
    },
    changeLegendOption(data) {
      this.legend = data
    },
    changeXAxisOption(data) {
      this.xAxis = data
    },
    changeYAxisOption(data) {
      this.yAxis = data
    },
    // 重置图表配置项
    resetChartOptions() {
      this.chart.clear(); // 清空图表实例
      Object.assign(this.$data, this.$options.data()); // 重置data数据
      this.renderChart(this.chartOptions);
    }, 
    // 切换渐变状态
    changeLinearStatus(isLinear, index) { 
      if(isLinear) {
        let colors = this.linearColors;
        this.series[index].itemStyle.color = getLinearGradientColor(colors)
      } else {  
        this.series[index].itemStyle.color = '#e74c3c';
      }
    },
    // 添加数据项
    addSeriesItem() {
      let len = this.series[0].data.length;
      let data = [];
      for (let i = 0; i < len; i++) {
        let randomNumber = Math.floor(Math.random() * 1000)
        data.push(randomNumber)
      }
      // let randomColor = '#' + Math.random().toString(16).substr(2, 6).toUpperCase(); // 随机颜色
      let newSeries = {...this.series[0], name: this.series.length + 1 }
      this.series.push(newSeries)
    }
  }
}