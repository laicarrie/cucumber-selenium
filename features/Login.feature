Feature: Login
  As a job seeker
  I want to login
  So that I can use the features for logged in members
  

  Scenario Outline: Existing member can login with correct email & password
    Given I am on Login page
    When I type in "<email>" on email field
    And I type in "<password>" on password field
    And I click on Log in button
    Then I should see Logged in header

  Examples:
    | email | password |
    | carrielai@seekasia.com | Carrie1234 |
 #   | jobsdbcarrielai1@gmail.com | carrie1234 |


  Scenario Outline: Existing member cannot login with incorrect email & password
    Given I am on Login page
    When I type in "<email>" on email field
    And I type in "<password>" on password field
    And I click on Log in button
    Then I should see error alert prompt

  Examples:
    | email | password |
    | carrielai@seekasia.com | WrongPassword |

