<template>
  <div>
    <h1>Image clicker</h1>
    <section class="container">
      <ScrollableList/>
      <DetailSection/>
    </section>
  </div>
</template>

<script>
import ScrollableList from '../components/molecules/ScrollableList.vue';
import DetailSection from '../components/molecules/DetailSection.vue';

export default {
  name: 'ImageClicker',
  components: {
    ScrollableList,
    DetailSection,
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
  background-color: green;
  border-radius: $border-radius;
}
</style>