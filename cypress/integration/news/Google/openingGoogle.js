import { Given } from "cypress-cucumber-preprocessor/steps";

const url = "https://thebrain.pro";

Then(`I am very happy`, () => {
  cy.title().should("include", "TheBrain Software House");
});
