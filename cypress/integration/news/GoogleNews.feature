Feature: The Google News

  I want to open Google News page

  Scenario: Opening a Google News network page
    Given I open Google News page
    Then I see "Google News" in the title

  Scenario: Different kind of opening
    Given I kinda open Google News page
    Then I am very happy
