<template>
  <div class="container__list">
    <ListOption
      v-for="gif in optionsList"
      :key="gif.id"
      :text="gif.title"
      :isSelected="gif.id === selectedId"
      @click="$emit('click', gif.id)"
    />
  </div>
</template>

<script>
import ListOption from '../atoms/ListOption.vue';

export default {
  name: 'ScrollableList',
  emits: ['click'],
  components: {
    ListOption,
  },
  props: {
    'options-list': {
      type: Array,
      default: () => [],
    },
    'selected-id': {
      type: [String, Number],
      default: null,
    },
  }
}
</script>

<style lang="scss" scoped>
.container__list {
  display: flex;
  flex-direction: column;
  height: inherit;
  overflow: scroll;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    height: 100px;
  }
}
</style>