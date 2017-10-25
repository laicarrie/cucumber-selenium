Feature: Apply without Resume
  As a job seeker
  I want to apply for jobs
  So that I can have a chance to get a job

Background: Login & Search for a job
  Given I am logged in to an account without resume
  And I should see Logged In Header module
  And I go to Search page
  And I click on Search jobs
  And I should land on Search Result page
  And I click to View the 1st Job Ad

@iOS
  Scenario: Existing member without resume cannot start apply
    Given I should land on Job Ad page
    When I click on Apply
    Then I should land on Complete Your Profile page
    And I should see App Store button
    And I take snapshot

@Android
  Scenario: Existing member without resume cannot start apply
    Given I should land on Job Ad page
    When I click on Apply
    Then I should land on Complete Your Profile page
    And I should see Google Play button
    And I take snapshot
