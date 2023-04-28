import DetailSection from '../../src/components/molecules/DetailSection.vue'

describe('DetailSection', () => {
  it('no gif selected', () => {
    cy.mount(DetailSection)
    cy.get('[data-cy="no-gif-selected"]').should('have.text', 'No GIF selected')
  })
  it('gif selected with info', () => {
    const props = {
      'gif-id': 'TEST ID',
      'gif-title': 'TEST_TITLE',
      'gif-url': 'https://media4.giphy.com/media/LkKS3fasMetAptFbAw/giphy.gif?cid=575eae0b86a5ul6vtkyqn1lche4b1wviuc8erdd5hihqs50w&ep=v1_gifs_trending&rid=giphy.gif&ct=g',
      'gif-user-name': 'TEST_USER_NAME',
      'clicks-count': '0',
    }
    cy.mount(DetailSection, {props: props})
    cy.get('.detail .detail__description')
    .should('be.visible')
    .should('include.text', 'Title: TEST_TITLE')
    .should('include.text', 'Username: TEST_USER_NAME')
    .should('include.text', 'Image clicks: 0');
    cy.get('.detail .detail__image img').should('have.attr', 'src').should('include','giphy.com')
  })

  it('image click emits event', () => {
    const onImgClickSpy = cy.spy().as('onImgClickSpy');
    const props = {
      'gif-id': 'TEST ID',
      'gif-title': 'TEST_TITLE',
      'gif-url': 'https://media4.giphy.com/media/LkKS3fasMetAptFbAw/giphy.gif?cid=575eae0b86a5ul6vtkyqn1lche4b1wviuc8erdd5hihqs50w&ep=v1_gifs_trending&rid=giphy.gif&ct=g',
      'gif-user-name': 'TEST_USER_NAME',
      'clicks-count': '0',
      'onImgClick': onImgClickSpy
    };
    cy.mount(DetailSection, {props: props});
    cy.get('.detail .detail__image').click()
    cy.get('@onImgClickSpy').should('have.been.calledWith', props['gif-id'])
  })
})
