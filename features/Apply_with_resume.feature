Feature: Apply with Resume
  As a job seeker
  I want to apply for jobs
  So that I can have a chance to get a job

Background: Login & Search for a job
  Given I am logged in to an account with resume
  And I should see Logged In Header module
  And I go to Search page
  And I click on Search jobs
  And I should land on Search Result page
  And I click to View the 2nd Job Ad


  Scenario: Existing member with resume can start apply
    Given I should land on Job Ad page
    And I take snapshot
    When I click on Apply
    Then I should land on Apply page
    And I take snapshot


  Scenario: Existing member with resume can submit application by clicking Send button
    Given I should land on Job Ad page
    And I click on Apply
    And I should land on Apply page
    When I click on Send
    Then I should land on Apply Success page
    And I take snapshot


  Scenario Outline: Existing member with resume can choose resume
    Given I should land on Job Ad page
    And I click on Apply
    And I should land on Apply page
    And I take snapshot
    When I select <resume> from Resume dropdown list
    Then I take snapshot

  Examples:
  | resume |
  | UploadResume |
