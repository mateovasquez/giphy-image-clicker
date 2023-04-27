import { defineStore } from 'pinia'

export const useImageClickerStore = defineStore('imageClicker', {
  state: () => ({
    gifsList: [],
    selectedGifId: null,
    clicksCountById: {},
  }),
  getters: {
    formattedGifsList: (state) => {
      const newList = state.gifsList.map(gif => {
        return {
          id: gif.id,
          title: gif.title,
          url: gif.images.downsized_large.url,
          userName: gif.user.display_name,
          clicks: state.clicksCountById[gif.id] || 0,
        }
      })
      return newList;
    },
    selectedGif: (state) => {
      if (state.selectedGifId) {
        return state.formattedGifsList.filter(option => option.id === state.selectedGifId)[0]
      }
      return {}
    }
  },
  actions: {
    getGifsFromGiphy() {
      // const apiKey = 'pRqhhngAO0XMd9vw08i5MJGQeputxF7n'
      // const giphyApiUrl = `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=5`
      // fetch(giphyApiUrl)
      // .then(response => response.json())
      // .then(content => {
      //   this.gifsList = content.data
      // })
      // .catch(error => {
      //   console.log(error);
      // });
      fetch('./giphy-response.json')
      .then((response) => response.json())
      .then((content) => {
        this.gifsList = content.data
      });
    },
    selectGif(gifId) {
      if (gifId) {
        this.selectedGifId = gifId;
      }
    },
    addImageClickCount(gifId) {
      if (gifId) {
        const wasClickedBefore = gifId in this.clicksCountById;
        this.clicksCountById[gifId] = wasClickedBefore ? this.clicksCountById[gifId] + 1 : 1;
      }
    }
  }
})
