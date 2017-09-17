Feature: Apply
  As a job seeker
  I want to apply for jobs
  So that I can have a chance to get a job

Background: Login & Search for a job
  Given I am on Login page
  And I type in "carrielai+140@seekasia.com" on "email field"
  And I type in "carrie1234" on "password field"
  And I click on "Log in"
  And I go to Search page
  And I click on "Search jobs"
  And I should land on Search Result page
  And I click on "1st Job Ad"


  Scenario: Existing member without resume can start apply
#    Given I am logged in with "<email>" and "<password>"
    Given I should land on Job Ad page
    When I click on "Apply"
    Then I should land on Apply page

@onlyy
  Scenario: Existing member without resume can choose resume
    #    Given I am logged in with "<email>" and "<password>"
    Given I should land on Job Ad page
    And I click on "Apply"
    And I should land on Apply page
#    When I select a resume
#    Then the resume is selected
#  @prod
#  Examples:
#      | email | password | Remarks |
#      | jobsdbcarrielai4@gmail.com | carrie1234 | without resume |


#  Examples:
#      | email | password | Remarks |
#      | carrielai+300@seekasia.com | carrie1234 | without resume |
