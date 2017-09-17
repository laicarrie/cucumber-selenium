Feature: Login
  As a job seeker
  I want to login
  So that I can use the features for logged in members


  Scenario Outline: Existing member can login with correct email & password
    Given I am on Login page
    When I type in "<email>" on "email field"
    And I type in "<password>" on "password field"
    And I click on "Log in" button
    Then I should see Logged in header module

@prod
  Examples:
    | email | password |
    | carrielai@seekasia.com | Carrie1234 |
 #   | jobsdbcarrielai1@gmail.com | carrie1234 |

@stg
  Examples:
  | email | password |
  | carrielai+140@seekasia.com | carrie1234 |

@stg @only
  Scenario Outline: Existing member cannot login with incorrect email & password
    Given I am on Login page
    When I type in "<email>" on "email field"
    And I type in "<password>" on "password field"
    And I click on "Log in" button
    Then error alert pops up: "<error msg>"

  Examples:
    | email | password | error msg |
    | carrielai@seekasia.com | WrongPassword | Either the user name or password was entered incorrectly, please try again. |

@stg
  Scenario: User can go to create an account from Login page
    Given I am on Login page
    When I click on "Sign up" button
    Then I should land on Sign up page

@stg
  Scenario: User can go to Forgot password page from Login page
    Given I am on Login page
    When I click on "Forgot password" button
    Then I should land on Forgot password page
