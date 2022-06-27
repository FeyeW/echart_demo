<template>
  <!-- 定义一个柱形图的echart容器 -->
  <div ref="myChart" style="width: 50%; height: 520px"></div>
</template>

<script>
export default {
  data() {
    return {
      //柱形图、线型图案例可在官网获取相应数据
      option: {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        /* 图例组件 */
        legend: {
          data: ["销量"],
        },
        /* X轴数据 */
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        /* Y轴数据 */
        yAxis: {},
        /* 系列列表。每个系列通过 type 决定自己的图表类型 */
        series: [
          {
            name: "销量",
            type: "bar", //类型 bar：柱形图 、line、线型图
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
      //饼图案例
      option1: {
        legend: {
          top: "bottom",
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: [50, 250],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 40, name: "rose 1" },
              { value: 38, name: "rose 2" },
              { value: 32, name: "rose 3" },
              { value: 30, name: "rose 4" },
              { value: 28, name: "rose 5" },
              { value: 26, name: "rose 6" },
              { value: 22, name: "rose 7" },
              { value: 18, name: "rose 8" },
            ],
          },
        ],
      },
    };
  },
  methods: {
    setMyEchart() {
      const myChart = this.$refs.myChart; //通过ref获取到DOM节点
      if (myChart) {
        const thisChart = this.$echarts.init(myChart); //利用原型调取Echarts的初始化方法
        const option = this.option1; //{}内写需要图表的各种配置，可以在官方案例中修改完毕后复制过来
        thisChart.setOption(option); //将编写好的配置项挂载到Echarts上
        window.addEventListener("resize", function () {
          thisChart.resize(); //页面大小变化后Echarts也更改大小
        });
      }
    },
  },
  mounted() {
    this.setMyEchart(); //页面挂载完成后执行
  },
};
</script>

<style>
</style>