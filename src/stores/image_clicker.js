import { defineStore } from 'pinia'

export const useImageClickerStore = defineStore('imageClicker', {
  state: () => ({
    gifsList: [],
  }),
  getters: {
    formattedGifsList: (state) => {
      const newList = state.gifsList.map(gifObject => {
        return {
          id: gifObject.id,
          title: gifObject.title,
          url: gifObject.images.downsized_large.url,
          userName: gifObject.user.display_name,
          clicks: 0,
        }
      })
      return newList
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
    }
  }
})
