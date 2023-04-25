<template>
   <div class="container__detail__image">
    <img :src="url" alt="gif">
   </div>
</template>

<script>
export default {
  name: 'CustomImage',
  data() {
    return {
      url: '',
      // url: 'https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif',
    }
  }
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