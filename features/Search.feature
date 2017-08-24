Feature: Search
  As a job seeker
  I want to search for jobs
  So that I can see new posted jobs
  

  Scenario: Search for all jobs
    Given I am on Search page
    When I click on Search jobs button
    Then I should land on Search Result page
    And I should see Edit Search button
    And the Search criteria contains all jobs
 

  Scenario Outline: Search by keyword
    Given I am on Search page
    When I type in "<keyword>" on Keyword field
    And I click on Search jobs button
    Then I should land on Search Result page
    And the Search criteria contains <keyword>

  Examples:
    | keyword |
    | QA Analyst |
    | Accountant |