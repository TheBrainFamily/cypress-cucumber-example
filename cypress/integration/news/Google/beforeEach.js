beforeEach(() => {
  cy.log(
    "This will run before every scenario of Google.feature test, but NEVER for Facebook/GitHub feature files"
  );
});
