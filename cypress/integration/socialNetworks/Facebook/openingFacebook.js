import { Given } from "cypress-cucumber-preprocessor/steps";

const url = "https://facebook.com";

Given(`I open Facebook page`, () => {
  cy.visit(url);
});
