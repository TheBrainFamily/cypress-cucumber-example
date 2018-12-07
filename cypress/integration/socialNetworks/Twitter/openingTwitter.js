import { When } from "cypress-cucumber-preprocessor/steps";

const url = "https://twitter.com";

When(`I open Twitter page`, () => {
  cy.visit(url);
});
