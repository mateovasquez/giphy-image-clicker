<template>
  <div class="container__list">
    <ListOption v-for="gif in list" :key="gif.url"/>
  </div>
</template>

<script>
import ListOption from '../atoms/ListOption.vue';

export default {
  name: 'ScrollableList',
  components: {
    ListOption,
  },
  data() {
    return {
      list: [
        {
          gifurl: 'something',
          title: 'other',
        },
        {
          gifurl: 'else',
          title: 'thing',
        },
        {
          gifurl: 'here',
          title: 'there',
        },
      ]
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