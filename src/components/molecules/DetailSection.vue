<template>
  <div class="container__detail">
    <CustomImage/>
    <div class="container__detail__description"></div>
  </div>
</template>

<script>
import CustomImage from '../atoms/CustomImage.vue';

export default {
  name: 'DetailSection',
  components: {
    CustomImage,
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.container__detail {
}
</style>