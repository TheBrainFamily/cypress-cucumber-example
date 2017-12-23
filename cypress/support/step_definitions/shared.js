const {then} = require('cypress-cucumber-preprocessor')

then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})
