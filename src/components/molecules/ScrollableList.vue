<template>
  <div class="container__list">
    <ListOption
      v-for="gif in optionsList"
      :key="gif.url"
      :text="gif.title"
    />
  </div>
</template>

<script>
import ListOption from '../atoms/ListOption.vue';

export default {
  name: 'ScrollableList',
  components: {
    ListOption,
  },
  props: {
    'options-list': {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<style lang="scss" scoped>
.container__list {
  background-color: red;
  height: 100%;
}
</style>