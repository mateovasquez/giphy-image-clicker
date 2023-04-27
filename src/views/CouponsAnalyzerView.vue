<template>
  <div>
    <h1>Coupons statistics</h1>
    <section class="container">
      
    </section>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useCouponsStore } from '../stores/coupons_analyzer.js'

export default {
  name: 'CouponsAnalyzer',
  components: {},
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
}
</style>