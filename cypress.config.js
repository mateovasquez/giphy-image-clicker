const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:3000/'
  },
  component: {
    specPattern: 'cypress/component/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    devServer: {
      framework: 'vue',
      bundler: 'vite'
    }
  },
  env: {
    giphy_api_key: 'pRqhhngAO0XMd9vw08i5MJGQeputxF7n',
  },
})
