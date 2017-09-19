Feature: Search
  As a job seeker
  I want to search for jobs
  So that I can see new posted jobs

@stg
  Scenario: Search for all jobs
    Given I am on Search page
    When I click on Search jobs
    Then I should land on Search Result page
    And the Search criteria contains all jobs
    And I take snapshot

@stg
  Scenario Outline: Search by keyword
    Given I am on Search page
    When I type in <keyword> on Keyword field
    And I click on Search jobs
    Then I should land on Search Result page
    And the Search criteria contains <keyword>
    And I take snapshot

  Examples:
    | keyword |
    | QA Analyst |
#    | Accountant |

@stg
  Scenario Outline: Search by job function <Remarks>
    Given I am on Search page
    When I select <job function> from Job function list
    And I click on Search jobs
    Then I should land on Search Result page
    And the Search criteria contains <job function>
    And I take snapshot

  Examples:
    | job function | Remarks |
    | Accounting | ( level one job function ) |
    | Accountant | ( level two job function ) |

@stg @onlyyy
  Scenario: Change salary from monthly to hourly
    Given I am on Search page
    And Monthly is selected
    When I click on Hourly
    Then Hourly is selected
    And minimum salary ranges from 0 to 600
    And maximum salary ranges from 60 to 600+
    And I take snapshot
