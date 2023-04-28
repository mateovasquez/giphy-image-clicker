import { defineStore } from 'pinia';
import _countBy from 'lodash/countBy';
import _groupBy from 'lodash/groupBy';
import _minBy from 'lodash/minBy';
import _maxBy from 'lodash/maxBy';
import _meanBy from 'lodash/meanBy';

export const useCouponsStore = defineStore('coupons', {
  state: () => ({
    allCoupons: [],
    globalAnalysis: [],
    webshopAnalysis: [],
  }),
  getters: {
    couponsWithPromotion: (state) => {
      return state.allCoupons.filter(coupon => coupon.promotion_type !== null);
    },
    couponsAnalysis: (state) => {
      const allAnalysis = [...state.webshopAnalysis];
      allAnalysis.push(state.globalAnalysis);
      return allAnalysis;
    }
  },
  actions: {
    fetchCoupons() {
      fetch('./coupons.json')
      .then((response) => response.json())
      .then((content) => {
        this.allCoupons = content.coupons;
        this.analyzeCoupons();
      });
    },
    analyzeCoupons() {
      this.getGlobalDetails();
      this.getDetailsByWebshop();
    },
    getGlobalDetails() {
      const coupons = this.couponsWithPromotion;
      const globalAnalysis = {
        title: 'Global Analysis',
        data: this.computeDetails(coupons),
      };
      this.globalAnalysis = globalAnalysis;
    },
    getDetailsByWebshop() {
      const couponsByWebshop = _groupBy(this.couponsWithPromotion, 'coupon_webshop_name');
      const webshopNames = Object.keys(couponsByWebshop);
      const detailsByWebshop = webshopNames.map(webshop => {
        const coupons = couponsByWebshop[webshop];
        return {
          title: webshop,
          data: this.computeDetails(coupons),
        };
      });
      this.webshopAnalysis = detailsByWebshop;
    },
    computeDetails(couponList) {
      const couponsCount = this.getCouponsCountByType(couponList);
      const percentOffDetails = this.getDiscountValuesByType(couponList, 'percent-off');
      const dollarOffDetails = this.getDiscountValuesByType(couponList, 'dollar-off');
      const data = {
        couponsCount: couponsCount,
        percentOff: percentOffDetails,
        dollarOff: dollarOffDetails,
      };
      return data;
    },
    getCouponsCountByType(coupons) {
      const countByType = _countBy(coupons, 'promotion_type');
      const typeNames = Object.keys(countByType);
      const formattedCounts = typeNames.map(type => {
        return {
          type: type,
          count: countByType[type],
        }
      });
      return formattedCounts;
    },
    getDiscountValuesByType(coupons, type) {
      const filteredCoupons = coupons.filter(coupon => coupon.promotion_type === type);
      const minCoupon = _minBy(filteredCoupons, 'value');
      const maxCoupon = _maxBy(filteredCoupons, 'value');
      
      const couponsCount = filteredCoupons.length;
      const minDiscount = minCoupon['value'];
      const maxDiscount = maxCoupon['value'];
      const averageDiscount = _meanBy(filteredCoupons, 'value').toFixed(2);

      const details = {
        type: type,
        count: couponsCount,
        min: minDiscount,
        max: maxDiscount,
        avg: averageDiscount,
      };
      return details;
    }
  }
})
