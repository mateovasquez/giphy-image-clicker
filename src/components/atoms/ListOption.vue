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
  background: var(--color-text);
  color: var(--color-background-mute);
  border-bottom: 1px solid var(--color-background-mute);
  cursor: pointer;
  &__text {
    text-align: center;
  }
  &:hover {
    background-color: var(--vt-c-divider-dark-1);
    color: var(--color-text);
    transition: all .2s ease;
  }
}
</style>