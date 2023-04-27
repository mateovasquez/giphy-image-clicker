<template>
  <div>
    <h1>Image clicker</h1>
    <section class="container">
      <ScrollableList
        :options-list="formattedGifsList"
        :selected-id="selectedGif.id"
        @click="selectGif"
      />
      <DetailSection
        :gif-id="selectedGif.id"
        :gif-title="selectedGif.title"
        :gif-url="selectedGif.url"
        :gif-user-name="selectedGif.userName"
        :clicks-count="selectedGif.clicks"
        @img-click="addImageClickCount"
      />
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
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
    ...mapState(
      useImageClickerStore,
      ['formattedGifsList', 'selectedGif']
    ),
  },
  methods: {
    ...mapActions(
      useImageClickerStore,
      ['getGifsFromGiphy', 'selectGif', 'addImageClickCount']
    ),
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
  margin-top: 26px;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: max-content;
  overflow: hidden;
  border-radius: 8px;
  @media screen and (max-width: 768px) {
    height: 80vh;
    grid-template-columns: unset;
  }
}
</style>