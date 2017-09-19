Feature: Apply with Resume
  As a job seeker
  I want to apply for jobs
  So that I can have a chance to get a job

Background: Login & Search for a job
  Given I am on Login page
  And I type in email of account with resume on email field
  And I type in password of account with resume on password field
  And I click on Log in
  And I should see Logged In Header module
  And I go to Search page
  And I click on Search jobs
  And I should land on Search Result page
  And I go to the 2nd Job Ad

@stg @onlyyyy
  Scenario: Existing member with resume can start apply
#    Given I am logged in with "<email>" and "<password>"
    Given I should land on Job Ad page
    And I take snapshot
    When I click on Apply
    Then I should land on Apply page
    And I take snapshot

@onlyy
  Scenario: Existing member with resume can choose resume
    #    Given I am logged in with "<email>" and "<password>"
    Given I should land on Job Ad page
    And I click on Apply
    And I should land on Apply page
    And I take snapshot
#    When I select a resume
#    Then the resume is selected
#  @prod
#  Examples:
#      | email | password | Remarks |
#      | jobsdbcarrielai4@gmail.com | carrie1234 | without resume |


#  Examples:
#      | email | password | Remarks |
#      | carrielai+300@seekasia.com | carrie1234 | without resume |
