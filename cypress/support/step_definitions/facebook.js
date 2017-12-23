const {given} = require('cypress-cucumber-preprocessor')

const url = 'https://facebook.com';

given('I open Facebook page', () => {
  cy.visit(url)
})