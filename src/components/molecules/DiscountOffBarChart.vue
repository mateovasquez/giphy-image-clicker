<template>
  <canvas id="bar-chart" height="400" width="100%"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'DiscountOffBarChart',
  props: {
    'percentage-data': {
      type: Object,
      default: () => {},
    },
    'dollar-data': {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    updateChart() {
      const labels = ['Count', 'Minimum', 'Maximum', 'Average'];
      const percentageOffData = []
      percentageOffData.push(
        this.percentageData.count,
        this.percentageData.min,
        this.percentageData.max,
        this.percentageData.avg,
      )
      const dollarOffData = []
      dollarOffData.push(
        this.dollarData.count,
        this.dollarData.min,
        this.dollarData.max,
        this.dollarData.avg,
      )

      const chartData = {
        labels: labels,
        datasets: [
          {
            label: 'Percentage Off (%)',
            data: percentageOffData,
            backgroundColor: ['#33a06f',],
            barPercentage: 1.0,
          },
          {
            label: 'Dollar Off ($)',
            data: dollarOffData,
            backgroundColor: ['#3468a3'],
            barPercentage: 1.0,
          },
        ]
      };
      const chartOptions = {
        indexAxis: 'x',
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Global Percentage Off / Dollar Off Coupons Comparison'
          }
        }
      }
      const ctx = document.getElementById('bar-chart').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: chartOptions,
      });
      myChart.update();
    }
  },
  mounted() {
    this.updateChart();
  },
};
</script>
