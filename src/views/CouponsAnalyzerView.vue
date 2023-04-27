<template>
  <div>
    <h1>Coupons statistics</h1>
    <section class="container">
      <AnalysisTable/>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useCouponsStore } from '../stores/coupons_analyzer.js'

import AnalysisTable from '../components/molecules/AnalysisTable.vue';

export default {
  name: 'CouponsAnalyzer',
  components: { AnalysisTable },
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