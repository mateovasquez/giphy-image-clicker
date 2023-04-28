<template>
  <div
    class="option"
    :class="{'selected': isSelected}"
    @click="$emit('click')"
  >
    <div class="option__text">
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListOption',
  emits: ['click'],
  props: {
    text: {
      type: String,
      default: null,
    },
    isSelected: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.option {
  width: 100%;
  min-width: 150px;
  height: 100px;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-text);
  color: var(--color-background-mute);
  border-bottom: 1px solid var(--color-background-mute);
  cursor: pointer;
  transition: all .2s ease;
  &.selected {
    background-color: var(--color-background-mute);
    color: var(--color-text);
  }
  &__text {
    text-align: center;
  }
  &:hover {
    color: var(--color-text);
  }
  @media screen and (max-width: 768px) {
    border-right: 1px solid var(--color-background-mute);
  }
}
</style>