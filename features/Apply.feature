Feature: Apply
  As a job seeker
  I want to apply for jobs
  So that I can have a chance to get a job
  

  Scenario: Existing member without resume cannot start apply
    Given I am logged in to an account without resume
    And I am on Job Ad page
    When I click on Apply button
    Then I should land on Complete Your Profile page
    And I should see App Store button
 


