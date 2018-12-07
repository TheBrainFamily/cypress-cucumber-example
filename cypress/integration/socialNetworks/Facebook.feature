Feature: The Facebook

  I want to open a social network page

  Scenario: Opening a social network page
    Given I open Facebook page
    Then I see "Facebook" in the title

  Scenario: Different kind of opening
    Given I kinda open Facebook page
    Then I am very happy
