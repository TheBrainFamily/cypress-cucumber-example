Feature: The Google

  I want to open Google page

  Scenario: Opening a Google network page
    Given I open Google page
    Then I see "Google" in the title

  Scenario: Different kind of opening
    Given I kinda open Google page
    Then I am very happy
