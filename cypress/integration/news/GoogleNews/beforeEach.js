beforeEach(() => {
  cy.log(
    "This will run before every scenario of GoogleNews.feature test, but NEVER for Facebook/Google feature files"
  );
});
