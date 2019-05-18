# cypress-cucumber-example
Initial example of using Cypress with Cucumber.

There are examples that are part of a Continuous Integration build in the main repo, that also showcase more advanced
usage, please refer there as well - https://github.com/TheBrainFamily/cypress-cucumber-preprocessor/tree/master/cypress

# Run example tests

```
npm install
npm test
```  

# Tags usage

### Tagging tests
You can use tags to select which test should run using [cucumber's tag expressions](https://github.com/cucumber/cucumber/tree/master/tag-expressions).
Keep in mind we are using newer syntax, eg. `'not @foo and (@bar or @zap)'`.
In order to initialize tests using tags you will have to run cypress and pass TAGS environment variable.

To make things faster and skip cypress opening a browser for every feature file (taking a couple seconds for each one), even the ones we want ignored, we use our own cypress-tags wrapper. It passes all the arguments to cypress, so use it the same way you would use cypress CLI. The only difference is it will first filter out the files we don't care about, based on the tags provided. 

### Examples:

There are a few tagged tests in these files:

[Facebook.feature](https://github.com/TheBrainFamily/cypress-cucumber-example/blob/master/cypress/integration/socialNetworks/Facebook.feature)
```
@feature-tag
Feature: The Facebook

  I want to open a social network page

  @tag-to-include
  Scenario: Opening a social network page
    Given I open Facebook page
    Then I see "Facebook" in the title

  @another-tag-to-include @some-other-tag
  Scenario: Different kind of opening
    Given I kinda open Facebook page
    Then I am very happy

```


[Twitter.feature](https://github.com/TheBrainFamily/cypress-cucumber-example/blob/master/cypress/integration/socialNetworks/Twitter.feature)
```
@feature-tag @twitter-tag
Feature: The Twitter

  I want to tweet things

  @tag-to-include
  Scenario: Opening Twitter
    Given I open Twitter page
    Then I see "Twitter" in the title

  @another-tag-to-include
  Scenario: Opening Twitter again
    Given I open Twitter page
    Then I see "Twitter" in the title
```

###### Simple Example
  Run ```./node_modules/.bin/cypress-tags run -e TAGS='@feature-tag'``` in this repo. As both `Facebook.feature` and `Twitter.feature` 
  have `@feature-tag` above the feature name, and `Google.feature` has no tags, the result should be: 
  
  ```
      Spec                                                Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔ socialNetworks/Facebook.feature           00:04        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔ socialNetworks/Twitter.feature            00:05        2        2        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    All specs passed!                           00:09        4        4        -        -        -
```

###### usage of `not`

Run ```./node_modules/.bin/cypress-tags run -e TAGS='not @twitter-tag'``` in this repo. `Facebook.feature` and `Google.feature` will run, as only `Twitter.feature` has the unwanted tag. The result should be: 

```
      Spec                                                Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔ socialNetworks/Facebook.feature           00:05        2        2        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    All specs passed!                           00:05        2        2        -        -        -
```

###### usage of `and` 

Run ```./node_modules/.bin/cypress-tags run -e TAGS='@another-tag-to-include and @some-other-tag'``` in this repo. There is only one scenario that has both the tags, in `Facebook.feature`. The result should be:  

```
     Spec                                                Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔ socialNetworks/Facebook.feature           00:03        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
    All specs passed!                           00:03        1        1        -        -        -

```

###### combinations

Keep in mind that order matters and use parentheses wisely. The following commands will yield different results:  
```./node_modules/.bin/cypress-tags run -e TAGS='@tag-to-include or @another-tag-to-include and not @twitter-tag'```

```./node_modules/.bin/cypress-tags run -e TAGS='(@tag-to-include or @another-tag-to-include) and not @twitter-tag'```

The first one will include scenario tagged `@tag-to-include` from the [Twitter.feature](https://github.com/TheBrainFamily/cypress-cucumber-example/blob/master/cypress/integration/socialNetworks/Twitter.feature), while 
the second one will skip all scenarios from it.

### Smart tagging
Start your tests without setting any tags. And then put a @focus on the scenario (or scenarios) you want to focus on while development or bug fixing.

For example:
```gherkin
Feature: Smart Tagging

  As a cucumber cypress plugin which handles Tags
  I want to allow people to select tests to run if focused
  So they can work more efficiently and have a shorter feedback loop

  Scenario: This scenario should not run if @focus is on another scenario
    Then this unfocused scenario should not run

  @focus
  Scenario: This scenario is focused and should run
    Then this focused scenario should run

  @this-tag-affects-nothing
  Scenario: This scenario should also not run
    Then this unfocused scenario should not run

  @focus
  Scenario: This scenario is also focused and also should run
    Then this focused scenario should run
```

# Scoped hooks:

Unfortunately, running all tests through GUI causes an unexpected behavior with hooks:

[TheBrainFamily/cypress-cucumber-preprocessor#139](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor/issues/139)
which is an acknowledged bug in cypress itself:

[cypress-io/cypress#3323](https://github.com/cypress-io/cypress/issues/3323)

Our advice is to not use the "run all" in the GUI - which would be slow once you have enough .feature files anyway. Running through cypress run (for CI use) works as described. 
