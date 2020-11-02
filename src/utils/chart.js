import echarts from 'echarts'

// 0, 0, 0, 1,  4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
//colorsArr, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
export function getLinearGradientColor(colors, direction = 'top') {  
  if(colors.length == 1) {
    return colors[0]
  }
  let step = parseFloat((1 / (colors.length - 1)).toFixed(2));
  let colorsArr = colors.map((item, index) => {
    let offset = index * step > 1 ? 1 : index * step
    return {
      offset,
      color: item
    }
  })
  let lastOffset = colorsArr[colorsArr.length - 1].offset;
  if(lastOffset != 1) {
    colorsArr.push({offset: 1, color: colors[colors.length - 1]})
  } 
  return new echarts.graphic.LinearGradient(
    direction === 'right' ? 1 : 0,
    direction === 'bottom' ? 1 : 0,
    direction === 'left' ? 1 : 0,
    direction === 'top' ? 1 : 0,
    colorsArr
  );
}