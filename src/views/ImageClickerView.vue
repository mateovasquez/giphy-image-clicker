<template>
  <div>
    <h1>Image clicker</h1>
    <section class="container">
      <ScrollableList
        :options-list="formattedGifsList"
      />
      <DetailSection
        :gif-title="formattedGifsList[0]?.title"
        :gif-url="formattedGifsList[0]?.url"
        :gif-user-name="formattedGifsList[0]?.userName"
        :clicks-count="formattedGifsList[0]?.clicks"
      />
    </section>
  </div>
</template>

<script>
import { mapStores, mapState, mapActions } from 'pinia';
import { useImageClickerStore } from '../stores/image_clicker.js'

import ScrollableList from '../components/molecules/ScrollableList.vue';
import DetailSection from '../components/molecules/DetailSection.vue';

export default {
  name: 'ImageClicker',
  components: {
    ScrollableList,
    DetailSection,
  },
  computed:{
    ...mapStores(useImageClickerStore),
    ...mapState(useImageClickerStore, ['formattedGifsList']),
  },
  methods: {
    ...mapActions(useImageClickerStore, ['getGifsFromGiphy']),
  },
  mounted() {
    this.getGifsFromGiphy()
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 70vh;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 1fr;
  overflow: hidden;
  border-radius: 8px;
}
</style>