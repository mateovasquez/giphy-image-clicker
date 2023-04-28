# Image Clicker / Coupons Application
## Description
*Image Clicker / Coupons* is a frontend application developed in `Vue.js 3.2.47` and `Vite 4.1.4`, alongside `pinia` for state management and other additional libraries like `chart.js` and `lodash`.

In order to ensure its integrity, the application is backed with component and end-to-end tests made with `Cypress`.

This application includes 2 different views: `ImageClickerView` and `CouponsAnalyzerView`. Each one of the views tackles a feature proposed.

The `ImageClickerView` is accessed by `/image-clicker` route in the local server.

The `CouponsAnalyzerView` is accessed by `/coupons-analyzer` route in the local server.
## Pre-requirements
The `node` and `npm` versions used in the development of the application were the following:
- node: `v16.13.2`
- npm: `8.1.2`

## Installation steps
- Clone or download the repository
- Install the project with `npm i` or `npm install`

## Run application
You can run the local server with `npm run dev`, and access it through http://localhost:3000/

## Component test
You can find the test in `cypress/component/DetailSection.cy.js`

Commands to run the test:
- `npm run ct:run`: Runs the component test headlessly
- `npm run ct:open`: Launches the tests in the browser

## End-to-end test
You can find the test in `cypress/e2e/image_clicker_e2e.cy.js`

Commands to run the test:
- `npm run e2e:run`: Runs the end-to-end test headlessly
- `npm run e2e:open`: Launches the tests in the browser *(while running the local server)*