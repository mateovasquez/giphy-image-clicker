<template>
  <div>
    <h1>Coupons statistics</h1>
    <section class="table-container">
      <AnalysisTable/>
    </section>
    <h1>Charts</h1>
    <section class="charts-container">
      <div>
        <CouponCountPieChart
          v-if="globalAnalysis?.data"
          :coupons-data="globalAnalysis?.data?.couponsCount"
        />
      </div>
      <div>
        <DiscountOffBarChart
          v-if="globalAnalysis?.data"
          :percentage-data="globalAnalysis?.data?.percentOff"
          :dollar-data="globalAnalysis?.data?.dollarOff"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useCouponsStore } from '../stores/coupons_analyzer.js'

import AnalysisTable from '../components/molecules/AnalysisTable.vue';
import CouponCountPieChart from '../components/molecules/CouponCountPieChart.vue';
import DiscountOffBarChart from '../components/molecules/DiscountOffBarChart.vue';

export default {
  name: 'CouponsAnalyzer',
  components: {
    AnalysisTable,
    DiscountOffBarChart,
    CouponCountPieChart,
  },
  computed: {
    ...mapState(useCouponsStore, ['globalAnalysis'])
  },
  methods: {
    ...mapActions(
      useCouponsStore,
      ['fetchCoupons',]
    ),
  },
  mounted() {
    this.fetchCoupons()
  }
}
</script>

<style lang="scss" scoped>
.table-container {
  width: 100%;
  height: 70vh;
  overflow: scroll;
  margin: 26px 0;
}
.charts-container {
  width: 100%;
  margin-top: 26px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 400px;
  div {
    height: 100%;
    &:first-child {
      width: 40%;
    }
    &:last-child {
      width: 60%;
    }
  }
}
</style>