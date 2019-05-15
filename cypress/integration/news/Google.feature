Feature: The Google News

  I want to open TheBrain Software House page

  @noise-tag @tag-to-ignore
  Scenario: Opening a TheBrain Software network page
    Given I open TheBrain Software House page
    Then I see "TheBrain Software House" in the title

  @noise-tag @tag-to-include
  Scenario: Different kind of opening
    Given I kinda open TheBrain Software House page
    Then I am very happy
