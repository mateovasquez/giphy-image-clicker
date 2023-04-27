<template>
  <canvas id="pie-chart" height="400" width="100%"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'CouponCountPieChart',
  props: {
    'coupons-data': {
      type: Object,
      default: () => {},
    }
  },
  methods: {
    updateChart() {
      const labels = this.couponsData.map(obj => obj.type);
      const datasetData = this.couponsData.map(obj => obj.count);

      const chartData = {
        labels: labels,
        datasets: [
          {
            label: 'Count',
            data: datasetData,
            backgroundColor: ['#823c83', '#33a06f', '#cd2d3f', '#3468a3', '#e0ad15'],
          }
        ]
      };
      const chartOptions = {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'Global Coupons Count by Discount Type'
          }
        }
      }
      const ctx = document.getElementById('pie-chart').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'pie',
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
