Feature: Search Result
  As a job seeker
  After I search for jobs,
  I want to browse around the results
  So that I can view more jobs

  Background: Search for jobs
    Given I go to Search page
    And I click on Search jobs

@only
  Scenario: View job ad
    Given I should land on Search Result page
    When I click to View the 1st Job Ad
    Then I should land on Job Ad page
    And I take snapshot

@test
  Scenario Outline: Go to next page
    Given I should land on Search Result page
    And The page number should be <currentPageNo>
    And I take snapshot
    When I click on Next page
    Then I should land on Search Result page
    And The page number should be <nextPageNo>
    And I take snapshot

  Examples:
    | currentPageNo |  nextPageNo |
    | 1 | 2 |

  Scenario Outline: User need to login before saving a job
    Given I should land on Search Result page
    When I click to Save the <Nth> Job Ad
    Then I should land on Login page
    And I take snapshot

  Examples:
  | Nth |
  | 1st |


@onlyyy
  Scenario Outline: User can login when saving a job and go back to Search result page
    Given I should land on Search Result page
    And I take snapshot
#    And The <Nth> job is <prevStatus>
    And I click to Save the <Nth> Job Ad
    And I should land on Login page
    When I am logged in to an account
    Then Alert pops up: <message>
    And I should land on Search Result page
#    And The <Nth> job is <afterStatus>
    And I take snapshot

  Examples:
    | Nth | prevStatus | afterStatus | message |
    | 1st | saved | unsaved | Job Saved |
