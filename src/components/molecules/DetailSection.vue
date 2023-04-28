<template>
  <div class="container__detail">
    <CustomImage
      v-if="gifId"
      class="container__detail__image"
      :image-url="gifUrl"
      @img-click="$emit('img-click', gifId)"
    />
    <div v-if="gifId" class="container__detail__description">
      <div>
        <p><b>Title:</b> {{gifTitle}} </p>
        <p><b>Username:</b> {{gifUserName}}</p>
        <p><b>Image clicks:</b> {{clicksCount}}</p>
      </div>
    </div>
    <div v-else class="center">
      <span data-cy="no-gif-selected">No GIF selected</span>
    </div>
  </div>
</template>

<script>
import CustomImage from '../atoms/CustomImage.vue';

export default {
  name: 'DetailSection',
  emits: ['img-click'],
  components: {
    CustomImage,
  },
  props: {
    'gif-id': {
      type: [String, Number],
      default: null,
    },
    'gif-title': {
      type: String,
      default: 'N/A',
    },
    'gif-url': {
      type: String,
      default: null,
    },
    'gif-user-name': {
      type: String,
      default: 'N/A',
    },
    'clicks-count': {
      type: [String, Number],
      default: 'N/A',
    },
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.container__detail {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: var(--color-background-mute);
  color: var(--color-text);
  &__description {
    width: 350px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    b {
      font-weight: bold;
    }
  }
  & .center {
    margin: auto;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    &__description {
      width: 85%;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    flex-direction: column;
    &__description {
      width: 85%;
    }
  }
}
</style>