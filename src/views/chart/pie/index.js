import echarts from 'echarts' 
import titleOption from '@/components/chartOptions/title.vue' 
import legendOption from '@/components/chartOptions/legend.vue'
import gridOption from '@/components/chartOptions/grid.vue'
import tooltipOption from '@/components/chartOptions/tooltip.vue'

export default {
  components: {
    titleOption, 
    legendOption,
    gridOption,
    tooltipOption
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
      legend: null, 
      tooltip: null,
      series: [{
        type: "pie",
        data: [200, 300, 400],
        radius: [43, 66],
        right: 125,
        top: 70,
        labelLine: {
          show: false
        },
        label: {
          show: false
        },
        tooltip: {}
      }], 
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
        tooltip: this.tooltip,
        series: this.series
      }
    }
  },
  watch: { 
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
    })
    this.renderChart(this.chartOptions)
  },
  methods: {
    renderChart(options) {
      this.chart = echarts.init(document.getElementById('chart3'));
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
    changeTooltipOption(data) {
      this.tooltip = data;
    },
    // 重置图表配置项
    resetChartOptions() {
      this.chart.clear(); // 清空图表实例
      Object.assign(this.$data, this.$options.data()); // 重置data数据
      this.renderChart(this.chartOptions);
    }, 
  }
}