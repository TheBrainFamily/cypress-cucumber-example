import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://thebrain.pro";

Given(`I kinda open TheBrain Software House page`, () => {
  cy.visit(url);
});

// This is the same step that we have in socialNetworks/Facebook/different.js, but you don't have to worry about collisions!
Then(`I am very happy`, () => {
  cy.title().should("include", "TheBrain Software House");
});
