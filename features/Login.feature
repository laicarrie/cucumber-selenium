Feature: Login
  As a job seeker
  I want to login
  So that I can use the features for logged in members


  Scenario Outline: Existing member can login with correct email & password
    Given I go to Login page
    When I type in correct email on email field
    And I type in correct password on password field
    And I click on Log in
    Then I should see Logged In Header module
    And I take snapshot


  Scenario Outline: Existing member cannot login with incorrect email & password
    Given I go to Login page
    When I type in <email> on email field
    And I type in <password> on password field
    And I click on Log in
    Then Alert pops up: <error msg>
    And I take snapshot

  Examples:
    | email | password | error msg |
    | carrielai@seekasia.com | WrongPassword | Either the user name or password was entered incorrectly, please try again. |


  Scenario: User can go to create an account from Login page
    Given I go to Login page
    When I click on Sign up
    Then I should land on Sign Up page
    And I take snapshot


  Scenario: User can go to Forgot password page from Login page
    Given I go to Login page
    When I click on Forgot password
    Then I should land on Forgot Password page
    And I take snapshot
