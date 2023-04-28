<template>
   <div class="custom-image">
    <div
      v-if="imageUrl"
      class="square-container"
      @click="$emit('img-click')"
    >
      <img :src="imageUrl" alt="gif">
    </div>
   </div>
</template>

<script>
export default {
  name: 'CustomImage',
  emits: ['img-click'],
  props: {
    'image-url': {
      type: String,
      default: null,
    }
  },
}
</script>

<style lang="scss" scoped>
.custom-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .square-container {
    position: relative;
    width: 85%;
    cursor: pointer;
    &::after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }
}
</style>