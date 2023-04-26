<template>
  <div class="container__detail">
    <CustomImage :image-url="gifUrl"/>
    <div class="container__detail__description">
      <ul>
        <li>Title: {{gifTitle}}</li>
        <li>Url: {{gifTitle}}</li>
        <li>Number of clicks: {{clicksCount}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import CustomImage from '../atoms/CustomImage.vue';

export default {
  name: 'DetailSection',
  components: {
    CustomImage,
  },
  props: {
    'gif-title': {
      type: String,
      default: null,
    },
    'gif-url': {
      type: String,
      default: null,
    },
    'clicks-count': {
      type: Number,
      default: null,
    },
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.container__detail {
  background-color: blueviolet;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>