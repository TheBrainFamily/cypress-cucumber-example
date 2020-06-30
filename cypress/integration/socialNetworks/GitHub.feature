@feature-tag @github-tag
Feature: The Github

  I want to GitHub Things

  @tag-to-include
  Scenario: Opening GitHub
    Given I open GitHub page
    Then I see "GitHub" in the title

  @another-tag-to-include
  Scenario: Opening GitHub again
    Given I open GitHub page
    Then I see "GitHub" in the title
