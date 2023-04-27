<template>
  <div>
    <h1>Coupons statistics</h1>
    <section class="container">
      <AnalysisTable/>
    </section>
    <h1>Charts</h1>
    <section class="container">
      <CouponCountPieChart
        v-if="globalAnalysis?.data"
        :coupons-data="globalAnalysis?.data?.couponsCount"
      />
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useCouponsStore } from '../stores/coupons_analyzer.js'

import AnalysisTable from '../components/molecules/AnalysisTable.vue';
import CouponCountPieChart from '../components/molecules/CouponCountPieChart.vue';

export default {
  name: 'CouponsAnalyzer',
  components: {
    AnalysisTable,
    CouponCountPieChart
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
.container {
  width: 100%;
  height: 70vh;
  overflow: scroll;
  margin-top: 26px;
}
</style>