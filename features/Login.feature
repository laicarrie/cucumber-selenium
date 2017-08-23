Feature: Login
  As a job seeker
  I want to login
  So that I can use the features for logged in members
  

  Scenario Outline: Login
    Given I am on Login page
    When I type in "<email>" on email field
    And I type in "<password>" on password field
    And I click on Log in button
    Then I should see Logged in header module

  Examples:
    | email | password |
    | carrielai@seekasia.com | carrie1234 |


