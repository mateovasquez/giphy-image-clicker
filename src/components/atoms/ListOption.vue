<template>
  <div class="container__list__option">
    <div class="container__list__option__text">
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListOption',
  props: {
    text: {
      type: String,
      default: null,
    }
  },
}
</script>

<style lang="scss" scoped>
.container__list__option {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: grey;
  &__text {
    text-align: center;
  }
}
</style>