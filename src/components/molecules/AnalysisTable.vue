<template>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Coupon counts</th>
        <th>Percent Off discounts</th>
        <th>Dollar Off discounts</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="{title, data} in couponsAnalysis"
        :key="title"
      > 
        <!-- Title -->
        <th>{{title}}</th>
        <!-- Coupon counts -->
        <th>
          <ul>
            <li
              v-for="{type, count} in data?.couponsCount"
              :key="type"
            >
              <b>{{type}}:</b> {{count}} coupon(s)
            </li>
          </ul>
        </th>
        <!-- Percent Off discounts -->
        <th>
          <ul>
            <li><b>Count:</b> {{data?.percentOff?.count}} coupon(s)</li>
            <li><b>Minimum:</b> {{data?.percentOff?.min}} %</li>
            <li><b>Maximum:</b> {{data?.percentOff?.max}} %</li>
            <li><b>Average:</b> {{data?.percentOff?.avg}} %</li>
          </ul>
        </th>
        <!-- Dollar Off discounts -->
        <th>
          <ul>
            <li><b>Count:</b> {{data?.dollarOff?.count}} coupon(s)</li>
            <li><b>Minimum:</b> {{data?.dollarOff?.min}} $</li>
            <li><b>Maximum:</b> {{data?.dollarOff?.max}} $</li>
            <li><b>Average:</b> {{data?.dollarOff?.avg}} $</li>
          </ul>
        </th>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from 'pinia';
import { useCouponsStore } from '../../stores/coupons_analyzer.js'

export default {
  name: 'AnalysisTable',
  computed:{
    ...mapState(
      useCouponsStore,
      ['couponsAnalysis',]
    ),
  },
}
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  min-width: max-content;
  text-align: left;
  border-collapse: collapse;
  tr {
    border-bottom: 1px solid var(--color-text);
    &:last-child {
      border-bottom: none;
      border-radius: 8px;
    }
  }
  thead tr:first-child {
    border-bottom: 1px solid var(--color-text);
    background-color: var(--color-background-mute);
  }
  th {
    padding: 10px;
    border-right: 1px solid var(--color-text);
    vertical-align: text-top;
    &:last-child {
      border-right: none;
    }
    b {
      font-weight: bold;
    }
  }
}
</style>
