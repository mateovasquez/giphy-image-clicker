<template>
   <div class="container__detail__image">
    <img :src="imageUrl" alt="gif">
   </div>
</template>

<script>
export default {
  name: 'CustomImage',
  props: {
    'image-url': {
      type: String,
      default: null,
    }
  },
}
</script>

<style lang="scss" scoped>
.container__detail__image {
  width: 300px;
  height: 300px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>