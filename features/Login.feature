Feature: Login
  As a job seeker
  I want to login
  So that I can use the features for logged in members

Background: Go to Login page from Search page
    Given I go to Search page
    And I click on Log in


  Scenario: Existing member can login with correct email & password
    Given I should land on Login page
    When I type in correct email on email field
    And I type in correct password on password field
    And I click on Log in
    Then I should land on Jobs For You page
    And I should see Logged In Header module
    And I take snapshot


  Scenario Outline: Existing member cannot login with incorrect email & password
    Given I should land on Login page
    When I type in <email> on email field
    And I type in <password> on password field
    And I click on Log in
    Then Alert should pop up: <error msg>
    And I take snapshot

  Examples:
    | email | password | error msg |
    | carrielai@seekasia.com | WrongPassword | Either the user name or password was entered incorrectly, please try again. |

@test
  Scenario Outline: User can go to Sign Up page from Login page (By <Remarks>)
    Given I should land on Login page
    When I click on <button>
    Then I should land on Sign Up page
    And I take snapshot

  Examples:
    | button | Remarks |
    | Sign up button at the header | The button at top right hand corner |
    | Sign up | The link Text under Log in button |


  Scenario: User can go to Forgot password page from Login page
    Given I should land on Login page
    When I click on Forgot password
    Then I should land on Forgot Password page
    And I take snapshot
