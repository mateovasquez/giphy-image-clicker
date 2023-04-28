<template>
  <div class="list">
    <ListOption
      v-for="(gif, index) in optionsList"
      :key="gif.id"
      :text="gif.title"
      :isSelected="gif.id === selectedId"
      :class="{
        'previous': selectedId && index === selectedGifIndex - 1,
        'next': selectedId && index === selectedGifIndex + 1,
      }"
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
  },
  computed: {
    selectedGifIndex() {
      let index = null;
      if (this.selectedId) {
        index = this.optionsList.findIndex(option => {
          return option.id === this.selectedId
        });
      }
      return index
    },
  },
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  height: inherit;
  overflow: scroll;
  .previous {
    border-bottom-right-radius: 16px;
  }
  .next {
    border-top-right-radius: 16px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: row;
    height: 100px;
    .next {
      border-top-right-radius: unset;
      border-bottom-left-radius: 16px;
    }
  }
}
</style>