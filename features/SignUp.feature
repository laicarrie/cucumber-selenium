Feature: Sign Up
  As a job seeker
  I want to create an account
  So that I can use the features for logged in members

Background: Go to Sign Up page from Search page
    Given I go to Search page
    And I click on Sign Up


  Scenario Outline: User can create account with new email & a password
    Given I should land on Sign Up page
    When I type in <firstName> on first name field
    And I type in <lastName> on last name field
    And I type in new email on email field
    And I type in a password on password field
    And I click on Sign Up
    Then Alert should pop up: <msg>
    And I should land on Search page
    And I should see Logged In Header module
    And I take snapshot

  Examples:
    | firstName | lastName | msg |
    |  First |  Last | Your account is ready ! |

  Scenario Outline: User cannot create account with incorrect information
    Given I should land on Login page
    When I type in <firstName> on first name field
    And I type in <lastName> on last name field
    And I type in <email> on email field
    And I type in a password on password field
    And I click on Log in
    Then Alert should pop up: <error msg>
    And I take snapshot

  Examples:
    | firstName | lastName | email | password | error msg |
    |  First |  Last | existingEmail | carrie1234 |  |

@test
  Scenario Outline: User can go to Login page from Sign Up page (By <Remarks>)
    Given I should land on Login page
    When I click on <button>
    Then I should land on Sign Up page
    And I take snapshot

  Examples:
    | button | Remarks |
    | Log in button at the header | The button at top right hand corner |
    | Log in | The link Text under Sign up button |
