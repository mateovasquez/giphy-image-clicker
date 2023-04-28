describe('Loads and displays correctly gifs and selected gif from list', () => {
  beforeEach(() => {
    // UNCOMMENT TO USE LOCAL FILE TO LOAD GIFS IF EXCEEDED API CALLS
    // SEE src/stores/image_clicker.js
    // cy.intercept('GET', '/giphy-response.json', {
    //   fixture: 'giphy-response.json',
    // });
    const giphyApiUrl = `http://api.giphy.com/v1/gifs/trending?api_key=${Cypress.env('giphy_api_key')}&limit=10`;
    cy.intercept('GET', giphyApiUrl, {
      fixture: 'giphy-response.json',
    });
    cy.visit('/image-clicker')
  })

  it('Visits the Image Clicker page', () => {
    cy.contains('h1', 'Image clicker')
  })

  it('Gets gifs data from GIPHY API and shows them in list', () => {
    cy.get('.list .option .option__text').first().should('have.text', 'TEST_TITLE')
    cy.get('[data-cy="no-gif-selected"]').should('be.visible').should('have.text', 'No GIF selected');
  })

  it('Selects an option from the list and shows gif in the right side', () => {
    cy.get('.list .option').first().click()
    cy.get('.container .detail__description')
    .should('be.visible')
    .should('include.text', 'Title: TEST_TITLE')
    .should('include.text', 'Username: TEST_USER_NAME')
    .should('include.text', 'Image clicks: 0');
    cy.get('.container .detail__image').should('be.visible')
  })

  it('Clicks on the image and increments count', () => {
    cy.get('.list .option').first().click()
    cy.get('.container .detail__description').should('include.text', 'Image clicks: 0');
    cy.get('.container .detail__image').click()
    cy.get('.container .detail__description').should('include.text', 'Image clicks: 1');
    cy.get('.container .detail__image').click()
    cy.get('.container .detail__description').should('include.text', 'Image clicks: 2');
  })

  it('Clicks on different option images and keeps count ', () => {
    // Click first option image and does 2 clicks
    cy.get('.list .option').first().click()
    cy.get('.container .detail__image').click()
    cy.get('.container .detail__image').click()
    cy.get('.container .detail__image').click()
    cy.get('.container .detail__description').should('include.text', 'Image clicks: 3');
    
    // Click second option image with 0 clicks and clicks once
    cy.get('.list .option').last().click()
    cy.get('.container .detail__description').should('include.text', 'Image clicks: 0');
    cy.get('.container .detail__image').click()
    cy.get('.container .detail__description').should('include.text', 'Image clicks: 1');

    // Goes back to first option and has previous clicks
    cy.get('.list .option').first().click()
    cy.get('.container .detail__description').should('include.text', 'Image clicks: 3');

    // Goes to second option and has previous clicks
    cy.get('.list .option').last().click()
    cy.get('.container .detail__description').should('include.text', 'Image clicks: 1');
  })
  
})
