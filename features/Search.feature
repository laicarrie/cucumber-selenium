Feature: Search
  As a job seeker
  I want to search for jobs
  So that I can see new posted jobs
  

  Scenario: Search for all jobs
    Given I am on Search page
    When I click on Search jobs button
    Then I should land on Search Result page
    And I should see Edit Search button
 


