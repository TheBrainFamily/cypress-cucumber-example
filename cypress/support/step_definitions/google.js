// we decided to not use this pattern anymore since for some reason it messes up the watcher functionality on linux
// const {given} = require('cypress-cucumber-preprocessor')

// you can have external state, and also require things!
const url = 'https://google.com'

given('I open Google page', () => {
  cy.visit(url)
})