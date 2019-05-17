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
