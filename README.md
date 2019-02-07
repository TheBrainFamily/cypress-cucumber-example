# cypress-cucumber-example
Initial example of using Cypress with Cucumber.

There are examples that are part of a Continuous Integration build in the main repo, that also showcase more advanced
usage, please refer there now - https://github.com/TheBrainFamily/cypress-cucumber-preprocessor/tree/master/cypress

# Scoped hooks:

Unfortunately, running all tests through GUI causes an unexpected behavior with hooks:

[TheBrainFamily/cypress-cucumber-preprocessor#139](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor/issues/139)
which is an acknowledged bug in cypress itself:

[cypress-io/cypress#3323](https://github.com/cypress-io/cypress/issues/3323)

Our advice is to not use the "run all" in the GUI - which would be slow once you have enough .feature files anyway. Running through cypress run (for CI use) works as described. 
