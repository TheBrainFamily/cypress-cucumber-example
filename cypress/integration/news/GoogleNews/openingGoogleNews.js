import { Given } from "cypress-cucumber-preprocessor/steps";

const url = "https://news.google.com";

Given(`I open Google News page`, () => {
  cy.visit(url);
});
