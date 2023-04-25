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
  data() {
    return {
      text: 'Hello',
    }
  }
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