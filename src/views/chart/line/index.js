import echarts from 'echarts'
import { getLinearGradientColor } from '@/utils/chart'
import titleOption from '@/components/chartOptions/title.vue'
import xAxisOption from '@/components/chartOptions/xAxis.vue'
import yAxisOption from '@/components/chartOptions/yAxis.vue'
import legendOption from '@/components/chartOptions/legend.vue'
import gridOption from '@/components/chartOptions/grid.vue'
import tooltipOption from '@/components/chartOptions/tooltip.vue'

export default {
  components: {
    titleOption,
    xAxisOption,
    yAxisOption,
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
      xAxis: null,
      xAxisData: [1,2,3,4,5,6,7,8,9,10],
      legend: null,
      yAxis: null,
      tooltip: null,
      series: [{
        name: 1,
        type: 'line',
        data: [222, 333, 444, 342, 456, 442, 556, 532, 325, 360],
        smooth: false,
        showSymbol: true,
        animationDuration: 2500,
        lineStyle: {
          color: '#e74c3c',
          width: 2,
          shadowColor: "rgba(0, 0, 0, .3)",
          shadowBlur: 20,
          shadowOffsetY: 10,
        },
        itemStyle: {
          color: '#e74c3c',
          borderColor: '#e74c3c',
          borderWidth: 3
        },
        areaStyle: {
          color: '#ccc'
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
        item.lineStyle.color = getLinearGradientColor(to, 'right')
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
    })
    this.renderChart(this.chartOptions)
  },
  methods: {
    renderChart(options) {
      this.chart = echarts.init(document.getElementById('chart1'), {
        width: '100%',
        height: '100%'
      });
      this.chart.setOption(options)
      this.chart.resize(); 
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
    changeTooltipOption(data) {
      this.tooltip = data;
    },
    // 重置图表配置项
    resetChartOptions() {
      this.chart.clear(); // 清空图表实例
      Object.assign(this.$data, this.$options.data()); // 重置data数据
      this.renderChart(this.chartOptions);
    },

    // 切换渐变状态
    changeLinearStatus(isLinear, index) {
      if (isLinear) {
        let colors = this.linearColors;
        this.series[index].lineStyle.color = getLinearGradientColor(colors, 'right')
      } else {
        this.series[index].lineStyle.color = '#e74c3c';
      }
    },
    // 
    updateDataItem(item, type = 0) {
      if(type) {
        item.push(Math.floor(Math.random() * 1000));
        let newX = this.xAxisData[this.xAxisData.length - 1] + 1
        this.xAxisData.push(newX)
      } else {
        item.pop();
        this.xAxisData.pop();
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
      let copyData = JSON.parse(JSON.stringify(this.series[0]))
      let newSeries = { ...copyData, data, name: this.series.length + 1 }
      this.series.push(newSeries)
    }
  }
}