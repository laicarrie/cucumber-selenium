Feature: Search
  As a job seeker
  I want to search for jobs
  So that I can see new posted jobs


  Scenario: Search for all jobs
    Given I go to Search page
    When I click on Search jobs
    Then I should land on Search Result page
    And The Search Criteria should contain all jobs
    And I take snapshot


  Scenario Outline: Search by keyword
    Given I go to Search page
    When I type in <keyword> on Keyword field
    And I take snapshot
    And I click on Search jobs
    Then I should land on Search Result page
    And The Search Criteria should contain <keyword>
    And I take snapshot

  Examples:
    | keyword |
    | QA Analyst |
#    | Accountant |


  Scenario Outline: Search by job function <Remarks>
    Given I go to Search page
    When I select <option> from Job function dropdown list
    And I take snapshot
    When I click on Search jobs
    Then I should land on Search Result page
    And The Search Criteria should contain <option>
    And I take snapshot

  Examples:
    | option | Remarks |
    | Accounting | ( level one job function ) |
    | Accountant | ( level two job function ) |


  Scenario: Change salary from Monthly to Hourly
    Given I go to Search page
    And Salary unit should be selected as Monthly
    And I take snapshot
    When I click on Hourly
    Then Salary unit should be selected as Hourly
    And minimum salary should be ranged from 0 to 600
    And maximum salary should be ranged from 60 to 600+
    And I take snapshot


  Scenario Outline: Search by Monthly salary range (<minimum> to <maximum>)
    Given I go to Search page
    And Salary unit should be selected as Monthly
    When I select <minimum> from Minimum salary dropdown list
    And I select <maximum> from Maximum salary dropdown list
    And I take snapshot
    And I click on Search jobs
    Then I should land on Search Result page
    And The Search Criteria should contain <contains minimum>
    And The Search Criteria should contain <contains maximum>
    And The Search Criteria should contain per month
    And I take snapshot

  Examples:
    | minimum | maximum | contains minimum | contains maximum |
    | 15,000 | 30,000 | 15k | 30k |
    | 0 | 40,000 | up to | 40k |
    | 50,000 | 120,000+ | 50k | above |




  Scenario Outline: Search by Hourly salary range (<minimum> to <maximum>)
    Given I go to Search page
    And I click on Hourly
    And Salary unit should be selected as Hourly
    When I select <minimum> from Minimum salary dropdown list
    And I select <maximum> from Maximum salary dropdown list
    And I take snapshot
    And I click on Search jobs
    Then I should land on Search Result page
    And The Search Criteria should contain <contains minimum>
    And The Search Criteria should contain <contains maximum>
    And The Search Criteria should contain per hour
    And I take snapshot

  Examples:
    | minimum | maximum | contains minimum | contains maximum |
    | 160 | 330 | 160 | 330 |
    | 0 | 215 | up to | 215 |
    | 270 | 600+ | 270 | above |



  Scenario Outline: Search by Location <Remarks>
    Given I go to Search page
    And I click on More options
    When I select <option> from Location dropdown list
    And I take snapshot
    And I click on Search jobs
    Then I should land on Search Result page
    And The Search Criteria should contain <option>
    And I take snapshot

  Examples:
    | option | Remarks |
    | Central & Western Area | ( level one location ) |
    | Admiralty | ( level two location ) |


  Scenario Outline: Search by Career level (<from career level> to <to career level>)
    Given I go to Search page
    And I click on More options
    When I select <from career level> from (From) Career level dropdown list
    And I select <to career level> from (To) Career level dropdown list
    And I take snapshot
    And I click on Search jobs
    Then I should land on Search Result page
    And The Search Criteria should contain <text>
    And I take snapshot

  Examples:
    | from career level | to career level | text |
    | Entry Level | Top | Entry Level To Top |
    | Top | Entry Level | Entry Level To Top |
    | Middle | Senior | Middle To Senior |



  Scenario Outline: Search by Employment type
    Given I go to Search page
    And I click on More options
    When I select <option> from Employment type dropdown list
    And I take snapshot
    And I click on Search jobs
    Then I should land on Search Result page
    And The Search Criteria should contain <option>
    And I take snapshot

  Examples:
    | option |
    | Full Time |


  Scenario Outline: Search by Industry
    Given I go to Search page
    And I click on More options
    When I select <option> from Industry dropdown list
    And I take snapshot
    And I click on Search jobs
    Then I should land on Search Result page
    And The Search Criteria should contain <option>
    And I take snapshot

  Examples:
    | option |
    | Accounting / Audit / Tax Services |
#    | Information Technology |



  Scenario: Clear all search fields
    Given I go to Search page
    And I click on More options
    And I type in Keyword on Keyword field
    And I select Admin & HR from Job function dropdown list
    And I select 11,000 from Minimum salary dropdown list
    And I select 60,000 from Maximum salary dropdown list
    And I select Wan Chai Area from Location dropdown list
    And I select Entry Level from (From) Career level dropdown list
    And I select Top from (To) Career level dropdown list
    And I select Part Time from Employment type dropdown list
    And I select Banking from Industry dropdown list
    And I take snapshot
    When I click on Clear all
    And I click on Search jobs
    Then I should land on Search Result page
    And The Search Criteria should contain all jobs
    And I take snapshot
